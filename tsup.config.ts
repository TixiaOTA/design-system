// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  external: [
    'react',
    'react-dom',
    '@tanstack/react-query',
    '@tanstack/react-table',
    'framer-motion',
    'dayjs'
  ]
});
