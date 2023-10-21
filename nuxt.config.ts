// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:3001/service/api',
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],

})
