// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "motion-v/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "MediLyft - Reliable Medical Transportation Services",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/MediLyft.png",
        },
      ],
      style: [
        {
          textContent: "html { scroll-behavior: smooth; }",
        },
      ],
    },
  },
});
