import { useState, useCallback, useEffect } from 'react';
import { ImageGrid } from './ImageGrid';
import { ImageViewer } from './ImageViewer';

interface AnalysisImage {
  id: string;
  file_name: string;
  image_index: number;
  canvas_position: {
    x: number;
    y: number;
    zoom: number;
    rotation: number;
  };
  processing_status: string;
  signedUrl?: string;
}

interface MainCanvasProps {
  images: AnalysisImage[];
  selectedImageIndex: number | null;
  onImageSelect: (index: number | null) => void;
  onAnnotationCreate: (imageIndex: number, area: { x: number; y: number; width: number; height: number }, annotationData?: { label: string; feedback_type: string; description: string }) => void;
  onCanvasStateChange: (state: any) => void;
  annotationMode: boolean;
  onImageUpload: (file: File) => void;
  onBatchImageUpload?: (files: File[]) => void;
}

export function MainCanvas({
  images,
  selectedImageIndex,
  onImageSelect,
  onAnnotationCreate,
  onCanvasStateChange,
  annotationMode,
  onImageUpload,
  onBatchImageUpload
}: MainCanvasProps) {
  const [zoom, setZoom] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [initialFitCalculated, setInitialFitCalculated] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleZoomChange = useCallback((newZoom: number, center?: { x: number; y: number }) => {
    const clampedZoom = Math.max(0.1, Math.min(5.0, newZoom));
    
    if (center) {
      // Zoom towards the center point (mouse position)
      const zoomRatio = clampedZoom / zoom;
      const newPanPosition = {
        x: center.x - (center.x - panPosition.x) * zoomRatio,
        y: center.y - (center.y - panPosition.y) * zoomRatio
      };
      setPanPosition(newPanPosition);
      onCanvasStateChange({ zoom: clampedZoom, rotation, panPosition: newPanPosition });
    } else {
      onCanvasStateChange({ zoom: clampedZoom, rotation, panPosition });
    }
    
    setZoom(clampedZoom);
  }, [zoom, rotation, panPosition, onCanvasStateChange]);

  const handleFitToView = useCallback((containerWidth?: number, containerHeight?: number, imageWidth?: number, imageHeight?: number) => {
    // Use provided dimensions or try to calculate from DOM
    const container = document.querySelector('.image-viewer-container');
    const image = document.querySelector('.main-image');
    
    const contW = containerWidth || container?.clientWidth || 800;
    const contH = containerHeight || container?.clientHeight || 600;
    const imgW = imageWidth || (image as HTMLImageElement)?.naturalWidth || 800;
    const imgH = imageHeight || (image as HTMLImageElement)?.naturalHeight || 600;
    
    // Calculate the scale to fit the image within the container with some padding
    const padding = 120; // More padding for floating toolbar
    const scaleX = (contW - padding) / imgW;
    const scaleY = (contH - padding) / imgH;
    const fitZoom = Math.min(scaleX, scaleY, 1.0); // Don't zoom in beyond 100%
    
    // Center the image
    const newPanPosition = {
      x: (contW - imgW * fitZoom) / 2,
      y: (contH - imgH * fitZoom) / 2
    };
    
    setZoom(fitZoom);
    setRotation(0);
    setPanPosition(newPanPosition);
    setInitialFitCalculated(true);
    onCanvasStateChange({ zoom: fitZoom, rotation: 0, panPosition: newPanPosition });
  }, [onCanvasStateChange]);

  // Auto-fit when image changes
  useEffect(() => {
    if (selectedImageIndex !== null && !initialFitCalculated) {
      // Delay to ensure image is loaded
      const timer = setTimeout(() => {
        handleFitToView();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedImageIndex, initialFitCalculated, handleFitToView]);

  // Handle wheel zoom
  const handleWheel = useCallback((e: WheelEvent) => {
    if (selectedImageIndex === null) return;
    
    e.preventDefault();
    
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const centerX = e.clientX - rect.left;
    const centerY = e.clientY - rect.top;
    
    const zoomFactor = e.deltaY > 0 ? 0.95 : 1.05;
    const newZoom = zoom * zoomFactor;
    
    handleZoomChange(newZoom, { x: centerX, y: centerY });
  }, [selectedImageIndex, zoom, handleZoomChange]);

  // Drag and drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => prev + 1);
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => {
      const newCounter = prev - 1;
      if (newCounter === 0) {
        setIsDragging(false);
      }
      return newCounter;
    });
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragging(false);
    setDragCounter(0);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      // Handle multiple files but respect the 5-image limit
      const remainingSlots = 5 - images.length;
      const filesToUpload = imageFiles.slice(0, remainingSlots);
      
      if (onBatchImageUpload) {
        onBatchImageUpload(filesToUpload);
      } else {
        // Fallback to single file upload
        filesToUpload.forEach(file => {
          onImageUpload(file);
        });
      }
    }
  }, [images.length, onImageUpload, onBatchImageUpload]);

  const handleFileInputClick = useCallback(() => {
    // Create and trigger file input with multiple selection
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true; // Allow multiple file selection
    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      
      if (imageFiles.length > 0) {
        // Respect the 5-image limit
        const remainingSlots = 5 - images.length;
        const filesToUpload = imageFiles.slice(0, remainingSlots);
        
        if (onBatchImageUpload) {
          onBatchImageUpload(filesToUpload);
        } else {
          // Fallback to single file upload
          filesToUpload.forEach(file => {
            onImageUpload(file);
          });
        }
      }
    };
    input.click();
  }, [images.length, onImageUpload, onBatchImageUpload]);

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;
  const showUploadTarget = images.length === 0;
  const remainingSlots = 5 - images.length;

  return (
    <div className="h-full bg-background relative">
      {/* Upload Target Container - Only shown when empty */}
      {showUploadTarget && (
        <div 
          className={`absolute inset-4 border-3 border-dashed rounded-2xl transition-all duration-300 z-10 cursor-pointer ${
            isDragging 
              ? 'border-blue-400 bg-blue-50' 
              : isHovering 
                ? 'border-accent-foreground/40 bg-accent/30' 
                : 'border-accent-foreground/20 bg-accent/10'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleFileInputClick}
        >
          <div className="absolute inset-0 rounded-xl flex items-center justify-center">
            <div className="text-center max-w-md px-6">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
                isDragging 
                  ? 'border-blue-400 bg-blue-100' 
                  : isHovering 
                    ? 'border-accent-foreground/50 bg-accent/50' 
                    : 'border-accent-foreground/30 bg-accent/30'
              }`}>
                <svg className={`w-10 h-10 transition-colors duration-300 ${
                  isDragging ? 'text-blue-500' : 'text-muted-foreground'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isDragging ? 'Drop your images here' : 'Upload Images to Begin'}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {isDragging 
                  ? `Drop up to ${remainingSlots} image${remainingSlots !== 1 ? 's' : ''} to start your analysis`
                  : 'Drag and drop images here, or click to browse. Select multiple images to upload up to 5 at once for UX analysis.'
                }
              </p>
              
              {!isDragging && (
                <div className="space-y-4">
                  <div className="spline-text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Supported formats: PNG, JPG, GIF, WebP
                    </span>
                    <br />
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Select multiple images • Maximum 5 images • {images.length}/5 uploaded
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Canvas Content */}
      <div 
        className="h-full relative overflow-hidden image-viewer-container"
        onWheel={handleWheel}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          // Single Image View
          <ImageViewer
            image={selectedImage}
            zoom={zoom}
            rotation={rotation}
            panPosition={panPosition}
            onPanChange={setPanPosition}
            onAnnotationCreate={(area, annotationData) => onAnnotationCreate(selectedImageIndex!, area, annotationData)}
            onZoomChange={handleZoomChange}
            annotationMode={annotationMode}
          />
        ) : (
          // Grid View - only show when there are images and no upload target
          !showUploadTarget && (
            <ImageGrid
              images={images}
              onImageSelect={onImageSelect}
              onImageUpload={onImageUpload}
              onBatchImageUpload={onBatchImageUpload}
            />
          )
        )}

        {/* Active Drag overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-blue-50 bg-opacity-95 flex items-center justify-center z-50 pointer-events-none">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-blue-100 border-2 border-dashed border-blue-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Drop Images Here
              </h3>
              <p className="text-blue-600 font-medium">
                {remainingSlots > 0 
                  ? `Upload up to ${remainingSlots} more image${remainingSlots !== 1 ? 's' : ''}`
                  : 'Maximum of 5 images reached'
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}