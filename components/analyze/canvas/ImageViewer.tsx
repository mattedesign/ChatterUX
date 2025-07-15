import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Square, MousePointer, Trash2, Edit3 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { AnnotationDialog } from './AnnotationDialog';
import { AnnotationCommentThread } from './AnnotationCommentThread';
import svgPaths from '../../../imports/svg-nkc5nis5vb';

interface AnalysisImage {
  id: string;
  file_name: string;
  signedUrl?: string;
}

interface Annotation {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  feedback_type?: string;
  description?: string;
  created_at: string;
}

interface ImageViewerProps {
  image: AnalysisImage;
  zoom: number;
  rotation: number;
  panPosition: { x: number; y: number };
  onPanChange: (position: { x: number; y: number }) => void;
  onAnnotationCreate: (area: { x: number; y: number; width: number; height: number }, annotationData?: { label: string; feedback_type: string; description: string }) => void;
  onZoomChange?: (newZoom: number, center?: { x: number; y: number }) => void;
  annotationMode: boolean;
}

// Comment Pin Component from Figma import
function CommentPin({ onClick, isSelected }: { onClick?: () => void; isSelected?: boolean }) {
  return (
    <div 
      className={`relative shrink-0 size-9 cursor-pointer transition-all duration-200 ${isSelected ? 'scale-110' : 'hover:scale-105'}`} 
      data-name="Comment Pin"
      onClick={onClick}
    >
      <div className="absolute bottom-[-4.167%] left-[-2.778%] right-[-2.778%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 38 38"
        >
          <g id="Comment Pin">
            <g filter="url(#filter0_d_15_1039)" id="Icon">
              <path d={svgPaths.p26f80700} fill="url(#paint0_linear_15_1039)" />
              <path
                d={svgPaths.p21f6c400}
                stroke="url(#paint1_linear_15_1039)"
                strokeOpacity="0.25"
              />
            </g>
            <g id="Group 3">
              <circle
                cx="15.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 15"
                r="0.75"
              />
              <circle
                cx="18.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 16"
                r="0.75"
              />
              <circle
                cx="21.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 17"
                r="0.75"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="35"
              id="filter0_d_15_1039"
              width="38"
              x="0"
              y="2.5"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.15 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="plus-darker"
                result="effect1_dropShadow_15_1039"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_15_1039"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_15_1039"
              x1="19"
              x2="19"
              y1="4.5"
              y2="31.5"
            >
              <stop stopColor="#34A7FF" />
              <stop offset="1" stopColor="#0D7DFD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_15_1039"
              x1="19"
              x2="19"
              y1="4.5"
              y2="31.5"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -inset-1 border-2 border-blue-400 rounded-full animate-pulse" />
      )}
    </div>
  );
}

