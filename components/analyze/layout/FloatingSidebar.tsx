import { ReactNode, useState } from 'react';
import { Search, Command, ChevronDown, ChevronRight, FileText, Image, Plus, Camera, Lightbulb, Sun, Zap, Cube } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Badge } from '../../ui/badge';

interface FloatingSidebarProps {
  images: any[];
  selectedImageIndex: number | null;
  onImageSelect: (index: number | null) => void;
  sessionTitle: string;
}

export function FloatingSidebar({ 
  images, 
  selectedImageIndex, 
  onImageSelect,
  sessionTitle 
}: FloatingSidebarProps) {
  const [activeTab, setActiveTab] = useState<'menu' | 'analysis'>('menu');
  const [expandedSections, setExpandedSections] = useState({
    project: true,
    layers: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="fixed bottom-3 left-3 top-3 w-60 z-40">
      <div className="bg-card border border-border rounded-[20px] spline-shadow-sm h-full overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-card rounded-sm"></div>
              </div>
              <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                <div className="w-4 h-4 text-muted-foreground">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v3A1.5 1.5 0 004.5 8h3A1.5 1.5 0 009 6.5v-3A1.5 1.5 0 007.5 2h-3zM4.5 12A1.5 1.5 0 003 13.5v3A1.5 1.5 0 004.5 18h3A1.5 1.5 0 009 16.5v-3A1.5 1.5 0 007.5 12h-3zM13.5 2A1.5 1.5 0 0012 3.5v3A1.5 1.5 0 0013.5 8h3A1.5 1.5 0 0018 6.5v-3A1.5 1.5 0 0016.5 2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </Button>
            </div>
            
            <div className="mb-2">
              <h3 className="font-semibold text-[15px] leading-6 text-foreground tracking-[-0.3px] truncate">
                UX Analysis Studio
              </h3>
            </div>
            
            <p className="spline-text-sm text-muted-foreground opacity-80 truncate">
              Design Analysis Project
            </p>
          </div>

          {/* Tabs */}
          <div className="px-4 pb-3 border-b border-border">
            <div className="bg-secondary border border-border rounded-xl p-1">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`flex-1 px-3 py-2 text-[13px] font-semibold tracking-[-0.13px] rounded-lg transition-all ${
                    activeTab === 'menu' 
                      ? 'bg-card text-foreground spline-shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                >
                  Menu
                </button>
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`flex-1 px-3 py-2 text-[13px] font-semibold tracking-[-0.13px] rounded-lg transition-all ${
                    activeTab === 'analysis' 
                      ? 'bg-card text-foreground spline-shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                >
                  Analysis
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'menu' && (
              <div className="p-3 space-y-1">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => onImageSelect(index)}
                    className={`h-10 px-1 pr-3 py-1 rounded-xl cursor-pointer transition-all ${
                      selectedImageIndex === index 
                        ? 'bg-secondary border border-border' 
                        : 'bg-card hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        selectedImageIndex === index ? 'bg-card spline-shadow-sm' : 'bg-secondary'
                      }`}>
                        <Image className="w-4 h-4" />
                      </div>
                      <span className="spline-text-sm text-foreground font-medium truncate">
                        {image.file_name}
                      </span>
                    </div>
                  </div>
                ))}
                
                {images.length === 0 && (
                  <div className="text-center py-8">
                    <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="spline-text-sm text-muted-foreground">
                      No images uploaded
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'analysis' && (
              <div className="p-3">
                <p className="spline-text-sm text-muted-foreground text-center py-8">
                  Select an image to view analysis
                </p>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="border-t border-border bg-card">
            <div className="p-3">
              <div className="bg-card border border-border rounded-xl px-1 pr-2.5 py-1 h-10 flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <Search className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="spline-text-sm text-muted-foreground">
                    Search...
                  </span>
                </div>
                <div className="bg-secondary border border-border rounded-md px-1.5 py-0.5 spline-shadow-sm">
                  <span className="text-[11px] font-medium leading-4 tracking-[-0.11px] text-muted-foreground">
                    ⌘ K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}