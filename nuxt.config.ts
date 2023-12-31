// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/css/main.scss']
})