export function ImageViewer({
  image,
  zoom,
  rotation,
  panPosition,
  onPanChange,
  onAnnotationCreate,
  onZoomChange,
  annotationMode
}: ImageViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectionStart, setSelectionStart] = useState({ x: 0, y: 0 });
  const [currentSelection, setCurrentSelection] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [pendingSelection, setPendingSelection] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedAnnotation, setSelectedAnnotation] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [showAnnotationDialog, setShowAnnotationDialog] = useState(false);
  const [dialogPosition, setDialogPosition] = useState<{ x: number; y: number } | null>(null);
  
  // New state for comment thread
  const [showCommentThread, setShowCommentThread] = useState(false);
  const [commentThreadAnnotation, setCommentThreadAnnotation] = useState<Annotation | null>(null);
  const [commentThreadPosition, setCommentThreadPosition] = useState<{ x: number; y: number } | null>(null);

  // Convert mouse coordinates to image coordinates
  const getImageCoordinates = useCallback((clientX: number, clientY: number) => {
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return { x: 0, y: 0 };

    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;
    
    // Mouse position relative to container
    const mouseX = clientX - containerRect.left;
    const mouseY = clientY - containerRect.top;
    
    // Convert to image coordinates by accounting for pan and zoom
    const imageX = (mouseX - containerCenterX - panPosition.x) / zoom + imageDimensions.width / 2;
    const imageY = (mouseY - containerCenterY - panPosition.y) / zoom + imageDimensions.height / 2;
    
    return { x: imageX, y: imageY };
  }, [panPosition, zoom, imageDimensions]);

  // Convert image coordinates to screen coordinates
  const getScreenCoordinates = useCallback((imageX: number, imageY: number) => {
    const container = containerRef.current;
    if (!container) return { x: 0, y: 0 };

    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;
    
    // Convert from image coordinates to screen coordinates
    const screenX = (imageX - imageDimensions.width / 2) * zoom + containerCenterX + panPosition.x;
    const screenY = (imageY - imageDimensions.height / 2) * zoom + containerCenterY + panPosition.y;
    
    // Return absolute screen coordinates
    return { 
      x: screenX + containerRect.left, 
      y: screenY + containerRect.top 
    };
  }, [panPosition, zoom, imageDimensions]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (annotationMode) {
      // Annotation mode
      const imageCoords = getImageCoordinates(e.clientX, e.clientY);
      setSelectionStart(imageCoords);
      setCurrentSelection({ ...imageCoords, width: 0, height: 0 });
      setIsSelecting(true);
    } else {
      // Pan mode
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
      setIsDragging(true);
    }
    e.preventDefault();
  }, [annotationMode, getImageCoordinates, panPosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isSelecting && currentSelection) {
      const imageCoords = getImageCoordinates(e.clientX, e.clientY);
      
      setCurrentSelection({
        x: Math.min(selectionStart.x, imageCoords.x),
        y: Math.min(selectionStart.y, imageCoords.y),
        width: Math.abs(imageCoords.x - selectionStart.x),
        height: Math.abs(imageCoords.y - selectionStart.y)
      });
    } else if (isDragging && !annotationMode) {
      const newPosition = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      onPanChange(newPosition);
    }
  }, [isSelecting, isDragging, annotationMode, currentSelection, selectionStart, getImageCoordinates, dragStart, onPanChange]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (isSelecting && currentSelection && currentSelection.width > 10 && currentSelection.height > 10) {
      // Calculate the center of the selection in screen coordinates
      const centerX = currentSelection.x + currentSelection.width / 2;
      const centerY = currentSelection.y + currentSelection.height / 2;
      const screenCoords = getScreenCoordinates(centerX, centerY);
      
      // Store the selection and position, then show dialog
      setPendingSelection(currentSelection);
      setDialogPosition(screenCoords);
      setShowAnnotationDialog(true);
    }
    
    setIsDragging(false);
    setIsSelecting(false);
    setCurrentSelection(null);
  }, [isSelecting, currentSelection, getScreenCoordinates]);

  const handleAnnotationSave = (annotationData: { label: string; feedback_type: string; description: string }) => {
    if (pendingSelection) {
      // Create annotation with the saved data
      const newAnnotation: Annotation = {
        id: crypto.randomUUID(),
        ...pendingSelection,
        ...annotationData,
        created_at: new Date().toISOString()
      };
      setAnnotations(prev => [...prev, newAnnotation]);
      onAnnotationCreate(pendingSelection, annotationData);
      setPendingSelection(null);
      setDialogPosition(null);
    }
  };

  const handleAnnotationCancel = () => {
    setPendingSelection(null);
    setDialogPosition(null);
    setShowAnnotationDialog(false);
  };

  const handleDeleteAnnotation = (annotationId: string) => {
    setAnnotations(prev => prev.filter(a => a.id !== annotationId));
    setSelectedAnnotation(null);
    // Close comment thread if it's open for this annotation
    if (commentThreadAnnotation?.id === annotationId) {
      setShowCommentThread(false);
      setCommentThreadAnnotation(null);
      setCommentThreadPosition(null);
    }
  };

  const handleAnnotationClick = (annotation: Annotation) => {
    // Calculate pin position in screen coordinates
    const screenCoords = getScreenCoordinates(annotation.x, annotation.y);
    
    // Set selected annotation for visual feedback
    setSelectedAnnotation(annotation.id);
    
    // Show comment thread
    setCommentThreadAnnotation(annotation);
    setCommentThreadPosition(screenCoords);
    setShowCommentThread(true);
  };

  const handleCommentThreadClose = () => {
    setShowCommentThread(false);
    setCommentThreadAnnotation(null);
    setCommentThreadPosition(null);
    setSelectedAnnotation(null);
  };

  const handleCommentThreadReply = (message: string) => {
    console.log('Reply to annotation:', commentThreadAnnotation?.id, message);
    // Here you could add the reply to a conversation thread or trigger AI response
  };

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight
      });
    }
  }, []);

  // Handle wheel zoom
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!onZoomChange || annotationMode) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = e.clientX - rect.left;
    const centerY = e.clientY - rect.top;
    
    const zoomFactor = e.deltaY > 0 ? 0.95 : 1.05;
    const newZoom = zoom * zoomFactor;
    
    onZoomChange(newZoom, { x: centerX, y: centerY });
  }, [zoom, onZoomChange, annotationMode]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && !annotationMode) {
        const newPosition = {
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        };
        onPanChange(newPosition);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      setIsSelecting(false);
      setCurrentSelection(null);
    };

    if (isDragging || isSelecting) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, isSelecting, dragStart, onPanChange, annotationMode]);

  // Add wheel event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleWheel]);

  const getFeedbackIcon = (feedbackType?: string) => {
    switch (feedbackType) {
      case 'usability': return '🎯';
      case 'accessibility': return '♿';
      case 'visual_design': return '🎨';
      case 'content': return '📝';
      case 'performance': return '⚡';
      case 'conversion': return '💰';
      case 'mobile': return '📱';
      default: return '💡';
    }
  };

  if (!image.signedUrl) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-200 animate-pulse"></div>
          <p className="text-gray-500">Loading image...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative overflow-hidden bg-gray-100">
      {/* Annotation status indicator */}
      {annotations.length > 0 && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-card border border-border rounded-lg spline-shadow-sm p-2">
            <Badge variant="secondary" className="spline-text-xs">
              {annotations.length} annotation{annotations.length !== 1 ? 's' : ''}
            </Badge>
          </div>
        </div>
      )}

      {/* Annotation List */}
      {annotations.length > 0 && (
        <div className="absolute top-4 right-4 z-10 w-56">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 max-h-64 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Annotations</h3>
            <div className="space-y-1">
              {annotations.map((annotation) => (
                <div
                  key={annotation.id}
                  className={`flex items-start justify-between p-2 rounded cursor-pointer text-sm ${
                    selectedAnnotation === annotation.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnnotationClick(annotation)}
                >
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center">
                        <span className="text-gray-900 truncate mr-1">{annotation.label}</span>
                        {annotation.feedback_type && (
                          <span className="text-xs">{getFeedbackIcon(annotation.feedback_type)}</span>
                        )}
                      </div>
                      {annotation.feedback_type && (
                        <div className="text-xs text-gray-500 mt-0.5 capitalize">
                          {annotation.feedback_type.replace('_', ' ')}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAnnotation(annotation.id);
                    }}
                    className="p-1 h-auto text-gray-400 hover:text-red-500 flex-shrink-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div
        ref={containerRef}
        className="h-full w-full relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ 
          cursor: annotationMode ? (isSelecting ? 'crosshair' : 'crosshair') : (isDragging ? 'grabbing' : 'grab')
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoom}) rotate(${rotation}deg)`,
            transformOrigin: 'center'
          }}
        >
          <img
            ref={imageRef}
            src={image.signedUrl}
            alt={image.file_name}
            className="max-w-none shadow-lg main-image"
            draggable={false}
            onLoad={handleImageLoad}
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Annotations Overlay */}
        {imageLoaded && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoom})`,
              transformOrigin: 'center'
            }}
          >
            {/* Transform the annotation container to match the image position */}
            <div
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-${imageDimensions.width / 2}px, -${imageDimensions.height / 2}px)`,
                width: imageDimensions.width,
                height: imageDimensions.height
              }}
            >
              {annotations.map((annotation) => (
                <div
                  key={annotation.id}
                  className="absolute"
                  style={{
                    left: annotation.x,
                    top: annotation.y,
                    pointerEvents: 'auto'
                  }}
                >
                  {/* Comment Pin positioned at top-left of annotation area */}
                  <CommentPin
                    onClick={() => handleAnnotationClick(annotation)}
                    isSelected={selectedAnnotation === annotation.id}
                  />
                  
                  {/* Optional: Show annotation area outline on hover/selection */}
                  {selectedAnnotation === annotation.id && (
                    <div
                      className="absolute border-2 border-blue-400 bg-blue-400 bg-opacity-5 rounded-lg pointer-events-none"
                      style={{
                        left: 0,
                        top: 0,
                        width: annotation.width,
                        height: annotation.height
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Current Selection */}
              {currentSelection && (
                <div
                  className="absolute border-2 border-blue-600 bg-blue-600 bg-opacity-10 border-dashed"
                  style={{
                    left: currentSelection.x,
                    top: currentSelection.y,
                    width: currentSelection.width,
                    height: currentSelection.height
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-card border border-border rounded-lg spline-shadow-sm px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="spline-text-sm text-foreground">
                  {annotationMode ? 'Click and drag to create annotations, then add your comment' : 'Click comment pins to see AI advice and join the conversation'}
                </span>
              </div>
              <div className="flex items-center">
                <MousePointer className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="spline-text-sm text-foreground">
                  {annotationMode ? 'Switch to move tool to zoom and pan' : 'Drag to pan • Scroll to zoom'}
                </span>
              </div>
            </div>
            {annotations.length > 0 && (
              <div className="spline-text-xs text-muted-foreground">
                {annotations.length} annotation{annotations.length !== 1 ? 's' : ''} created
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Annotation Dialog */}
      <AnnotationDialog
        isOpen={showAnnotationDialog}
        onClose={handleAnnotationCancel}
        onSave={handleAnnotationSave}
        area={pendingSelection}
        position={dialogPosition}
      />

      {/* Comment Thread */}
      <AnnotationCommentThread
        isOpen={showCommentThread}
        onClose={handleCommentThreadClose}
        position={commentThreadPosition || { x: 0, y: 0 }}
        annotation={commentThreadAnnotation || { id: '', label: '', created_at: '' }}
        onReply={handleCommentThreadReply}
      />
    </div>
  );
}