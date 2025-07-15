import { useState } from 'react';
import { ChevronDown, ChevronRight, Image, Lightbulb, Settings, FileText, Square, Trash2, Edit3, MessageSquare, Grid3X3, BarChart3 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

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

interface PropertiesPanelProps {
  selectedImage: AnalysisImage | null;
  insights: Insight[];
  sessionInfo: {
    title: string;
    status: string;
    imageCount: number;
  };
  annotations?: Annotation[];
  onAnnotationUpdate?: (annotationId: string, updates: Partial<Annotation>) => void;
  onAnnotationDelete?: (annotationId: string) => void;
  // New props for contextual awareness
  allImages?: AnalysisImage[];
  allAnnotations?: Annotation[];
}

const feedbackTypes = [
  { value: 'usability', label: 'Usability', icon: '🎯' },
  { value: 'accessibility', label: 'Accessibility', icon: '♿' },
  { value: 'visual_design', label: 'Visual Design', icon: '🎨' },
  { value: 'content', label: 'Content', icon: '📝' },
  { value: 'performance', label: 'Performance', icon: '⚡' },
  { value: 'conversion', label: 'Conversion', icon: '💰' },
  { value: 'mobile', label: 'Mobile Experience', icon: '📱' },
  { value: 'general', label: 'General Feedback', icon: '💡' }
];

export function PropertiesPanel({ 
  selectedImage, 
  insights, 
  sessionInfo, 
  annotations = [],
  onAnnotationUpdate,
  onAnnotationDelete,
  allImages = [],
  allAnnotations = []
}: PropertiesPanelProps) {
  const [expandedSections, setExpandedSections] = useState({
    session: true,
    summary: true,
    image: true,
    annotations: true,
    insights: true,
    export: false
  });

  const [editingAnnotation, setEditingAnnotation] = useState<string | null>(null);
  const [editingData, setEditingData] = useState<{ label: string; feedback_type: string; description: string }>({
    label: '', 
    feedback_type: '', 
    description: ''
  });

  // Determine if we're in grid view (no image selected) or single image view
  const isGridView = selectedImage === null;
  const hasImages = allImages.length > 0;

  // Generate summary statistics for grid view
  const getSummaryStats = () => {
    const totalAnnotations = allAnnotations.length;
    const completedImages = allImages.filter(img => img.processing_status === 'uploaded').length;
    const processingImages = allImages.filter(img => img.processing_status === 'processing').length;
    const totalInsights = insights.length;
    
    const insightsByType = insights.reduce((acc, insight) => {
      acc[insight.insight_type] = (acc[insight.insight_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const annotationsByType = allAnnotations.reduce((acc, annotation) => {
      if (annotation.feedback_type) {
        acc[annotation.feedback_type] = (acc[annotation.feedback_type] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      totalAnnotations,
      completedImages,
      processingImages,
      totalInsights,
      insightsByType,
      annotationsByType
    };
  };

  const summaryStats = getSummaryStats();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEditAnnotation = (annotation: Annotation) => {
    setEditingAnnotation(annotation.id);
    setEditingData({
      label: annotation.label || '',
      feedback_type: annotation.feedback_type || '',
      description: annotation.description || ''
    });
  };

  const handleSaveAnnotation = (annotationId: string) => {
    if (onAnnotationUpdate) {
      onAnnotationUpdate(annotationId, editingData);
    }
    setEditingAnnotation(null);
    setEditingData({ label: '', feedback_type: '', description: '' });
  };

  const handleCancelEdit = () => {
    setEditingAnnotation(null);
    setEditingData({ label: '', feedback_type: '', description: '' });
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Unknown';
    const kb = bytes / 1024;
    const mb = kb / 1024;
    return mb > 1 ? `${mb.toFixed(1)} MB` : `${kb.toFixed(1)} KB`;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'usability': return '🎯';
      case 'visual_design': return '🎨';
      case 'accessibility': return '♿';
      case 'performance': return '⚡';
      case 'content': return '📝';
      default: return '💡';
    }
  };

  const getFeedbackTypeInfo = (type?: string) => {
    return feedbackTypes.find(ft => ft.value === type);
  };

  return (
    <div className="h-full flex flex-col bg-card">
      {/* Properties Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Properties</h2>
        <p className="spline-text-sm text-muted-foreground mt-1">
          {isGridView ? 'Analysis overview and summary' : 'Selected image details and insights'}
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Session Info Section */}
        <div className="border-b border-border">
          <button
            className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
            onClick={() => toggleSection('session')}
          >
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="font-medium text-foreground">Session</span>
            </div>
            {expandedSections.session ? 
              <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          
          {expandedSections.session && (
            <div className="px-4 pb-4 space-y-3">
              <div>
                <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Title</label>
                <p className="spline-text-sm text-foreground mt-1">{sessionInfo.title}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Status</label>
                  <p className="spline-text-sm text-foreground mt-1 capitalize">{sessionInfo.status}</p>
                </div>
                <div>
                  <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Images</label>
                  <p className="spline-text-sm text-foreground mt-1">{sessionInfo.imageCount}/5</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary Section (Grid View Only) */}
        {isGridView && hasImages && (
          <div className="border-b border-border">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
              onClick={() => toggleSection('summary')}
            >
              <div className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="font-medium text-foreground">Analysis Summary</span>
              </div>
              {expandedSections.summary ? 
                <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              }
            </button>
            
            {expandedSections.summary && (
              <div className="px-4 pb-4 space-y-4">
                {/* Processing Status */}
                <div>
                  <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Processing Status</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200">
                      <div className="spline-text-sm font-medium text-green-800">{summaryStats.completedImages}</div>
                      <div className="spline-text-xs text-green-600">Completed</div>
                    </div>
                    {summaryStats.processingImages > 0 && (
                      <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="spline-text-sm font-medium text-blue-800">{summaryStats.processingImages}</div>
                        <div className="spline-text-xs text-blue-600">Processing</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Analysis Overview */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Total Insights</label>
                    <p className="spline-text-sm font-medium text-foreground mt-1">{summaryStats.totalInsights}</p>
                  </div>
                  <div>
                    <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Annotations</label>
                    <p className="spline-text-sm font-medium text-foreground mt-1">{summaryStats.totalAnnotations}</p>
                  </div>
                </div>

                {/* Top Insight Categories */}
                {Object.keys(summaryStats.insightsByType).length > 0 && (
                  <div>
                    <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Top Insight Categories</label>
                    <div className="space-y-1">
                      {Object.entries(summaryStats.insightsByType)
                        .sort(([,a], [,b]) => b - a)
                        .slice(0, 3)
                        .map(([type, count]) => (
                          <div key={type} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="mr-2">{getInsightIcon(type)}</span>
                              <span className="spline-text-xs text-foreground capitalize">{type.replace('_', ' ')}</span>
                            </div>
                            <Badge variant="outline" className="spline-text-xs">{count}</Badge>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Annotation Categories */}
                {Object.keys(summaryStats.annotationsByType).length > 0 && (
                  <div>
                    <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Annotation Types</label>
                    <div className="space-y-1">
                      {Object.entries(summaryStats.annotationsByType)
                        .sort(([,a], [,b]) => b - a)
                        .slice(0, 3)
                        .map(([type, count]) => {
                          const typeInfo = getFeedbackTypeInfo(type);
                          return (
                            <div key={type} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="mr-2">{typeInfo?.icon}</span>
                                <span className="spline-text-xs text-foreground">{typeInfo?.label}</span>
                              </div>
                              <Badge variant="outline" className="spline-text-xs">{count}</Badge>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Image Details Section (Single Image View Only) */}
        {!isGridView && (
          <div className="border-b border-border">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
              onClick={() => toggleSection('image')}
            >
              <div className="flex items-center">
                <Image className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="font-medium text-foreground">Image Details</span>
              </div>
              {expandedSections.image ? 
                <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              }
            </button>
            
            {expandedSections.image && (
              <div className="px-4 pb-4">
                {selectedImage ? (
                  <div className="space-y-3">
                    <div>
                      <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Filename</label>
                      <p className="spline-text-sm text-foreground mt-1 truncate">{selectedImage.file_name}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Size</label>
                        <p className="spline-text-sm text-foreground mt-1">{formatFileSize(selectedImage.file_size)}</p>
                      </div>
                      <div>
                        <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Status</label>
                        <Badge variant="outline" className="mt-1 spline-text-xs">
                          {selectedImage.processing_status}
                        </Badge>
                      </div>
                    </div>
                    
                    {selectedImage.dimensions && (
                      <div>
                        <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Dimensions</label>
                        <p className="spline-text-sm text-foreground mt-1">
                          {selectedImage.dimensions.width} × {selectedImage.dimensions.height}
                        </p>
                      </div>
                    )}
                    
                    {selectedImage.screen_type && (
                      <div>
                        <label className="spline-text-xs text-muted-foreground uppercase tracking-wide">Screen Type</label>
                        <p className="spline-text-sm text-foreground mt-1 capitalize">
                          {selectedImage.screen_type.replace('_', ' ')}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="spline-text-sm text-muted-foreground italic">
                    Select an image to view details
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Annotations Section (Only show when relevant) */}
        {(!isGridView || (isGridView && summaryStats.totalAnnotations > 0)) && (
          <div className="border-b border-border">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
              onClick={() => toggleSection('annotations')}
            >
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  {isGridView ? `All Annotations (${summaryStats.totalAnnotations})` : `Annotations (${annotations.length})`}
                </span>
              </div>
              {expandedSections.annotations ? 
                <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              }
            </button>
            
            {expandedSections.annotations && (
              <div className="px-4 pb-4">
                {(isGridView ? allAnnotations : annotations).length > 0 ? (
                  <div className="space-y-3">
                    {(isGridView ? allAnnotations.slice(0, 5) : annotations).map((annotation) => (
                      <div key={annotation.id} className="p-3 bg-secondary rounded-lg">
                        {editingAnnotation === annotation.id && !isGridView ? (
                          <div className="space-y-3">
                            <div>
                              <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Label</label>
                              <Input
                                value={editingData.label}
                                onChange={(e) => setEditingData(prev => ({ ...prev, label: e.target.value }))}
                                className="spline-text-sm h-8"
                                placeholder="Annotation label"
                              />
                            </div>
                            
                            <div>
                              <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Feedback Type</label>
                              <Select
                                value={editingData.feedback_type}
                                onValueChange={(value) => setEditingData(prev => ({ ...prev, feedback_type: value }))}
                              >
                                <SelectTrigger className="spline-text-sm h-8">
                                  <SelectValue placeholder="Select type..." />
                                </SelectTrigger>
                                <SelectContent>
                                  {feedbackTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      <div className="flex items-center">
                                        <span className="mr-2">{type.icon}</span>
                                        <span>{type.label}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <label className="spline-text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Description</label>
                              <Textarea
                                value={editingData.description}
                                onChange={(e) => setEditingData(prev => ({ ...prev, description: e.target.value }))}
                                className="spline-text-sm resize-none"
                                rows={2}
                                placeholder="Specific feedback request..."
                              />
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                onClick={() => handleSaveAnnotation(annotation.id)}
                                className="h-7 px-3"
                              >
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={handleCancelEdit}
                                className="h-7 px-3"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center flex-1 min-w-0">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center">
                                    <h4 className="spline-text-sm font-medium text-foreground truncate mr-2">
                                      {annotation.label || 'Untitled'}
                                    </h4>
                                    {annotation.feedback_type && (
                                      <span className="spline-text-sm">{getFeedbackTypeInfo(annotation.feedback_type)?.icon}</span>
                                    )}
                                  </div>
                                  {annotation.feedback_type && (
                                    <Badge variant="outline" className="spline-text-xs mt-1">
                                      {getFeedbackTypeInfo(annotation.feedback_type)?.label}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              {!isGridView && (
                                <div className="flex items-center space-x-1 ml-2">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => handleEditAnnotation(annotation)}
                                    className="h-7 w-7 p-0"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => onAnnotationDelete?.(annotation.id)}
                                    className="h-7 w-7 p-0 text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              )}
                            </div>
                            
                            {annotation.description && (
                              <div className="mb-2">
                                <div className="flex items-center spline-text-xs text-muted-foreground mb-1">
                                  <MessageSquare className="w-3 h-3 mr-1" />
                                  Feedback Request
                                </div>
                                <p className="spline-text-xs text-foreground bg-card p-2 rounded border border-border">
                                  {annotation.description}
                                </p>
                              </div>
                            )}
                            
                            <div className="spline-text-xs text-muted-foreground flex justify-between">
                              <span>
                                {Math.round(annotation.width)} × {Math.round(annotation.height)} px
                              </span>
                              <span>
                                {new Date(annotation.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    {isGridView && allAnnotations.length > 5 && (
                      <div className="text-center pt-2">
                        <p className="spline-text-xs text-muted-foreground">
                          +{allAnnotations.length - 5} more annotations across all images
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Square className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="spline-text-sm text-muted-foreground">
                      {isGridView ? 'No annotations created yet' : 'No annotations on this image'}
                    </p>
                    <p className="spline-text-xs text-muted-foreground mt-1">
                      {isGridView 
                        ? 'Select an image and use the comment tool to create annotations'
                        : 'Click the comment tool in the toolbar to create annotations with specific feedback requests'
                      }
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Insights Section */}
        <div className="border-b border-border">
          <button
            className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
            onClick={() => toggleSection('insights')}
          >
            <div className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="font-medium text-foreground">
                {isGridView ? `All Insights (${insights.length})` : `Insights (${insights.length})`}
              </span>
            </div>
            {expandedSections.insights ? 
              <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          
          {expandedSections.insights && (
            <div className="px-4 pb-4">
              {insights.length > 0 ? (
                <div className="space-y-3">
                  {insights.map((insight) => (
                    <div key={insight.id} className="p-3 bg-secondary rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <span className="mr-2">{getInsightIcon(insight.insight_type)}</span>
                          <h4 className="spline-text-sm font-medium text-foreground">
                            {insight.title}
                          </h4>
                        </div>
                        <Badge variant={getPriorityColor(insight.priority)} className="spline-text-xs">
                          {insight.priority}
                        </Badge>
                      </div>
                      <p className="spline-text-sm text-muted-foreground mb-2">
                        {insight.description}
                      </p>
                      <div className="flex items-center justify-between spline-text-xs text-muted-foreground">
                        <span className="capitalize">{insight.insight_type.replace('_', ' ')}</span>
                        <span>{Math.round(insight.confidence_score * 100)}% confidence</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Lightbulb className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="spline-text-sm text-muted-foreground">
                    {isGridView ? 'No insights generated yet' : 'No insights for this image'}
                  </p>
                  <p className="spline-text-xs text-muted-foreground mt-1">
                    {isGridView 
                      ? 'Upload images and ask questions in the chat to generate insights'
                      : 'Ask questions in the chat to generate insights for this image'
                    }
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Export Section */}
        <div className="border-b border-border">
          <button
            className="w-full p-4 flex items-center justify-between hover:bg-secondary/50"
            onClick={() => toggleSection('export')}
          >
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="font-medium text-foreground">Export & Share</span>
            </div>
            {expandedSections.export ? 
              <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          
          {expandedSections.export && (
            <div className="px-4 pb-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start spline-text-sm">
                {isGridView ? 'Export Summary Report' : 'Export Image Analysis'}
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start spline-text-sm">
                Export JSON Data
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start spline-text-sm">
                Share Session Link
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}