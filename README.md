# TIXIA Design System

A comprehensive design system for TIXIA applications.

## Versioning and Publishing

This project follows [Semantic Versioning](https://semver.org/) and uses automated versioning through GitHub Actions. The versioning system is designed to make it easy for consuming projects to stay up to date with the latest changes.

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This helps in automatically determining the version bump type.

Format:
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types that trigger version bumps:
- `feat:` - Triggers a minor version bump (new feature)
- `fix:` - Triggers a patch version bump (bug fix)
- `BREAKING CHANGE:` or `!:` - Triggers a major version bump (breaking changes)

Examples:
```bash
# Minor version bump (new feature)
git commit -m "feat(button): add loading state to button component"

# Patch version bump (bug fix)
git commit -m "fix(table): resolve alignment issue in table cells"

# Major version bump (breaking change)
git commit -m "feat(api)!: restructure component props interface"
# or
git commit -m "feat(api): restructure component props interface

BREAKING CHANGE: All components now require new prop structure"
```

### Publishing Process

1. **Making Changes**
   - Create a new branch for your changes
   - Make your changes following the commit convention
   - Update the CHANGELOG.md under the [Unreleased] section
   - Create a pull request to the main branch

2. **Updating CHANGELOG.md**
   - Add your changes under the appropriate section in [Unreleased]:
     ```markdown
     ## [Unreleased]
     
     ### Added
     - New feature description
     
     ### Changed
     - Change description
     
     ### Fixed
     - Bug fix description
     ```

3. **Merging to Main**
   - When your PR is merged to main, the GitHub Action will:
     - Analyze commit messages since the last tag
     - Determine the version bump type
     - Update package.json version
     - Update CHANGELOG.md
     - Create a new git tag
     - Create a GitHub release
     - Build and package the design system

4. **Consuming Projects**
   - Projects using the design system will see update notifications when running `npm install`
   - The notification will show:
     - Current version
     - Latest version
     - Type of update (major/minor/patch)
     - Link to release notes

### Manual Version Bump (if needed)

If you need to manually bump the version:

```bash
# For patch version (0.0.x)
npm version patch

# For minor version (0.x.0)
npm version minor

# For major version (x.0.0)
npm version major
```

### Checking for Updates

Projects using the design system can check for updates by:

```bash
# Check current version
npm list @tixia/design-system

# Update to latest version
npm install @tixia/design-system@latest
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the package
npm run build

# Run Storybook
npm run storybook
```

## Contributing

1. Create a new branch for your feature/fix
2. Make your changes following the commit convention
3. Update CHANGELOG.md
4. Create a pull request
5. Wait for review and merge

## License

[Your License Here] 