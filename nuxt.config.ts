import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  modules: [    
  '@formkit/nuxt',
  '@pinia/nuxt',
  '@nuxtjs/seo',
  '@nuxt/image'
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
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    xxxl: 2000,
  },
},
  compatibilityDate: "2024-07-11",
})