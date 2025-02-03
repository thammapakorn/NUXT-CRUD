// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  // custom tailwindcss path
  tailwindcss:{
    cssPath: "~/assets/main.css"
  },
  runtimeConfig:{
    MONGO_URI: process.env.MONGO_URI
  },
  nitro:{
    plugins:["@/server/db/index.ts"]
  },
  compatibilityDate: "2025-02-03"
})