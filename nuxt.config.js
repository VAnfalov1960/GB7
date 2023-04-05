export default {
    ssr: false,
    subdirectory: '/courses/',    
    router: {
        base: '/courses/',
    },
    // server: {
    //     port: 5500,
    //     host: "localhost"
    // },
    head: {
        title: 'Курсовая работа GeekBrains "Интернет-магазин на Vue',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
            },
        ],
        script: [{ src: 'https://checkout.stripe.com/checkout.js' }],
    },

    loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
    css: ['@/assets/scss/app.scss', 'swiper/css/swiper.css'],
    plugins: [
        { src: '~/plugins/plugin.js', ssr: false },
        { src: '~/plugins/localStorage.js', ssr: false },    
    ],
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        'vue-scrollto/nuxt'
    ],
    axios: {},
    generate: {
        fallback: true,
    },
    build: {
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        babel: { compact: true },
    },
};
