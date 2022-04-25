import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import 'windi.css'

import App from './app.vue'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
  .use(router)

Object.values(import.meta.globEager('./modules/*.js')).map(i => i.install?.({ app }))

app.mount('#app')
