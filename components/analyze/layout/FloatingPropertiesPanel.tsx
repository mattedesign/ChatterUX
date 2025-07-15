import { ReactNode, useState } from 'react';
import { Users, Share, Plus, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface AnalysisImage {
  id: string;
  file_name: string;
  file_size?: number;
  dimensions?: { width: number; height: number };
  processing_status: string;
  screen_type?: string;
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

interface Insight {
  id: string;
  insight_type: string;
  title: string;
  description: string;
  priority: string;
  confidence_score: number;
}

interface FloatingPropertiesPanelProps {
  selectedImage: AnalysisImage | null;
  insights: Insight[];
  annotations: Annotation[];
  onAnnotationUpdate?: (annotationId: string, updates: Partial<Annotation>) => void;
  onAnnotationDelete?: (annotationId: string) => void;
  sessionInfo: {
    title: string;
    status: string;
    imageCount: number;
  };
}

export function FloatingPropertiesPanel({
  selectedImage,
  insights,
  annotations,
  onAnnotationUpdate,
  onAnnotationDelete,
  sessionInfo
}: FloatingPropertiesPanelProps) {
  const [activeTab, setActiveTab] = useState<'files' | 'suggestions'>('files');

  return (
    <div className="fixed bottom-3 right-3 top-3 w-60 z-40">
      <div className="bg-card border border-border rounded-[20px] spline-shadow-sm h-full overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-card"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-card -ml-2"></div>
              </div>
              <Button className="spline-gradient spline-shadow-button spline-shadow-inset" size="sm">
                Share
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-3 pb-3 border-b border-border">
            <div className="bg-secondary border border-border rounded-xl p-1">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('files')}
                  className={`flex-1 px-3 py-2 text-[13px] font-semibold tracking-[-0.13px] rounded-lg transition-all ${
                    activeTab === 'files' 
                      ? 'bg-card text-foreground spline-shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                >
                  Files
                </button>
                <button
                  onClick={() => setActiveTab('suggestions')}
                  className={`flex-1 px-3 py-2 text-[13px] font-semibold tracking-[-0.13px] rounded-lg transition-all ${
                    activeTab === 'suggestions' 
                      ? 'bg-card text-foreground spline-shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                >
                  Suggestions
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex-1 overflow-y-auto">
            {/* Materials Section */}
            <div className="border-b border-border">
              <div className="flex items-center justify-between px-4 py-3 h-12">
                <span className="spline-text-sm font-semibold text-foreground">
                  Materials
                </span>
                <Button variant="ghost" size="sm" className="w-4 h-4 p-0">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
              
              <div className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-secondary aspect-square rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="bg-secondary aspect-square rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="bg-secondary aspect-square rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="bg-secondary aspect-square rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Styles Section */}
            <div className="border-b border-border">
              <div className="flex items-center justify-between px-4 py-3 h-12">
                <span className="spline-text-sm font-semibold text-foreground">
                  Styles
                </span>
                <Button variant="ghost" size="sm" className="w-4 h-4 p-0">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
              
              <div className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-blue-500"></div>
                </div>
              </div>
            </div>

            {/* Backgrounds Section */}
            <div className="border-b border-border">
              <div className="flex items-center justify-between px-4 py-3 h-12">
                <span className="spline-text-sm font-semibold text-foreground">
                  Backgrounds
                </span>
                <Button variant="ghost" size="sm" className="w-4 h-4 p-0">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
              
              <div className="px-4 pb-4">
                <div className="bg-secondary border border-border rounded-lg p-1 flex items-center">
                  <div className="flex items-center gap-3 flex-1 px-3">
                    <div className="w-7 h-7 bg-[#f4f4f4] rounded-md border border-[rgba(50,50,50,0.01)]"></div>
                    <span className="spline-text-sm text-foreground font-medium">
                      F4F4F4
                    </span>
                  </div>
                  <div className="px-3 py-2 spline-text-sm text-foreground font-medium">
                    100 %
                  </div>
                </div>
              </div>
            </div>

            {/* Camera Section */}
            <div>
              <div className="flex items-center justify-between px-4 py-3 h-12">
                <span className="spline-text-sm font-semibold text-foreground">
                  Camera
                </span>
                <Button variant="ghost" size="sm" className="w-4 h-4 p-0">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
              
              <div className="px-4 pb-3">
                {/* Camera Toggle */}
                <div className="bg-secondary border border-border rounded-lg p-1 mb-3">
                  <div className="flex h-9">
                    <button className="flex-1 px-3 py-1.5 bg-card text-foreground spline-text-sm font-semibold rounded-md spline-shadow-sm">
                      Isometric
                    </button>
                    <button className="flex-1 px-3 py-1.5 text-muted-foreground spline-text-sm font-medium">
                      Perspective
                    </button>
                  </div>
                </div>
                
                {/* Distortion Control */}
                <div className="px-1">
                  <label className="spline-text-xs text-foreground font-medium block mb-2">
                    Distortion
                  </label>
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-9 bg-secondary rounded-lg relative">
                      <div className="absolute inset-0 bg-[rgba(123,123,123,0.3)] rounded-lg"></div>
                      <div className="absolute left-0 top-0 bottom-0 w-6 bg-background rounded-md shadow-sm border border-border"></div>
                    </div>
                    <div className="bg-secondary border border-border rounded-lg px-2.5 py-2.5 flex items-center gap-1.5">
                      <div className="w-4 h-4 text-muted-foreground opacity-70">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.3333 5.33333L14.5286 7.52858C14.7889 7.78893 14.7889 8.21104 14.5286 8.47139L12.3333 10.6667M3.66667 5.33333L1.47141 7.52858C1.21106 7.78893 1.21105 8.21104 1.4714 8.47139L3.66667 10.6667M1.66667 7.99998H14.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="spline-text-sm text-foreground font-medium">
                        0.283
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}