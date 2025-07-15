import { MousePointer, Hand, MessageSquare, Crop, Play, ZoomIn, ZoomOut, RotateCcw, ChevronDown, Grid3X3, Maximize2, ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/button';

interface FloatingToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  annotationMode: boolean;
  onAnnotationModeChange: (mode: boolean) => void;
  // New props for view mode switching
  isGridView: boolean;
  hasImages: boolean;
  onToggleView: () => void;
}

export function FloatingToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  annotationMode,
  onAnnotationModeChange,
  isGridView,
  hasImages,
  onToggleView
}: FloatingToolbarProps) {
  return (
    <div 
      className="fixed top-3 z-50"
      style={{ 
        // Center relative to main canvas area (accounting for 280px left + 320px right sidebars)
        left: 'calc(280px + (100vw - 280px - 320px) / 2)',
        transform: 'translateX(-50%)'
      }}
    >
      <div className="bg-card border border-border rounded-[20px] spline-shadow-toolbar">
        <div className="flex items-center p-0">
          {/* View Mode Group - Only show when there are images */}
          {hasImages && (
            <div className="flex items-center gap-2 p-2 border-r border-border">
              {/* Back to Grid / Show Single */}
              <Button
                variant={!isGridView ? "secondary" : "ghost"}
                size="sm"
                className="w-10 h-10 p-0"
                onClick={onToggleView}
                title={isGridView ? "Switch to single view" : "Back to grid view"}
              >
                {isGridView ? <Maximize2 className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              </Button>
              
              {/* Grid View */}
              <Button
                variant={isGridView ? "secondary" : "ghost"}
                size="sm"
                className="w-10 h-10 p-0"
                onClick={() => !isGridView && onToggleView()}
                title="Grid view"
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Tool Group */}
          <div className="flex items-center gap-2 p-2 border-r border-border">
            {/* Move Tool - Active when NOT in annotation mode */}
            <Button
              variant={!annotationMode ? "secondary" : "ghost"}
              size="sm"
              className="w-10 h-10 p-0"
              onClick={() => onAnnotationModeChange(false)}
              title="Move tool"
            >
              <MousePointer className="w-5 h-5" />
            </Button>
            
            {/* Pan Tool - Currently not implemented as separate mode */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 opacity-50"
              title="Pan tool (integrated with move tool)"
              disabled
            >
              <Hand className="w-5 h-5" />
            </Button>
            
            {/* Comment Tool - Active when in annotation mode */}
            <Button
              variant={annotationMode ? "secondary" : "ghost"}
              size="sm"
              className="w-10 h-10 p-0"
              onClick={() => onAnnotationModeChange(true)}
              title="Comment tool"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
            
            {/* Frame Tool - Not implemented yet */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 opacity-50"
              title="Frame tool (coming soon)"
              disabled
            >
              <Crop className="w-5 h-5" />
            </Button>
            
            {/* Play Mode - Not implemented yet */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 opacity-50"
              title="Play mode (coming soon)"
              disabled
            >
              <Play className="w-5 h-5" />
            </Button>
            
            {/* Zoom Control - Only show in single image view */}
            {!isGridView && (
              <div className="bg-secondary border border-border rounded-xl h-full">
                <div className="flex items-center justify-between px-3 py-1 h-10">
                  <span className="spline-text-sm text-foreground">
                    {Math.round(zoom * 100)}%
                  </span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            )}
            
            {/* Undo - Not implemented yet */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 opacity-30"
              disabled
              title="Undo (coming soon)"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
            
            {/* Reset / Fit to View */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0"
              onClick={onReset}
              title={isGridView ? "Reset" : "Fit to view"}
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Export Section */}
          <div className="p-2">
            <Button 
              className="spline-gradient spline-shadow-button spline-shadow-inset"
              size="sm"
              title="Export"
            >
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}