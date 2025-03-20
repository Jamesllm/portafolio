// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devServer: {
    host: '0.0.0.0',
    port: 3031,
  },
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' },
        { name: 'description', content: ' Convierte cualquier número a su representación textual.' },
        { property: 'og:title', content: 'Number to letters by Jamesllm' },
        { property: 'og:description', content: ' Convierte cualquier número a su representación textual.' },
        { property: 'og:image', content: 'https://aula360.drago.pe/aula360.jpeg' },
        { name: 'twitter:title', content: 'Number to letters by Jamesllm' },
        { name: 'twitter:description', content: ' Convierte cualquier número a su representación textual.' },
        { name: 'twitter:image', content: 'https://aula360.drago.pe/aula360.jpeg' }
      ],
    },
  },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
  ],
});
