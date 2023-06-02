// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/86aaaa56a8.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/ui"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },
});
