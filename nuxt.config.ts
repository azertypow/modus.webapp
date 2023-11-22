// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        baseURL: '/',
        head: {
            script: [
            ]
        }
    },

    devtools: {enabled: true},
    css: [
        '@/assets/_main.scss'
    ],


})
