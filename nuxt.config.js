export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'flou-cloud-after-purchase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
     '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios configuration
  axios: {
    baseURL: 'https://dummyjson.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Auth Configuration
  auth: {
    strategies: {
        local : {
            endpoints: {
                login: {
                    url : '/auth/login',
                    method: 'post',
                    propertyName: 'jwt'
                },
                user: {
                    url: '/users/me',
                    method: 'get'
                },
                logout: {
                    url : '/auth/logout',
                    method: 'get'
                }
            },
            token: {
                property: 'jwt'
            },
            user: {
                property: false,
                autoFetch: true // default
            },
        }
    },
    redirect: {
        login: '/auth/login',
    }
  },

  // Router Middleware
  router: {
    middleware: ['auth']
  }
}
