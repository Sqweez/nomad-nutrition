// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nomad Nutrition',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
                {
                    rel: 'mask-icon',
                    href: '/safari-pinned-tab.svg',
                    color: '#5bbad5'
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#da532c'
                },
                {
                    name: 'theme-color',
                    content: '#ffffff'
                }
            ]
        },
    },
    ssr: true,
    devtools: {enabled: false},
    css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'nuxt-swiper',
        'vue3-carousel-nuxt',
        '@hypernym/nuxt-gsap',
        '@pinia/nuxt',
        '@nuxtjs/device',
        '@nuxt/image',
    ],
    image: {
        dir: 'assets/images'
    },
    gsap: {
        composables: true,
        extraPlugins: {
            scrollTo: true,
            scrollTrigger: true
        },
    },
    vite: {
        server: {
            hmr: {
                port: '3008',
                host: '0.0.0.0'
            }
        }
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BACKEND_URL || 'https://ironadmin.ariesdev.kz/api/'
        }
    },
    swiper: {
        modules: ['navigation', 'pagination']
    },
    hooks: {}
})
