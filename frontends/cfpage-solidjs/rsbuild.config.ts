import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
    // tailwindcss()
    
  ],
  html: {
    favicon: './src/assets/favicon.png'

  },
  server: {
    headers:{
      'X-Clacks-Overhead': 'GNU Terry Pratchett',
      'X-Frame-Options': 'SAMEORIGIN'
    },
    proxy:{
      '/api': {
      target: 'http://localhost:8787',
      // pathRewrite: {'^/api': ''},
    
      }
    }
  }
});
