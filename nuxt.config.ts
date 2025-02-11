// https://nuxt.com/docs/api/configuration/nuxt-config
import {generatedRoutes} from "./_PreNuxtConfigScripts/generatedRoutes";

export default defineNuxtConfig({

    app: {
        baseURL: '/',
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                { property: 'og:title', content: 'modus' },
                { property: 'og:description', content: 'modus. pour une mobilité durable à Genève' },
                { property: 'og:image', content: 'https://modus-admin.sdrvl.ch/media/pages/home/42ddbaa302-1722098276/esemble-2-resize-100.jpg' },
                { property: 'og:url', content: 'https://modus-ge.ch/' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'modus' },
                { name: 'twitter:description', content: 'modus. pour une mobilité durable à Genève' },
                { name: 'twitter:image', content: 'https://modus-admin.sdrvl.ch/media/pages/home/42ddbaa302-1722098276/esemble-2-resize-100.jpg' },
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

    generate: {
        routes: generatedRoutes
    }
})
