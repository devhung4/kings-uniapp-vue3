import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import utw from '@uni-helper/vite-plugin-uni-tailwind'
import AutoImport from 'unplugin-auto-import/vite'
import postcssConfig from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: postcssConfig,
  },
  plugins: [
    uni(),
    utw(),
    AutoImport({
      imports: ['vue', 'uni-app', 'pinia'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})
