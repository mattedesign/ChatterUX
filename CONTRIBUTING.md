# Contributing to UX Analysis Studio

Thank you for your interest in contributing to UX Analysis Studio! This document provides guidelines and information for contributors.

## 🤝 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher
- Git

### Development Setup
1. **Fork the repository**
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

## 📁 Project Structure

```
ux-analysis-studio/
├── components/          # React components
│   ├── analyze/        # Core analysis components
│   ├── figma/          # Figma-specific components
│   └── ui/             # Reusable UI components
├── styles/             # Global styles and CSS
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use functional components with hooks
- Implement proper error handling
- Write descriptive commit messages

### Component Guidelines
- Use the existing component structure
- Implement proper TypeScript interfaces
- Add JSDoc comments for complex functions
- Use the established naming conventions
- Keep components focused and reusable

### Styling Guidelines
- Use Tailwind CSS for styling
- Follow the existing design system
- Use CSS variables for theming
- Implement responsive design
- Add proper hover and focus states

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write unit tests for utilities and hooks
- Add integration tests for complex components
- Test error scenarios and edge cases
- Maintain good test coverage

## 📝 Code Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Avoid using `any` type
- Use meaningful variable and function names

### React
- Use functional components with hooks
- Implement proper state management
- Use React.memo for optimization when needed
- Handle loading and error states

### Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain proper color contrast

## 🎨 Design System

### Colors
- Use CSS custom properties for colors
- Follow the existing color palette
- Maintain consistency across components
- Support both light and dark themes

### Typography
- Use the Inter font family
- Follow the established font scales
- Implement proper line heights
- Use consistent spacing

### Components
- Follow the Spline-inspired design language
- Use consistent shadows and borders
- Implement smooth transitions
- Maintain visual hierarchy

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier
npm run clean        # Clean build artifacts
```

## 📋 Pull Request Process

### Before Submitting
1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

### Pull Request Guidelines
- Use a clear and descriptive title
- Provide detailed description of changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🐛 Bug Reports

### Before Reporting
- Check existing issues
- Verify the bug in the latest version
- Test in different browsers if applicable

### Bug Report Template
```markdown
## Bug Description
A clear description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- Browser: [e.g., Chrome 91]
- OS: [e.g., macOS 11.4]
- Node.js: [e.g., 18.0.0]
- npm: [e.g., 9.0.0]

## Screenshots
If applicable, add screenshots.
```

## 💡 Feature Requests

### Feature Request Template
```markdown
## Feature Description
A clear description of the feature.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
Other solutions you've considered.

## Additional Context
Any other context or screenshots.
```

## 🎯 Priority Areas

### High Priority
- Performance improvements
- Accessibility enhancements
- Bug fixes
- Security improvements

### Medium Priority
- New analysis features
- UI/UX improvements
- Documentation updates
- Test coverage improvements

### Low Priority
- Code refactoring
- Developer experience improvements
- Optional features

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

### Design Resources
- [Figma Design System](https://www.figma.com/design-systems/)
- [Spline Design Language](https://spline.design/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 👥 Community

### Getting Help
- Open an issue for bugs or feature requests
- Join our Discord community (link coming soon)
- Check the documentation and FAQ

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Follow the project's code of conduct

## 🏆 Recognition

Contributors will be recognized in:
- The project README
- Release notes
- Hall of fame (coming soon)

## 📄 License

By contributing to UX Analysis Studio, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to UX Analysis Studio! Your help makes this project better for everyone. 🎉