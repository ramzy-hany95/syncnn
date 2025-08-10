import i18n from "./config/i18n";

export default {
  target: "static",
  env: {
    // APP_URL: "http://localhost:3000",
    API_URL:"https://sync-n.com",
    API_URL: "./config/index.js" || "https://sync-n.com",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    layoutError: true,
    titleTemplate: "%s - SyncN",
    title: "Sync-N | Make it smart | a low-code IoT software platform for businesses and developers",
    loading: false,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      {
        href: "https://fonts.googleapis.com/css?family=Tajawal:400,500,700&display=swap&subset=arabic",
        rel: "stylesheet",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.9.0/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style/main.scss", "@/assets/style/styleEn.scss"],
  // router: {
  //     middleware: 'i18n'
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //     { src: '~/plugins/i18n.js' },
  // ],
  plugins: [
        // { src: '~/plugins/i18n.js' },
        { src: '~/plugins/map', ssr: false },
        { src: '~/plugins/smooth-scroll.js', mode: 'client' }

    ],
  // i18n : {
  //     skipSettingLocaleOnNavigate: true,
  // },
    generate: {
      // routes: ['/', '/contact', '/ar', '/ar/contact']
      fallback: true
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        defaultLocale: "en",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "ar",
            name: "Arabic",
          },
        ],
        vueI18n: i18n,
      },
    ],
    // https://go.nuxtjs.dev/vuetify
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/pwa", "cookie-universal-nuxt"],
  pwa: {
    manifest: {
      name: 'SyncN',
      short_name: 'SyncN',
      description: 'Sync-N | Make it smart | a low-code IoT software platform for businesses and developers',
      lang: 'en',
      display: 'standalone',
      theme_color: '#4A90E2',
      background_color: '#FFFFFF',
    },
    workbox: {
      enabled: true,
      swURL: 'static/sw.js',

    },
  
    manifest: {
      name: "SyncN",
      short_name: "SyncN",
      description: "Sync-N | Make it smart | a low-code IoT software platform for businesses and developers",
      lang: "en",
      display: "standalone",
      start_url: "/?standalone=true",
    },
    icon: {
      source: './static/Vector.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
