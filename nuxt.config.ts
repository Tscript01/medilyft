// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true, // Enable SSR for better SEO
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "motion-v/nuxt", "@nuxtjs/sitemap"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  site: {
    url: "https://www.medilyfthelp.com",
  },
  sitemap: {
    hostname: "https://www.medilyfthelp.com",
    gzip: true,
    routes: ["/", "/about", "/privacy-policy", "/terms"],
    exclude: ["/v1admin/**"],
    sitemapSize: 50000,
    indexSitemapSize: 50000,
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "MediLyft - Medical Transportation in Ekiti State, Nigeria",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers. Trusted by hospitals and medical facilities in Ekiti State, Nigeria.",
        },
        {
          name: "keywords",
          content:
            "medical transportation, patient transport, healthcare rides, medical appointments, Ekiti State, Nigeria",
        },
        {
          property: "og:title",
          content: "MediLyft - Reliable Medical Transportation Services",
        },
        {
          property: "og:description",
          content:
            "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers in Ekiti State, Nigeria.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.medilyfthelp.com" },
        {
          property: "og:image",
          content: "https://www.medilyfthelp.com/images/MediLyft.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "MediLyft - Reliable Medical Transportation Services",
        },
        {
          name: "twitter:description",
          content:
            "Professional medical transportation services offering safe, reliable rides for healthcare appointments in Ekiti State, Nigeria.",
        },
        {
          name: "twitter:image",
          content: "https://www.medilyfthelp.com/images/MediLyft.png",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.medilyfthelp.com",
        },
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
