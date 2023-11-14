// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        baseURL: '/modus.webapp/',
    },

    devtools: {enabled: true},
    css: [
        '@/assets/_main.scss'
    ]
})
