import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from './kv_store.tsx';

const app = new Hono();

// CORS and logging middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));
app.use('*', logger(console.log));

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Create necessary buckets on startup
async function initializeBuckets() {
  const bucketName = 'make-8f8346bb-ux-analysis';
  
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
    
    if (!bucketExists) {
      await supabase.storage.createBucket(bucketName, { public: false });
      console.log(`Created bucket: ${bucketName}`);
    }
  } catch (error) {
    console.log(`Error initializing buckets: ${error}`);
  }
}

// Initialize buckets
initializeBuckets();

// For demo purposes, we'll skip auth requirement and use a mock user
const mockUser = { id: 'demo-user-123', email: 'demo@example.com' };

// Create new analysis session
app.post('/make-server-8f8346bb/sessions', async (c) => {
  try {
    const { title } = await c.req.json();
    
    const sessionId = crypto.randomUUID();
    const sessionData = {
      id: sessionId,
      user_id: mockUser.id,
      title: title || 'New Analysis Session',
      status: 'active',
      ai_context: {
        communicationStyle: 'professional',
        expertiseLevel: 'intermediate',
        intent: 'analyze'
      },
      canvas_state: {
        selectedImage: null,
        selectedArea: null,
        visibleImages: [],
        zoom: 1.0
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    await kv.set(`session_${sessionId}`, sessionData);
    
    return c.json({ session: sessionData });
  } catch (error) {
    console.log(`Error creating session: ${error}`);
    return c.json({ error: 'Failed to create session' }, 500);
  }
});

// Get user sessions
app.get('/make-server-8f8346bb/sessions', async (c) => {
  try {
    const sessions = await kv.getByPrefix(`session_`);
    
    const userSessions = sessions
      .filter(session => session.user_id === mockUser.id)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    
    return c.json({ sessions: userSessions });
  } catch (error) {
    console.log(`Error fetching sessions: ${error}`);
    return c.json({ error: 'Failed to fetch sessions' }, 500);
  }
});

// Get session by ID
app.get('/make-server-8f8346bb/sessions/:sessionId', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    
    const session = await kv.get(`session_${sessionId}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Session not found' }, 404);
    }
    
    // Get messages for this session
    const messages = await kv.getByPrefix(`message_${sessionId}_`);
    const sortedMessages = messages.sort((a, b) => 
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    
    // Get images for this session
    const images = await kv.getByPrefix(`image_${sessionId}_`);
    const sortedImages = images.sort((a, b) => a.image_index - b.image_index);
    
    // Get insights for this session
    const insights = await kv.getByPrefix(`insight_${sessionId}_`);
    
    return c.json({ 
      session, 
      messages: sortedMessages, 
      images: sortedImages, 
      insights 
    });
  } catch (error) {
    console.log(`Error fetching session: ${error}`);
    return c.json({ error: 'Failed to fetch session' }, 500);
  }
});

// Add message to session
app.post('/make-server-8f8346bb/sessions/:sessionId/messages', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    const { role, content, message_type, referenced_images, selected_area } = await c.req.json();
    
    // Verify session exists
    const session = await kv.get(`session_${sessionId}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Session not found' }, 404);
    }
    
    const messageId = crypto.randomUUID();
    const message = {
      id: messageId,
      session_id: sessionId,
      role,
      content,
      message_type: message_type || 'text',
      referenced_images: referenced_images || [],
      selected_area: selected_area || null,
      ai_context: {},
      created_at: new Date().toISOString()
    };
    
    await kv.set(`message_${sessionId}_${messageId}`, message);
    
    // Update session timestamp
    await kv.set(`session_${sessionId}`, {
      ...session,
      updated_at: new Date().toISOString()
    });
    
    return c.json({ message });
  } catch (error) {
    console.log(`Error adding message: ${error}`);
    return c.json({ error: 'Failed to add message' }, 500);
  }
});

