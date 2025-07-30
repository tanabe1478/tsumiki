import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  target: 'es2022',
  tsconfig: 'tsconfig.json',
  esbuildOptions: (options) => {
    options.jsx = 'automatic';
  },
});
