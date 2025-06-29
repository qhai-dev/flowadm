import * as path from 'path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import  { pluginBabel } from "@rsbuild/plugin-babel"

export default defineConfig({
  source:{
    entry: {
      "index": './src/main'
    }
  },
  plugins: [
      pluginBabel(),
      pluginReact()
  ],
  resolve:{
    alias:{
    "@": path.resolve(__dirname, 'src'),
    }
  }
});

// {
//   babelLoaderOptions: {
//     plugins: ['babel-plugin-transform-typescript-metadata']
//   }
// }