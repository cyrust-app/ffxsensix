import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX SensiX",
  description: "Optimasi Sensivitas FF Tingkat Lanjut",
  base: '/ffxsensix/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png', // Pastikan file logo ada di docs/public/logo.png
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Panduan', link: '/guide' },
      { text: 'Download', link: '/download' },
      { 
        text: 'v1.0.4', 
        items: [
          { text: 'Log Perubahan', link: '/download#log-perubahan' },
          { text: 'Kontribusi', link: '/contributing' }
        ] 
      }
    ],

    sidebar: [
      {
        text: 'Mulai Cepat',
        collapsed: false,
        items: [
          { text: 'Tentang FFXSensix', link: '/' },
          { text: 'Pusat Unduhan', link: '/download' },
          { text: 'Instalasi', link: '/guide' },
        ]
      },
      {
        text: 'Optimalisasi DPI',
        collapsed: false,
        items: [
          { text: 'Sensivitas Dasar', link: '/config/basic' },
          { text: 'Kalkulator DPI', link: '/config/dpi' },
        ]
      },
      {
        text: 'Komunitas',
        items: [
          { text: 'Cara Kontribusi', link: '/contributing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust-app/ffxsensix' }
    ],

    editLink: {
      pattern: 'https://github.com/cyrust-app/ffxsensix/edit/main/docs/:path',
      text: 'Edit halaman ini'
    },

    footer: {
      message: 'FFXSensix Official Project',
      copyright: 'Copyright © 2026 Cyrust App'
    },

    search: {
      provider: 'local'
    }
  }
})
