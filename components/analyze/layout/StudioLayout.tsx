import { ReactNode } from 'react';

interface StudioLayoutProps {
  header: ReactNode;
  chatPanel: ReactNode;
  mainCanvas: ReactNode;
  propertiesPanel: ReactNode;
}

export function StudioLayout({
  header,
  chatPanel,
  mainCanvas,
  propertiesPanel
}: StudioLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      {header}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden p-3 gap-3">
        {/* Chat Panel - Left */}
        <div className="w-80 flex-shrink-0">
          <div className="h-full bg-card border border-border rounded-[20px] spline-shadow-sm overflow-hidden">
            {chatPanel}
          </div>
        </div>

        {/* Main Canvas - Center */}
        <div className="flex-1 min-w-0 relative">
          <div className="h-full bg-card border border-border rounded-[20px] spline-shadow-sm overflow-hidden">
            {mainCanvas}
          </div>
        </div>

        {/* Properties Panel - Right */}
        <div className="w-80 flex-shrink-0">
          <div className="h-full bg-card border border-border rounded-[20px] spline-shadow-sm overflow-hidden">
            {propertiesPanel}
          </div>
        </div>
      </div>
    </div>
  );
}