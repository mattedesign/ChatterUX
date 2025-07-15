# Deployment Guide

This guide covers deploying UX Analysis Studio to various hosting platforms.

## 🚀 Vercel (Recommended)

### Automatic Deployment
1. Fork/clone the repository
2. Connect to Vercel at [vercel.com](https://vercel.com)
3. Import the project
4. Deploy automatically with default settings

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Environment Variables (Optional)
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🌐 Netlify

### Drag & Drop Deployment
1. Run `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com)

### Git Integration
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Commands
```bash
# Build image
docker build -t ux-analysis-studio .

# Run container
docker run -p 80:80 ux-analysis-studio
```

## ☁️ AWS S3 + CloudFront

### S3 Bucket Setup
1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents

### CloudFront Distribution
1. Create CloudFront distribution
2. Point to S3 bucket
3. Configure error pages for SPA routing

## 🔧 Custom Server

### Node.js Server
```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## 🔍 Build Optimization

### Bundle Analysis
```bash
# Install bundle analyzer
npm install -g vite-bundle-analyzer

# Analyze bundle
vite-bundle-analyzer dist
```

### Performance Tips
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching headers
- Enable HTTP/2
- Optimize images before upload

## 🌍 Environment Variables

### Production Variables
```bash
# Optional: Backend integration
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_anon_key

# Optional: Analytics
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

### Development Variables
```bash
# Development overrides
VITE_DEV_MODE=true
VITE_DEBUG=true
```

## 📊 Monitoring

### Error Tracking
Consider integrating:
- Sentry for error tracking
- Google Analytics for usage analytics
- Vercel Analytics for performance monitoring

### Health Checks
The app includes a health check endpoint at `/health` (when backend is enabled).

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: actions/deploy-pages@v1
        with:
          artifact_name: dist
```

## 🛡️ Security Considerations

- All API keys should be server-side only
- Use HTTPS in production
- Implement proper CORS headers
- Regular dependency updates
- Input validation on all user data

## 🔧 Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version (18+)
2. **Routing issues**: Ensure SPA redirect rules
3. **Font loading**: Verify font preloading
4. **Performance**: Enable gzip and HTTP/2

### Debug Mode
Enable debug mode by setting:
```bash
VITE_DEBUG=true
```

## 📈 Performance Monitoring

### Core Web Vitals
Monitor:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Optimization Checklist
- [ ] Enable gzip compression
- [ ] Implement proper caching
- [ ] Optimize images
- [ ] Use CDN for static assets
- [ ] Enable HTTP/2
- [ ] Minimize bundle size
- [ ] Use proper meta tags
- [ ] Implement service worker (optional)

---

For more deployment options or issues, please check the [GitHub repository](https://github.com/yourusername/ux-analysis-studio) or open an issue.