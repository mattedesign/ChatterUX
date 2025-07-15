import { useState, useEffect, useCallback } from 'react';
import { StudioLayout } from './components/analyze/layout/StudioLayout';
import { StudioHeader } from './components/analyze/layout/StudioHeader';
import { ChatSidebar } from './components/analyze/chat/ChatSidebar';
import { MainCanvas } from './components/analyze/canvas/MainCanvas';
import { PropertiesPanel } from './components/analyze/properties/PropertiesPanel';
import { FloatingToolbar } from './components/analyze/layout/FloatingToolbar';
import { projectId, publicAnonKey } from './utils/supabase/info';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  message_type: string;
  created_at: string;
  referenced_images?: number[];
}

interface AnalysisImage {
  id: string;
  file_name: string;
  image_index: number;
  file_size?: number;
  dimensions?: { width: number; height: number };
  processing_status: string;
  screen_type?: string;
  signedUrl?: string;
  canvas_position: {
    x: number;
    y: number;
    zoom: number;
    rotation: number;
  };
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
  image_id: string;
}

interface Insight {
  id: string;
  insight_type: string;
  title: string;
  description: string;
  priority: string;
  confidence_score: number;
}

interface AnalysisSession {
  id: string;
  title: string;
  status: string;
  canvas_state: any;
}

