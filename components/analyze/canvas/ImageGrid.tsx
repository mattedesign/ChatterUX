import { useState, useRef } from 'react';
import { Eye, MoreVertical, Download, Trash2, Plus, Loader2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';

interface AnalysisImage {
  id: string;
  file_name: string;
  image_index: number;
  processing_status: string;
  signedUrl?: string;
  file_size?: number;
}

interface ImageGridProps {
  images: AnalysisImage[];
  onImageSelect: (index: number) => void;
  onImageUpload: (file: File) => void;
  onBatchImageUpload?: (files: File[]) => void;
}

export function ImageGrid({ images, onImageSelect, onImageUpload, onBatchImageUpload }: ImageGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isUploadHovered, setIsUploadHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Unknown size';
    const kb = bytes / 1024;
    const mb = kb / 1024;
    return mb > 1 ? `${mb.toFixed(1)} MB` : `${kb.toFixed(1)} KB`;
  };

  const getGridColumns = () => {
    const count = images.length;
    if (count <= 1) return 'grid-cols-1';
    if (count <= 4) return 'grid-cols-2';
    if (count <= 9) return 'grid-cols-3';
    return 'grid-cols-4';
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      // Respect the 5-image limit
      const remainingSlots = 5 - images.length;
      const filesToUpload = imageFiles.slice(0, remainingSlots);
      
      if (onBatchImageUpload && filesToUpload.length > 1) {
        onBatchImageUpload(filesToUpload);
      } else if (filesToUpload.length > 0) {
        // Use single file upload for single files or as fallback
        filesToUpload.forEach(file => {
          onImageUpload(file);
        });
      }
    }
    
    // Reset input so same files can be uploaded again
    e.target.value = '';
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const canAddMore = images.length < 5;
  const remainingSlots = 5 - images.length;
  const processingCount = images.filter(img => img.processing_status === 'processing').length;

  // Grid view - images should exist since empty state is handled by MainCanvas
  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Images ({images.length}/5)
            </h2>
            <p className="spline-text-sm text-muted-foreground mt-1">
              {processingCount > 0 ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing {processingCount} image{processingCount !== 1 ? 's' : ''}...
                </span>
              ) : canAddMore ? (
                `Upload up to ${remainingSlots} more image${remainingSlots !== 1 ? 's' : ''} for analysis`
              ) : (
                'Maximum of 5 images reached'
              )}
            </p>
          </div>
          
          {canAddMore && (
            <Button
              onClick={triggerFileUpload}
              disabled={processingCount > 0}
              className="bg-foreground hover:bg-foreground/90 text-background spline-shadow-button spline-shadow-inset disabled:opacity-50"
              size="sm"
              onMouseEnter={() => setIsUploadHovered(true)}
              onMouseLeave={() => setIsUploadHovered(false)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Image{remainingSlots > 1 ? 's' : ''}
            </Button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="p-6">
        <div className={`grid gap-4 ${getGridColumns()} max-w-6xl mx-auto`}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-card border border-border rounded-lg transition-all duration-200 cursor-pointer spline-shadow-sm ${
                image.processing_status === 'processing' 
                  ? 'border-blue-200 bg-blue-50/50' 
                  : 'hover:border-accent-foreground/20 hover:spline-shadow-lg'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => image.processing_status === 'uploaded' && onImageSelect(index)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden bg-secondary relative">
                {image.signedUrl && image.processing_status === 'uploaded' ? (
                  <img
                    src={image.signedUrl}
                    alt={image.file_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      {image.processing_status === 'processing' ? (
                        <>
                          <Loader2 className="w-8 h-8 mx-auto mb-2 text-blue-500 animate-spin" />
                          <div className="spline-text-xs text-blue-600 font-medium">
                            Processing...
                          </div>
                          <div className="spline-text-xs text-muted-foreground mt-1">
                            Analyzing image
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-muted animate-pulse"></div>
                          <div className="spline-text-xs text-muted-foreground">
                            {image.processing_status === 'uploading' ? 'Uploading...' : 'Loading...'}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Overlay - Only show for uploaded images */}
                {hoveredIndex === index && image.processing_status === 'uploaded' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-card hover:bg-secondary spline-shadow-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onImageSelect(index);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                )}

                {/* Processing Badge */}
                {image.processing_status === 'processing' && (
                  <div className="absolute top-2 left-2">
                    <div className="px-2 py-1 spline-text-xs bg-blue-600 text-white rounded spline-shadow-sm flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Processing
                    </div>
                  </div>
                )}

                {/* Status Badge for other statuses */}
                {image.processing_status !== 'uploaded' && image.processing_status !== 'processing' && (
                  <div className="absolute top-2 left-2">
                    <div className="px-2 py-1 spline-text-xs bg-yellow-600 text-white rounded spline-shadow-sm">
                      {image.processing_status}
                    </div>
                  </div>
                )}

                {/* Index Badge */}
                <div className="absolute top-2 right-2">
                  <div className={`w-6 h-6 text-background spline-text-xs rounded-full flex items-center justify-center spline-shadow-sm ${
                    image.processing_status === 'processing' 
                      ? 'bg-blue-500' 
                      : 'bg-foreground bg-opacity-80'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Processing overlay */}
                {image.processing_status === 'processing' && (
                  <div className="absolute inset-0 bg-blue-100/20 backdrop-blur-[1px] pointer-events-none"></div>
                )}
              </div>

              {/* Image Info */}
              <div className="p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className={`spline-text-sm font-medium truncate ${
                      image.processing_status === 'processing' 
                        ? 'text-blue-700' 
                        : 'text-foreground'
                    }`}>
                      {image.file_name}
                    </h3>
                    <p className="spline-text-xs text-muted-foreground mt-1">
                      {image.processing_status === 'processing' 
                        ? 'Analyzing...' 
                        : formatFileSize(image.file_size)
                      }
                    </p>
                  </div>
                  
                  {image.processing_status === 'uploaded' && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            onImageSelect(index);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Full Size
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Image Card */}
          {canAddMore && (
            <div
              className={`aspect-[4/3] border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 group ${
                processingCount > 0 
                  ? 'border-muted bg-muted/30 cursor-not-allowed' 
                  : 'border-border hover:border-accent-foreground/40 hover:bg-accent/30'
              }`}
              onClick={processingCount > 0 ? undefined : triggerFileUpload}
              onMouseEnter={() => setIsUploadHovered(true)}
              onMouseLeave={() => setIsUploadHovered(false)}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full border border-border flex items-center justify-center transition-all duration-200 ${
                  processingCount > 0 
                    ? 'bg-muted border-muted' 
                    : isUploadHovered 
                      ? 'bg-accent/50 border-accent-foreground/30' 
                      : 'bg-secondary'
                }`}>
                  {processingCount > 0 ? (
                    <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" />
                  ) : (
                    <Plus className={`w-6 h-6 transition-colors duration-200 ${
                      isUploadHovered ? 'text-foreground' : 'text-muted-foreground'
                    }`} />
                  )}
                </div>
                <div className={`spline-text-sm font-medium mb-1 transition-colors duration-200 ${
                  processingCount > 0 
                    ? 'text-muted-foreground' 
                    : isUploadHovered 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                }`}>
                  {processingCount > 0 ? 'Processing...' : `Add Image${remainingSlots > 1 ? 's' : ''}`}
                </div>
                <div className="spline-text-xs text-muted-foreground">
                  {processingCount > 0 ? 'Please wait' : 'PNG, JPG, GIF, WebP'}
                </div>
                <div className="spline-text-xs text-muted-foreground mt-1">
                  {processingCount > 0 ? '' : `${remainingSlots} remaining`}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hidden file input with multiple selection */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Footer message */}
        {images.length > 0 && (
          <div className="mt-8 text-center">
            <p className="spline-text-sm text-muted-foreground">
              {processingCount > 0 ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing {processingCount} image{processingCount !== 1 ? 's' : ''}. Please wait before uploading more or asking questions.
                </span>
              ) : canAddMore ? (
                `You can upload ${remainingSlots} more image${remainingSlots !== 1 ? 's' : ''} for comparison and analysis. Select multiple files to upload them all at once.`
              ) : (
                'You\'ve reached the maximum of 5 images. Select any image above to analyze or annotate it.'
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}