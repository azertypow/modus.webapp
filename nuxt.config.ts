// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        baseURL: '/modus.webapp/',
        head: {
            script: [
                {
                    src: "https://www.youtube.com/iframe_api",
                    async: 'false',
                    defer: 'false',
                }
            ]
        }
    },

    devtools: {enabled: true},
    css: [
        '@/assets/_main.scss'
    ],


})
