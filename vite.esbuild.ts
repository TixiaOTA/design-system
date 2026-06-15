// Workaround for esbuild 0.28+ destructuring target checks.
// See: https://github.com/evanw/esbuild/issues/4436
export const esbuildDestructuringWorkaround = {
  supported: {
    destructuring: true,
  },
} as const;
