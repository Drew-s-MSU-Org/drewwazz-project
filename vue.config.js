module.exports = {
  pwa: {
    // name: 'Photo App',
    // themeColor: '#00695c',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',

    manifestOptions: {
      name: 'Drews Application',
      short_name: 'Ds App',
      start_url: '.',
      display: 'standalone',
      theme_color: '#00695c',
      icons: [
        {
          'src': 'img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/apple-touch-icon-60x60.png',
          'sizes': '60x60',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/apple-touch-icon-76x76.png',
          'sizes': '76x76',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/apple-touch-icon-120x120.png',
          'sizes': '120x120',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/apple-touch-icon-152x152.png',
          'sizes': '152x152',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/apple-touch-icon-180x180.png',
          'sizes': '180x180',
          'type': 'image/png'
        },
        {
          'src': './img/icons/apple-touch-icon.png',
          'sizes': '180x180',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/favicon-16x16.png',
          'sizes': '16x16',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/favicon-32x32.png',
          'sizes': '32x32',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/msapplication-icon-144x144.png',
          'sizes': '144x144',
          'type': 'image/png'
        },
        {
          'src': 'img/icons/mstile-150x150.png',
          'sizes': '150x150',
          'type': 'image/png'
        }
      ]
    },

    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      //maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
  }
};