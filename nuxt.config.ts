import { resolvePath } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],

  alias:{
    assets: "<rootDir>/assets",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vueuse/nuxt"]
})