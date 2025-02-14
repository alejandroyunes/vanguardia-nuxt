import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.scss"],
  modules: [    
  '@formkit/nuxt',
  '@pinia/nuxt',
  '@nuxtjs/seo',
  '@nuxt/image',
  '@zadigetvoltaire/nuxt-gtm'
],
app: {
  head: {
    htmlAttrs: { lang: 'es' },
    title: 'Servicios Web Profesionales en Colombia | Páginas Profesionales',
    titleTemplate: '%s',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  },
  rootAttrs: {
    id: 'paginas-profesionales',
  },
},
image: {
  format: ['webp', 'png'],
  screens: {
    xs: 320,
    md: 1024,
    xl: 1280,
  },
},
gtm: {
  id: 'GTM-53GHMHBC',
  defer: false,
  compatibility: false,
  enabled: true,
  debug: false,
  loadScript: true,
  enableRouterSync: true,
  ignoredViews: ['homepage'],
  trackOnNextTick: false,
  devtools: false,
  },  
  compatibilityDate: "2024-07-11",
})