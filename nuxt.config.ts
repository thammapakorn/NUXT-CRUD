// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    MONGO_URI: process.env.MONGO_URI
  },

  compatibilityDate: "2025-02-03"
})