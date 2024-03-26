import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import vitePluginPrettier from 'vite-plugin-prettier'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginPrettier({
      include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.css', '**/*.json'],
      formatter: 'prettier',
      prettierOptions: {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        jsxSingleQuote: true,
        trailingComma: 'es5',
        // Add more Prettier options as needed
      },
      // prettierOptions: require('./.prettierrc'), // Path to your Prettier config file
    }),
  ],
})
