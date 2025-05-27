# Tixia Design System

A modern, accessible, and customizable design system built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Built with Tailwind CSS for styling
- ⚛️ React components with TypeScript
- 📚 Storybook for component documentation
- 🎯 Atomic design principles
- 🚀 Vite for fast development and building
- 📦 Published as an npm package

## Installation

```bash
# Install the package
npm install @tixia/design-system

# or with yarn
yarn add @tixia/design-system
```

## Usage

```tsx
import { Button } from '@tixia/design-system';

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Start Storybook:
   ```bash
   npm run storybook
   ```

## Project Structure

```
src/
  ├── components/
  │   ├── atoms/         # Basic building blocks
  │   ├── molecules/     # Groups of atoms
  │   ├── organisms/     # Complex components
  │   └── templates/     # Page layouts
  ├── styles/           # Global styles and theme
  └── utils/            # Utility functions
```

## Building for Production

```bash
npm run build
```

This will generate the following files in the `dist` directory:
- `tixia-design-system.umd.js` - UMD bundle
- `tixia-design-system.es.js` - ES module bundle
- `index.d.ts` - TypeScript type definitions

## Version Management and Deployment

When making changes to the design system, follow these steps to properly version and deploy your changes:

1. Make your changes in the design system
2. Commit and push your changes:
   ```bash
   git commit && git push
   ```
3. Update the version in `package.json`:
   ```json
   {
     "version": "0.2.0"
   }
   ```
4. Create and push a new tag:
   ```bash
   git tag v0.2.0 && git push origin v0.2.0
   ```

### Upgrading in Consuming Projects

To upgrade to a specific version in projects using the design system:

```bash
npm install git@github.com:TixiaOTA/design-system.git#v0.2.0
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Add tests if necessary
4. Submit a pull request

## License

MIT 