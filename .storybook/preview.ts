import type { Preview } from '@storybook/react'

// error if used, storybook works if this is commented but tailwind styling is not applied
// import '../src/styles/globals.css' 


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;