export default function App() {
  const [session, setSession] = useState<AnalysisSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [images, setImages] = useState<AnalysisImage[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [annotationMode, setAnnotationMode] = useState(false);
  const [zoom, setZoom] = useState(1.0);
  const [demoMode, setDemoMode] = useState(true); // Default to demo mode
  const [processingImages, setProcessingImages] = useState<Set<string>>(new Set());
  const [backendAvailable, setBackendAvailable] = useState(false);

  const apiBase = `https://${projectId}.supabase.co/functions/v1/make-server-8f8346bb`;

  // Initialize session on app load
  useEffect(() => {
    initializeSession();
  }, []);

  // Generate summary insights when all images are processed and no specific image is selected
  useEffect(() => {
    const shouldGenerateSummaryInsights = 
      images.length > 0 && 
      images.every(img => img.processing_status === 'uploaded') &&
      selectedImageIndex === null &&
      insights.length === 0; // Only generate if no insights exist yet

    if (shouldGenerateSummaryInsights) {
      generateSummaryInsights();
    }
  }, [images, selectedImageIndex, insights.length]);

  const generateSummaryInsights = () => {
    const summaryInsights: Insight[] = [
      {
        id: crypto.randomUUID(),
        insight_type: 'usability',
        title: 'Cross-Image Navigation Patterns',
        description: `Analyzed ${images.length} image${images.length !== 1 ? 's' : ''} for consistent navigation patterns and user flow optimization opportunities.`,
        priority: 'medium',
        confidence_score: 0.82
      },
      {
        id: crypto.randomUUID(),
        insight_type: 'visual_design',
        title: 'Design System Consistency',
        description: 'Visual consistency analysis across uploaded designs reveals opportunities for better typography, spacing, and color harmonization.',
        priority: 'high',
        confidence_score: 0.89
      },
      {
        id: crypto.randomUUID(),
        insight_type: 'accessibility',
        title: 'Accessibility Compliance Overview',
        description: 'Comprehensive accessibility review suggests improvements in color contrast, focus indicators, and screen reader compatibility.',
        priority: 'medium',
        confidence_score: 0.78
      }
    ];

    // Add more specific insights based on number of images
    if (images.length >= 3) {
      summaryInsights.push({
        id: crypto.randomUUID(),
        insight_type: 'content',
        title: 'Information Architecture Analysis',
        description: 'Multiple screens analyzed for content hierarchy and information flow optimization across the user journey.',
        priority: 'medium',
        confidence_score: 0.85
      });
    }

    if (annotations.length > 0) {
      summaryInsights.push({
        id: crypto.randomUUID(),
        insight_type: 'general',
        title: 'Annotation-Based Recommendations',
        description: `Based on ${annotations.length} annotation${annotations.length !== 1 ? 's' : ''} created, identified specific areas requiring focused UX attention and user testing.`,
        priority: 'high',
        confidence_score: 0.92
      });
    }

    setInsights(summaryInsights);
  };

  const initializeSession = async () => {
    try {
      // Try to connect to backend with more thorough testing
      const isBackendWorking = await testBackendConnection();
      
      if (isBackendWorking) {
        console.log('Backend connection successful, attempting to create session...');
        await createNewSession();
        setDemoMode(false);
        setBackendAvailable(true);
        console.log('Backend session created successfully');
      } else {
        throw new Error('Backend connection failed');
      }
    } catch (error) {
      console.log('Initializing in demo mode due to backend unavailability:', error);
      setDemoMode(true);
      setBackendAvailable(false);
      createDemoSession();
    } finally {
      setIsAuthenticated(true);
    }
  };

  const testBackendConnection = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // Reduced timeout to 3 seconds

    try {
      // Test health endpoint
      const healthResponse = await fetch(`${apiBase}/health`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!healthResponse.ok) {
        console.warn(`Health check failed: ${healthResponse.status}`);
        return false;
      }

      // Test session creation to ensure full functionality
      const sessionTestResponse = await fetch(`${apiBase}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          title: 'Connection Test'
        })
      });

      if (!sessionTestResponse.ok) {
        console.warn(`Session creation test failed: ${sessionTestResponse.status}`);
        return false;
      }

      const testData = await sessionTestResponse.json();
      console.log('Backend connection test successful');
      return true;
      
    } catch (error) {
      clearTimeout(timeoutId);
      console.warn('Backend connection test failed:', error);
      return false;
    }
  };

  const createDemoSession = () => {
    const demoSession: AnalysisSession = {
      id: 'demo-session-' + Date.now(),
      title: `UX Analysis - ${new Date().toLocaleDateString()}`,
      status: 'active',
      canvas_state: {}
    };
    
    setSession(demoSession);
    setMessages([]);
    setImages([]);
    setInsights([]);
    setAnnotations([]);
    setSelectedImageIndex(null);
    setProcessingImages(new Set());

    // Add welcome message
    const welcomeMessage: ChatMessage = {
      id: 'welcome',
      role: 'assistant',
      content: '🎨 Welcome to UX Analysis Studio! 👋\n\n**Demo Mode Active** - You\'re using the offline demo version.\n\nI\'m here to help you analyze your UI designs, wireframes, and prototypes. Upload up to 5 images to get started, or ask me any questions about UX design, usability, or accessibility.\n\n**Tip:** You can select multiple images at once when uploading!\n\nWhat would you like to analyze today?',
      message_type: 'text',
      created_at: new Date().toISOString()
    };
    setMessages([welcomeMessage]);
  };

  const createNewSession = async () => {
    try {
      const response = await fetch(`${apiBase}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          title: `UX Analysis - ${new Date().toLocaleDateString()}`
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to create session: ${response.status}`);
      }

      const data = await response.json();
      setSession(data.session);
      setMessages([]);
      setImages([]);
      setInsights([]);
      setAnnotations([]);
      setSelectedImageIndex(null);
      setProcessingImages(new Set());

      // Add welcome message
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'assistant',
        content: 'Welcome to UX Analysis Studio! 👋\n\nI\'m here to help you analyze your UI designs, wireframes, and prototypes. Upload up to 5 images to get started, or ask me any questions about UX design, usability, or accessibility.\n\n**Tip:** You can select multiple images at once when uploading!\n\nWhat would you like to analyze today?',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
    } catch (error) {
      console.error('Failed to create session, switching to demo mode:', error);
      setDemoMode(true);
      setBackendAvailable(false);
      createDemoSession();
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!session) return;

    // Check if any images are still processing
    const hasProcessingImages = images.some(img => img.processing_status === 'processing');
    
    if (hasProcessingImages) {
      const processingMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'I\'m still processing your uploaded images. Please wait a moment for the analysis to complete before asking questions. You\'ll see a completion message when all images are ready for analysis.',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, processingMessage]);
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      message_type: 'text',
      created_at: new Date().toISOString(),
      referenced_images: selectedImageIndex !== null ? [selectedImageIndex] : []
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Generate AI response based on context
      let aiResponse = '';
      
      if (images.length === 0) {
        aiResponse = 'I\'d love to help you analyze your design! Please upload an image of your UI, wireframe, or design mockup using the upload area or "Upload Image" button below. \n\nYou can upload up to 5 images for comparison and analysis. **Tip:** Select multiple images at once to upload them all together! Once you upload images, I can provide insights on:\n• Usability and user experience\n• Visual design and layout\n• Accessibility considerations\n• Information architecture\n• Interaction design patterns';
      } else if (selectedImageIndex !== null) {
        // Analyze specific image - clear any existing insights when focusing on single image
        setInsights([]);
        
        const selectedImage = images[selectedImageIndex];
        const imageAnnotations = annotations.filter(a => a.image_id === selectedImage.id);
        
        // Generate image-specific insights
        const imageSpecificInsights = [
          {
            id: crypto.randomUUID(),
            insight_type: 'usability',
            title: 'Navigation Clarity',
            description: 'The navigation structure could be improved for better user flow and findability.',
            priority: 'medium',
            confidence_score: 0.85
          },
          {
            id: crypto.randomUUID(),
            insight_type: 'visual_design',
            title: 'Visual Hierarchy',
            description: 'Consider improving the visual hierarchy with better typography scale and spacing.',
            priority: 'high',
            confidence_score: 0.92
          },
          {
            id: crypto.randomUUID(),
            insight_type: 'accessibility',
            title: 'Accessibility Improvements',
            description: 'Adding focus indicators and improving color contrast would enhance accessibility.',
            priority: 'medium',
            confidence_score: 0.88
          }
        ];
        
        setInsights(imageSpecificInsights);
        
        aiResponse = `I've analyzed "${selectedImage.file_name}" and found several insights:\n\n`;
        imageSpecificInsights.forEach((insight, index) => {
          aiResponse += `${index + 1}. **${insight.title}** (${insight.priority} priority)\n${insight.description}\n\n`;
        });
        
        if (imageAnnotations.length > 0) {
          aiResponse += `I can also see you've created ${imageAnnotations.length} annotation${imageAnnotations.length !== 1 ? 's' : ''} on this image. `;
          
          // Mention specific feedback requests from annotations
          const annotationsWithFeedback = imageAnnotations.filter(a => a.feedback_type || a.description);
          if (annotationsWithFeedback.length > 0) {
            aiResponse += 'I notice you\'re looking for specific feedback on:\n';
            annotationsWithFeedback.forEach(annotation => {
              if (annotation.feedback_type) {
                aiResponse += `• ${annotation.label}: ${annotation.feedback_type}${annotation.description ? ' - ' + annotation.description : ''}\n`;
              }
            });
          }
        }
        
        aiResponse += '\nYou can see detailed insights in the Properties panel on the right. Would you like me to elaborate on any specific aspect or annotation?';
      } else {
        // General conversation about uploaded images (grid view) - generate summary insights if not already present
        if (insights.length === 0) {
          generateSummaryInsights();
        }
        
        aiResponse = `I can see you have ${images.length} image${images.length !== 1 ? 's' : ''} uploaded and ready for analysis. I've generated comprehensive insights across all your designs.\n\n**Summary Analysis:**\n• Cross-design consistency review\n• Navigation and user flow patterns\n• Accessibility compliance overview\n• Visual design system evaluation\n\nClick on any image to dive deeper into specific insights, or let me know what aspect of UX design you'd like to discuss:\n\n• Layout and visual hierarchy\n• User flow optimization\n• Accessibility improvements\n• Mobile responsiveness\n• Conversion optimization\n\nYou can also view the analysis summary in the Properties panel on the right.`;
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: aiResponse,
        message_type: 'text',
        created_at: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Save to backend if available (but don't fail if it doesn't work)
      if (backendAvailable && !demoMode) {
        try {
          await fetch(`${apiBase}/sessions/${session.id}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify(userMessage)
          });

          await fetch(`${apiBase}/sessions/${session.id}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify(assistantMessage)
          });
        } catch (error) {
          console.warn('Failed to save messages to backend (non-critical):', error);
        }
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your message. Please try again.',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateProcessing = async (imageId: string, fileName: string) => {
    // Simulate processing time (1-3 seconds for better UX)
    const processingTime = Math.random() * 2000 + 1000;
    
    await new Promise(resolve => setTimeout(resolve, processingTime));
    
    // Update image status to uploaded
    setImages(prev => prev.map(img => 
      img.id === imageId 
        ? { ...img, processing_status: 'uploaded' }
        : img
    ));
    
    // Remove from processing set
    setProcessingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
    
    // Check if all images are done processing
    const allImages = images.filter(img => img.id !== imageId);
    const stillProcessing = allImages.some(img => img.processing_status === 'processing');
    
    if (!stillProcessing) {
      // All images are done processing
      const completionMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '✅ **Processing Complete!** All your images have been analyzed and are ready for review.\n\nYou can now:\n• Click on any image to view it in detail\n• Use the annotation tool to mark specific areas\n• Ask me questions about your designs\n• Request specific UX feedback\n\nWhat would you like me to analyze first?',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, completionMessage]);
    }
  };

  const createDemoImage = (file: File, index: number): AnalysisImage => {
    const signedUrl = URL.createObjectURL(file);
    return {
      id: crypto.randomUUID(),
      file_name: file.name,
      image_index: index,
      file_size: file.size,
      dimensions: { width: 0, height: 0 },
      processing_status: 'processing',
      screen_type: 'unknown',
      signedUrl,
      canvas_position: { x: 0, y: 0, zoom: 1.0, rotation: 0 }
    };
  };

  const handleBatchImageUpload = async (files: File[]) => {
    if (!session) return;

    // Check 5-image limit
    const remainingSlots = 5 - images.length;
    if (remainingSlots <= 0) {
      const limitMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'You\'ve reached the maximum of 5 images for this session. To add more images, please delete an existing image first or create a new session.',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, limitMessage]);
      return;
    }

    // Limit files to remaining slots
    const filesToUpload = files.slice(0, remainingSlots);
    const skippedFiles = files.length - filesToUpload.length;

    setIsLoading(true);

    // Clear insights when new images are uploaded
    setInsights([]);

    // Always create demo images first to avoid errors
    const uploadResults: AnalysisImage[] = filesToUpload.map((file, index) => 
      createDemoImage(file, images.length + index)
    );

    try {
      // Add all images to state immediately
      setImages(prev => [...prev, ...uploadResults]);
      
      // Track processing images
      const processingIds = uploadResults.map(img => img.id);
      setProcessingImages(prev => new Set([...prev, ...processingIds]));
      
      // DON'T auto-select image - keep in grid view for batch uploads
      if (filesToUpload.length === 1) {
        setSelectedImageIndex(uploadResults[0].image_index);
      } else {
        setSelectedImageIndex(null); // Show grid view
      }

      // Add upload confirmation message
      const totalAfterUpload = images.length + uploadResults.length;
      const remainingAfterUpload = 5 - totalAfterUpload;
      
      let uploadMessage = `📤 **Upload Started!** I'm processing ${uploadResults.length} image${uploadResults.length !== 1 ? 's' : ''} (${totalAfterUpload}/5 total).`;
      
      if (skippedFiles > 0) {
        uploadMessage += ` Note: ${skippedFiles} image${skippedFiles !== 1 ? 's were' : ' was'} skipped due to the 5-image limit.`;
      }
      
      uploadMessage += `\n\n🔄 **Processing images:**\n${uploadResults.map((img, index) => `${index + 1}. ${img.file_name} - Processing...`).join('\n')}`;
      
      if (remainingAfterUpload > 0) {
        uploadMessage += `\n\n➕ You can upload ${remainingAfterUpload} more image${remainingAfterUpload !== 1 ? 's' : ''} for comparison.`;
      } else {
        uploadMessage += '\n\n✅ You\'ve reached the maximum of 5 images.';
      }

      uploadMessage += '\n\n⏳ **Please wait** - I\'m analyzing your images and will let you know when they\'re ready for review. This usually takes a few seconds per image.';

      const processingMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: uploadMessage,
        message_type: 'text',
        created_at: new Date().toISOString()
      };

      setMessages(prev => [...prev, processingMessage]);

      // Start processing simulation for all images
      uploadResults.forEach(img => {
        simulateProcessing(img.id, img.file_name);
      });

      // Try to save to backend if available (but don't fail if it doesn't work)
      if (backendAvailable && !demoMode) {
        try {
          await fetch(`${apiBase}/sessions/${session.id}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify(processingMessage)
          });
        } catch (error) {
          console.warn('Failed to save processing message to backend (non-critical):', error);
        }
      }

    } catch (error) {
      console.error('Error in batch upload (handled gracefully):', error);
      // Error is handled gracefully - images are already added as demo images
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (!session) return;

    // Check 5-image limit
    if (images.length >= 5) {
      const limitMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'You\'ve reached the maximum of 5 images for this session. To add more images, please delete an existing image first or create a new session.',
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, limitMessage]);
      return;
    }

    setIsLoading(true);

    // Clear insights when new images are uploaded
    setInsights([]);

    // Always create demo image first to avoid errors
    const newImage = createDemoImage(file, images.length);

    try {
      // Add image to state immediately
      setImages(prev => [...prev, newImage]);
      
      // Track processing image
      setProcessingImages(prev => new Set([...prev, newImage.id]));
      
      // Auto-select the new image for single uploads
      setSelectedImageIndex(newImage.image_index);

      // Add upload confirmation message
      const remainingSlots = 5 - images.length - 1;
      const processingMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `📤 **Upload Started!** I'm processing "${file.name}" (${images.length + 1}/5 images). ${remainingSlots > 0 ? `You can upload ${remainingSlots} more image${remainingSlots !== 1 ? 's' : ''} for comparison.` : 'You\'ve reached the maximum of 5 images.'}\n\n🔄 **Processing:** ${file.name} - Analyzing...\n\n⏳ **Please wait** - I'm analyzing your image and will let you know when it's ready for review. This usually takes a few seconds.\n\n**Tip:** Select multiple images at once to upload them all together!`,
        message_type: 'text',
        created_at: new Date().toISOString()
      };

      setMessages(prev => [...prev, processingMessage]);

      // Start processing simulation
      simulateProcessing(newImage.id, newImage.file_name);

      // Try to save to backend if available (but don't fail if it doesn't work)
      if (backendAvailable && !demoMode) {
        try {
          await fetch(`${apiBase}/sessions/${session.id}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify(processingMessage)
          });
        } catch (error) {
          console.warn('Failed to save processing message to backend (non-critical):', error);
        }
      }

    } catch (error) {
      console.error('Error in image upload (handled gracefully):', error);
      // Error is handled gracefully - image is already added as demo image
    } finally {
      setIsLoading(false);
    }
  };

  const handleCanvasStateChange = useCallback(async (canvasState: any) => {
    if (!session) return;
    
    // Update local zoom state
    if (canvasState.zoom) {
      setZoom(canvasState.zoom);
    }

    // Try to save to backend if available (but don't fail if it doesn't work)
    if (backendAvailable && !demoMode) {
      try {
        await fetch(`${apiBase}/sessions/${session.id}/canvas`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(canvasState)
        });
      } catch (error) {
        console.warn('Error updating canvas state (non-critical):', error);
      }
    }
  }, [session, apiBase, demoMode, backendAvailable]);

  const handleAnnotationCreate = (imageIndex: number, area: { x: number; y: number; width: number; height: number }, annotationData?: { label: string; feedback_type: string; description: string }) => {
    if (selectedImageIndex !== null) {
      const selectedImage = images[selectedImageIndex];
      const newAnnotation: Annotation = {
        id: crypto.randomUUID(),
        ...area,
        label: annotationData?.label || `Area ${annotations.filter(a => a.image_id === selectedImage.id).length + 1}`,
        feedback_type: annotationData?.feedback_type || '',
        description: annotationData?.description || '',
        created_at: new Date().toISOString(),
        image_id: selectedImage.id
      };
      
      setAnnotations(prev => [...prev, newAnnotation]);
      
      // Generate AI response based on feedback type
      let feedbackResponse = '';
      if (annotationData?.feedback_type) {
        switch (annotationData.feedback_type) {
          case 'usability':
            feedbackResponse = `I'll analyze this area for usability concerns like ease of use, user flow, and interaction patterns.`;
            break;
          case 'accessibility':
            feedbackResponse = `I'll review this area for accessibility compliance, including contrast ratios, keyboard navigation, and screen reader support.`;
            break;
          case 'visual_design':
            feedbackResponse = `I'll examine this area's visual design including typography, spacing, color usage, and visual hierarchy.`;
            break;
          case 'content':
            feedbackResponse = `I'll assess the content in this area for clarity, readability, and information architecture.`;
            break;
          case 'performance':
            feedbackResponse = `I'll consider performance implications of this area including loading times and optimization opportunities.`;
            break;
          default:
            feedbackResponse = `I'll provide comprehensive feedback on this area.`;
        }
        
        if (annotationData.description) {
          feedbackResponse += ` Specifically focusing on: "${annotationData.description}"`;
        }
      } else {
        feedbackResponse = `I'll analyze this area for general UX insights.`;
      }
      
      // Add AI response about the annotation
      const annotationMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `Great! I've created annotation "${newAnnotation.label}" on your image (${Math.round(area.width)} × ${Math.round(area.height)} pixels).\n\n${feedbackResponse}\n\nYou can edit the annotation details in the Properties panel on the right, or ask me specific questions about this area.`,
        message_type: 'text',
        created_at: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, annotationMessage]);
    }
  };

  const handleAnnotationUpdate = (annotationId: string, updates: Partial<Annotation>) => {
    setAnnotations(prev => prev.map(annotation => 
      annotation.id === annotationId ? { ...annotation, ...updates } : annotation
    ));
  };

  const handleAnnotationDelete = (annotationId: string) => {
    setAnnotations(prev => prev.filter(annotation => annotation.id !== annotationId));
  };

  const handleZoomIn = useCallback(() => {
    const newZoom = Math.min(zoom * 1.2, 5.0);
    setZoom(newZoom);
    handleCanvasStateChange({ zoom: newZoom });
  }, [zoom, handleCanvasStateChange]);

  const handleZoomOut = useCallback(() => {
    const newZoom = Math.max(zoom / 1.2, 0.1);
    setZoom(newZoom);
    handleCanvasStateChange({ zoom: newZoom });
  }, [zoom, handleCanvasStateChange]);

  const handleReset = useCallback(() => {
    setZoom(1.0);
    handleCanvasStateChange({ zoom: 1.0, rotation: 0, panPosition: { x: 0, y: 0 } });
  }, [handleCanvasStateChange]);

  // New handler for view mode switching
  const handleToggleView = useCallback(() => {
    if (selectedImageIndex !== null) {
      // Switch from single view to grid view - regenerate summary insights
      setSelectedImageIndex(null);
      if (images.length > 0 && images.every(img => img.processing_status === 'uploaded')) {
        setInsights([]); // Clear insights to trigger regeneration
      }
    } else if (images.length > 0) {
      // Switch from grid view to single view (select first image)
      setSelectedImageIndex(0);
    }
  }, [selectedImageIndex, images.length, images]);

  // Get annotations for the currently selected image
  const selectedImageAnnotations = selectedImageIndex !== null && images[selectedImageIndex] 
    ? annotations.filter(a => a.image_id === images[selectedImageIndex].id)
    : [];

  // Determine if we're in grid view
  const isGridView = selectedImageIndex === null;

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card border border-border spline-shadow-sm flex items-center justify-center">
            <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            UX Analysis Studio
          </h1>
          <p className="text-muted-foreground mb-4">
            Loading your analysis workspace...
          </p>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              <span>⚡</span>
              Demo Mode
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-background">
      {/* Demo Mode Indicator - Always show since we default to demo mode */}
      <div className="fixed top-2 right-2 z-50">
        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <span>⚡</span>
          Demo Mode
        </div>
      </div>

      {/* Floating Toolbar */}
      <FloatingToolbar
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        annotationMode={annotationMode}
        onAnnotationModeChange={setAnnotationMode}
        isGridView={isGridView}
        hasImages={images.length > 0}
        onToggleView={handleToggleView}
      />

      {/* Main Layout */}
      <StudioLayout
        header={
          <StudioHeader
            sessionTitle={session?.title || 'New Session'}
            onNewSession={createDemoSession}
            onSaveSession={() => {}}
            onShareSession={() => {}}
            onSettings={() => {}}
          />
        }
        chatPanel={
          <ChatSidebar
            messages={messages}
            onSendMessage={handleSendMessage}
            onUploadImage={handleImageUpload}
            isLoading={isLoading}
          />
        }
        mainCanvas={
          <MainCanvas
            images={images}
            selectedImageIndex={selectedImageIndex}
            onImageSelect={setSelectedImageIndex}
            onAnnotationCreate={handleAnnotationCreate}
            onCanvasStateChange={handleCanvasStateChange}
            annotationMode={annotationMode}
            onImageUpload={handleImageUpload}
            onBatchImageUpload={handleBatchImageUpload}
          />
        }
        propertiesPanel={
          <PropertiesPanel
            selectedImage={selectedImageIndex !== null ? images[selectedImageIndex] : null}
            insights={insights}
            annotations={selectedImageAnnotations}
            onAnnotationUpdate={handleAnnotationUpdate}
            onAnnotationDelete={handleAnnotationDelete}
            sessionInfo={{
              title: session?.title || 'New Session',
              status: session?.status || 'active',
              imageCount: images.length
            }}
            allImages={images}
            allAnnotations={annotations}
          />
        }
      />
    </div>
  );
}