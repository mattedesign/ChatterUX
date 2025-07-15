import { Settings, Share, Plus, Save } from 'lucide-react';
import { Button } from '../../ui/button';

interface StudioHeaderProps {
  sessionTitle: string;
  onNewSession: () => void;
  onSaveSession: () => void;
  onShareSession: () => void;
  onSettings: () => void;
}

export function StudioHeader({
  sessionTitle,
  onNewSession,
  onSaveSession,
  onShareSession,
  onSettings
}: StudioHeaderProps) {
  return (
    <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left Side - Logo/Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-card rounded-sm"></div>
        </div>
        <div>
          <h1 className="font-semibold text-foreground text-[15px] leading-6 tracking-[-0.3px]">
            {sessionTitle}
          </h1>
          <p className="spline-text-sm text-muted-foreground">
            UX Analysis Studio
          </p>
        </div>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onNewSession}
          className="spline-text-sm"
        >
          <Plus className="w-4 h-4 mr-1" />
          New Session
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onSaveSession}
          className="spline-text-sm"
        >
          <Save className="w-4 h-4 mr-1" />
          Save
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onShareSession}
          className="spline-text-sm"
        >
          <Share className="w-4 h-4 mr-1" />
          Share
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onSettings}
          className="w-8 h-8 p-0"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}