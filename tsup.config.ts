import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*'],
  format: ['esm'],
  dts: true,
  sourcemap: 'inline',
  clean: true,
  minify: false,
  target: 'es2018',
});