// Upload image to session
app.post('/make-server-8f8346bb/sessions/:sessionId/images', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    
    // Verify session exists
    const session = await kv.get(`session_${sessionId}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Session not found' }, 404);
    }
    
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }
    
    // Upload to Supabase Storage
    const bucketName = 'make-8f8346bb-ux-analysis';
    const fileName = `${sessionId}/${Date.now()}_${file.name}`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file);
    
    if (uploadError) {
      console.log(`Upload error: ${uploadError}`);
      return c.json({ error: 'Failed to upload file' }, 500);
    }
    
    // Get existing images to determine index
    const existingImages = await kv.getByPrefix(`image_${sessionId}_`);
    const imageIndex = existingImages.length;
    
    const imageId = crypto.randomUUID();
    const imageData = {
      id: imageId,
      session_id: sessionId,
      file_name: file.name,
      file_path: fileName,
      file_size: file.size,
      dimensions: { width: 0, height: 0 },
      image_index: imageIndex,
      canvas_position: { x: 0, y: 0, zoom: 1.0, rotation: 0 },
      processing_status: 'uploaded',
      screen_type: 'unknown',
      vision_analysis: {},
      annotations: [],
      created_at: new Date().toISOString()
    };
    
    await kv.set(`image_${sessionId}_${imageId}`, imageData);
    
    // Create signed URL for frontend access
    const { data: signedUrl } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 3600);
    
    return c.json({ 
      image: imageData, 
      signedUrl: signedUrl?.signedUrl 
    });
  } catch (error) {
    console.log(`Error uploading image: ${error}`);
    return c.json({ error: 'Failed to upload image' }, 500);
  }
});

// Get signed URL for image
app.get('/make-server-8f8346bb/images/:imageId/url', async (c) => {
  try {
    const imageId = c.req.param('imageId');
    
    // Find image
    const images = await kv.getByPrefix(`image_`);
    const image = images.find(img => img.id === imageId);
    
    if (!image) {
      return c.json({ error: 'Image not found' }, 404);
    }
    
    // Verify session belongs to user
    const session = await kv.get(`session_${image.session_id}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Access denied' }, 403);
    }
    
    const bucketName = 'make-8f8346bb-ux-analysis';
    const { data: signedUrl, error } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(image.file_path, 3600);
    
    if (error) {
      console.log(`Error creating signed URL: ${error}`);
      return c.json({ error: 'Failed to create signed URL' }, 500);
    }
    
    return c.json({ signedUrl: signedUrl.signedUrl });
  } catch (error) {
    console.log(`Error getting image URL: ${error}`);
    return c.json({ error: 'Failed to get image URL' }, 500);
  }
});

// Analyze image with AI
app.post('/make-server-8f8346bb/sessions/:sessionId/analyze', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    const { imageId, userMessage, selectedArea } = await c.req.json();
    
    // Verify session exists
    const session = await kv.get(`session_${sessionId}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Session not found' }, 404);
    }
    
    // Mock AI analysis response
    const analysisResponse = {
      insights: [
        {
          id: crypto.randomUUID(),
          insight_type: 'usability',
          title: 'Navigation Clarity',
          description: 'The navigation structure could be improved for better user flow.',
          priority: 'medium',
          confidence_score: 0.85
        },
        {
          id: crypto.randomUUID(),
          insight_type: 'visual_design',
          title: 'Color Contrast',
          description: 'Some text elements may not meet accessibility contrast requirements.',
          priority: 'high',
          confidence_score: 0.92
        },
        {
          id: crypto.randomUUID(),
          insight_type: 'accessibility',
          title: 'Interactive Elements',
          description: 'Consider adding focus indicators and keyboard navigation support.',
          priority: 'medium',
          confidence_score: 0.88
        }
      ],
      suggestions: [
        'Consider using more prominent call-to-action buttons',
        'Improve spacing between interactive elements',
        'Add visual hierarchy with typography scale'
      ]
    };
    
    // Store insights
    for (const insight of analysisResponse.insights) {
      const insightData = {
        id: insight.id,
        session_id: sessionId,
        image_id: imageId,
        insight_type: insight.insight_type,
        title: insight.title,
        description: insight.description,
        priority: insight.priority,
        confidence_score: insight.confidence_score,
        created_at: new Date().toISOString()
      };
      
      await kv.set(`insight_${sessionId}_${insight.id}`, insightData);
    }
    
    return c.json(analysisResponse);
  } catch (error) {
    console.log(`Error analyzing image: ${error}`);
    return c.json({ error: 'Failed to analyze image' }, 500);
  }
});

// Update canvas state
app.put('/make-server-8f8346bb/sessions/:sessionId/canvas', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    const canvasState = await c.req.json();
    
    const session = await kv.get(`session_${sessionId}`);
    if (!session || session.user_id !== mockUser.id) {
      return c.json({ error: 'Session not found' }, 404);
    }
    
    const updatedSession = {
      ...session,
      canvas_state: canvasState,
      updated_at: new Date().toISOString()
    };
    
    await kv.set(`session_${sessionId}`, updatedSession);
    
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error updating canvas state: ${error}`);
    return c.json({ error: 'Failed to update canvas state' }, 500);
  }
});

// Health check
app.get('/make-server-8f8346bb/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);