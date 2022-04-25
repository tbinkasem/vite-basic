import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import ViteComponents from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
      },
    },
  },

  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    VueI18n({
      compositionOnly: false,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    ViteComponents(),
    WindiCSS(),
  ],
})
