import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/guide/concepts/modules
  modules: ["@nuxtjs/prismic"],

  // https://v3.prismic.nuxtjs.org/configuration
  prismic: {
    endpoint: `https://qdlagency.cdn.prismic.io/api/v2`,
    toolbar: false,
  },
});
