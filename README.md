# Tixia Design System

A modern, accessible, and customizable design system built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Built with Tailwind CSS for styling  
- ⚛️ React components with TypeScript  
- 📚 Storybook for component documentation  
- 🎯 Atomic design principles  
- 🚀 Vite for fast development and building  
- 📦 Shared as a GitHub-based package for internal projects

---

## Installation

```bash
# Install the design system via Git tag
pnpm add git@github.com:TixiaOTA/design-system.git#v0.2.0
```

> 🔁 Replace `v0.2.0` with the latest version listed in the design system release notes.

---

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

---

## Development

This repository uses [pnpm](https://pnpm.io/) for dependency management.

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Start Storybook:
   ```bash
   pnpm storybook
   ```

---

## Project Structure

```
src/
  ├── components/
  │   ├── atoms/         # Basic building blocks
  │   ├── molecules/     # Groups of atoms
  │   ├── organisms/     # Complex components
  │   └── templates/     # Page layouts
  ├── styles/            # Global styles and theme
  └── utils/             # Utility functions
```

---

## Building for Production

```bash
pnpm build
```

This will generate the following files in the `dist` directory:
- `tixia-design-system.umd.js` - UMD bundle
- `tixia-design-system.mjs` - ES module bundle
- `index.d.ts` - TypeScript type definitions

---

## 🔖 Version Management & Automated Releases

We use Semantic Versioning and an automated script (`release.ts`) to manage releases.

### 🛠 Bump Version & Generate Changelog

To release a new version, run one of the following:

```bash
pnpm release:patch   # Bugfixes, internal updates
pnpm release:minor   # New components, features (non-breaking)
pnpm release:major   # Breaking changes, large refactors
```

This will:

- Update the version in `package.json`
- Prepend commit history to `CHANGELOG.md`
- Create a Git tag (e.g. `v0.2.0`)
- Push to the `master` branch

> ⚠️ You must be on the `master` branch to run the release script.

---

### 🧠 Semantic Versioning Guide

| Command         | Example         | Use when...                             | Breaking? |
|----------------|------------------|------------------------------------------|-----------|
| `release:patch`| `0.1.3 → 0.1.4`  | Bug fixes, small internal changes        | ❌ No     |
| `release:minor`| `0.1.4 → 0.2.0`  | New components or features (safe)        | ❌ No     |
| `release:major`| `0.2.0 → 1.0.0`  | API or prop changes, removals            | ✅ Yes    |

---

### 🔼 Upgrading in Consuming Projects

To upgrade a project using this design system:

```bash
pnpm add git@github.com:TixiaOTA/design-system.git#v0.2.0
```

> Check `CHANGELOG.md` to review changes before upgrading.

---

## Contributing

1. Create a new branch
2. Make your changes
3. Add tests if necessary
4. Submit a pull request

---

## License

MIT
