// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', 'motion-v/nuxt'],
    css: ['~/assets/css/main.css'],
    app: {
    head: {
      style: [
        {
          textContent: 'html { scroll-behavior: smooth; }'
        }
      ]
    }
  }
})