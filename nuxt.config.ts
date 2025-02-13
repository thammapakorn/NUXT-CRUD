// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],

  // custom tailwindcss path
  tailwindcss:{
    cssPath: "~/assets/main.css"
  },

  // server config variable
  runtimeConfig:{
    MONGO_URI: "mongodb://localhost:27017/nuxt3-crud"
  },

  // register nitro plugin
  nitro:{
    plugins:["@/server/db/index.ts"]
  },

  /// transpile  afew packages
  build: {
    transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"],
  },
  
  compatibilityDate: "2025-02-03"
})