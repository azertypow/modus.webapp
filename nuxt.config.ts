// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        baseURL: '/',
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            script: [
            ]
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },

    devtools: {enabled: true},
    css: [
        '@/assets/_main.scss'
    ],
    ssr: false,


})
