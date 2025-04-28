import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(__dirname, '../src'),
      };
    }
    config.plugins = [...(config.plugins || []), tsconfigPaths()];
    return config;
  }
};
export default config;