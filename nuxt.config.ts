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
        { name: 'description', content: 'Soy estudiante de Ingeniería de Sistemas e Informática con experiencia en desarrollo web, APIs y servicios basados en inteligencia artificial.' },
        { property: 'og:title', content: 'Ronal LLM - Portafolio' },
        { property: 'og:description', content: 'Soy estudiante de Ingeniería de Sistemas e Informática con experiencia en desarrollo web, APIs y servicios basados en inteligencia artificial.' },
        { property: 'og:image', content: '' },
        { name: 'twitter:title', content: 'Ronal LLM - Portafolio' },
        { name: 'twitter:description', content: 'Soy estudiante de Ingeniería de Sistemas e Informática con experiencia en desarrollo web, APIs y servicios basados en inteligencia artificial.' },
        { name: 'twitter:image', content: '' }
      ],
      script: [
        // Google Analytics
        {
          async: true,
          src:
            'https://www.googletagmanager.com/gtag/js?id=G-LTRBVT9Q64'
        },
        {
          hid: 'gtm-analytics',
          innerHTML: `(function(){
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LTRBVT9Q64');
            })();`
        },
        {
          type: 'application/ld+json',
          textContent: {
            '@context': 'http://schema.org/',
            '@type': 'Organization',
            name: 'Soy estudiante de Ingeniería de Sistemas e Informática con experiencia en desarrollo web, APIs y servicios basados en inteligencia artificial.',
            url: 'https://ronal-llapapasca.vercel.app/',
          }
        }
      ]
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
