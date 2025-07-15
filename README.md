# UX Analysis Studio

A sophisticated UX analysis tool with a Spline-inspired design for analyzing UI/UX designs, wireframes, and prototypes. Built with React, TypeScript, and Tailwind CSS.

![UX Analysis Studio](https://github.com/user-attachments/assets/ux-analysis-studio-preview.png)

## ✨ Features

### 🎨 Professional Design Tool Interface
- **Spline-inspired design** with professional shadows and gradients
- **3-panel layout** with 280px chat sidebar, main canvas, and 320px properties panel
- **Floating toolbar** with contextual tools and zoom controls
- **Responsive design** optimized for desktop use

### 🖼️ Image Analysis & Management
- **Multi-image support** - Upload up to 5 images for comparative analysis
- **Drag & drop upload** with batch processing capabilities
- **Grid and single view modes** for different analysis workflows
- **Zoom and pan functionality** for detailed image inspection
- **Processing status indicators** with real-time feedback

### 💬 AI-Powered Chat Interface
- **Contextual AI responses** based on uploaded images and selected modes
- **Real-time analysis** with hardcoded demo responses
- **Professional chat UI** integrated seamlessly into the design tool
- **Image-aware conversations** that reference specific uploads

### 📝 Advanced Annotation System
- **Click-to-annotate** with elegant blue comment pins
- **Feedback categorization** (Usability, Accessibility, Visual Design, Content, etc.)
- **Comment threading** with AI "Figmant" responses
- **Annotation management** in the properties panel
- **Contextual feedback requests** for targeted analysis

### 🔍 Intelligent Properties Panel
- **Contextual awareness** - Shows summary insights in grid view, detailed insights for selected images
- **Real-time statistics** - Processing status, annotation counts, insight categories
- **Analysis summaries** - Cross-image consistency, navigation patterns, accessibility overview
- **Export functionality** - PDF reports, JSON data, session sharing

### 🎯 Analysis Insights
- **Automated insight generation** based on image content and user interactions
- **Priority-based categorization** (Critical, High, Medium, Low)
- **Confidence scoring** for AI-generated insights
- **Cross-image analysis** for design system consistency
- **Annotation-based recommendations** from user feedback requests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ux-analysis-studio.git
   cd ux-analysis-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Custom Spline-inspired design system
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Backend**: Supabase (with demo mode fallback)
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
ux-analysis-studio/
├── components/
│   ├── analyze/
│   │   ├── canvas/          # Image grid, viewer, annotations
│   │   ├── chat/            # Chat interface and messaging
│   │   ├── layout/          # Layout components and toolbars
│   │   └── properties/      # Properties panel and insights
│   ├── figma/               # Figma-specific components
│   └── ui/                  # Shadcn/ui components
├── styles/
│   └── globals.css          # Tailwind v4 + custom Spline styles
├── utils/
│   └── supabase/           # Supabase configuration
├── supabase/
│   └── functions/          # Backend functions (optional)
└── App.tsx                 # Main application component
```

## 🎨 Design System

The application uses a custom Spline-inspired design system with:

- **Color Palette**: Neutral grays with subtle shadows and gradients
- **Typography**: Inter font with custom spacing and weights
- **Shadows**: Multi-layered shadows for depth and professionalism
- **Animations**: Smooth transitions and processing states
- **Layout**: Fixed 3-panel layout optimized for UX analysis workflows

## 🔧 Configuration

### Environment Variables
```bash
# Optional: For full backend functionality
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Demo Mode
The application defaults to demo mode with:
- Local image processing simulation
- Hardcoded AI responses
- In-memory data storage
- Full feature functionality without backend

## 📊 Key Features Deep Dive

### Multi-Image Analysis
- Upload up to 5 images simultaneously
- Batch processing with real-time status updates
- Comparative analysis across multiple designs
- Grid view for overview, single view for detailed analysis

### Annotation System
- Elegant blue pins for marking areas of interest
- 8 feedback categories (Usability, Accessibility, Visual Design, etc.)
- AI-powered responses to annotation requests
- Comment threading and conversation history

### Properties Panel Context
- **Grid View**: Shows analysis summary, processing status, top insight categories
- **Single View**: Displays image details, specific insights, annotation management
- **Smart Switching**: Automatically adapts content based on user context

### Chat Integration
- Context-aware AI responses based on uploaded images
- Support for general UX questions and specific image analysis
- Processing status awareness (waits for image analysis completion)
- Professional conversation flow with actionable insights

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual Build
```bash
npm run build
# Serve dist/ folder with any static hosting
```

## 🧪 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Key Development Notes
- Application defaults to demo mode for easy development
- All features work without backend setup
- Supabase integration is optional and gracefully degrades
- Image processing is simulated for consistent UX

## 🎯 Usage Guide

### Basic Workflow
1. **Upload Images**: Use drag & drop or click to upload up to 5 images
2. **Wait for Processing**: Images are analyzed automatically
3. **Explore Views**: Switch between grid and single image views
4. **Create Annotations**: Use the comment tool to mark areas of interest
5. **Get Insights**: View AI-generated insights in the properties panel
6. **Chat with AI**: Ask questions about your designs and get contextual responses

### Advanced Features
- **Batch Upload**: Select multiple images for simultaneous upload
- **Annotation Categories**: Categorize feedback by type (Usability, Accessibility, etc.)
- **View Switching**: Toggle between grid overview and detailed single image analysis
- **Export Options**: Export analysis reports and session data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Spline design tools
- Built with the excellent Shadcn/ui component library
- Icons provided by Lucide React
- Typography using Inter font family

## 🐛 Known Issues

- Backend integration is optional and defaults to demo mode
- Maximum 5 images per session (configurable)
- Desktop-optimized experience (mobile support in progress)

## 📞 Support

For questions, issues, or contributions:
- Open an issue on GitHub
- Check the documentation in `/docs`
- Review the component architecture in `/components`

---

**Built with ❤️ for the UX community**