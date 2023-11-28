export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap',
        },
      ],
    },
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.storyblok_api,
        apiOptions: {
          region: 'us',
        },
      },
    ],
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'vue3-carousel-nuxt',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
    'nuxt-security',
  ],
  security: {
    headers:
      process.env.NODE_ENV !== 'production'
        ? false
        : {
            contentSecurityPolicy: {
              'default-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'https://*.storyblok.com',
                'https://*.vercel.com',
                'https://*.google-analytics.com',
                'https://*.googletagmanager.com',
              ],
              'script-src': [
                "'self'",
                'https:',
                "'unsafe-inline'",
                "'strict-dynamic'",
                "'nonce-{{nonce}}'",
                'https://*.googletagmanager.com',
                'https://*.google-analytics.com',
                'https://googletagmanager.com',
                'https://tagmanager.google.com',
              ],
              'script-src-attr': [
                "'self'",
                'https:',
                'data:',
                'localhost:*',
                '192.168.0.16:*',
              ],
              'connect-src': [
                "'self'",
                'https://*.storyblok.com',
                'https://*.vercel.com',
                'https://*.google-analytics.com',
                'https://*.analytics.google.com',
                'https://*.googletagmanager.com',
              ],
              'font-src': [
                "'self'",
                'https:',
                'data:',
                'https://fonts.gstatic.com',
              ],
              'style-src': [
                "'self'",
                'https:',
                "'unsafe-inline'",
                'https://googletagmanager.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
              ],
              'frame-ancestors': ["'self'", 'https://*.storyblok.com'],
              'upgrade-insecure-requests':
                process.env.NODE_ENV === 'production',
            },
            crossOriginEmbedderPolicy: false,
            crossOriginOpenerPolicy: false,
          },
  },
  gtag: {
    id: 'G-DHB1NJW7BD',
  },
  site: {
    url: 'https://www.assassingrappling.com/',
  },
  runtimeConfig: {
    public: {
      formspree_api: process.env.formspree_api,
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  css: ['@/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/abstracts.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  image: {
    format: ['avif', 'webp'],
    storyblok: {
      baseURL: 'https://a-us.storyblok.com',
    },
  },
});
