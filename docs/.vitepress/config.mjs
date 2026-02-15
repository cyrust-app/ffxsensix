import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFXSensix",
  description: "Optimasi Sensivitas FF Tingkat Lanjut",
  base: '/ffxsensix/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png', // Pastikan simpan logo di docs/public/logo.png
    
    // Navigasi Atas
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Panduan', link: '/guide' },
      { text: 'v1.0.0', items: [
          { text: 'Changelog', link: 'https://github.com/cyrust-app/ffxsensix/releases' },
          { text: 'Kontribusi', link: '/contributing' }
        ] 
      }
    ],

    // Sidebar yang lebih terstruktur
    sidebar: [
      {
        text: 'Memulai',
        collapsed: false,
        items: [
          { text: 'Apa itu FFXSensix?', link: '/' },
          { text: 'Instalasi', link: '/guide' },
        ]
      },
      {
        text: 'Konfigurasi',
        collapsed: false,
        items: [
          { text: 'Sensivitas Dasar', link: '/config/basic' },
          { text: 'Pengaturan DPI', link: '/config/dpi' },
        ]
      }
    ],

    // Sosial Media & Repository
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust-app/ffxsensix' },
      { icon: 'discord', link: 'https://discord.gg/' }
    ],

    // Footer & Edit Link
    editLink: {
      pattern: 'https://github.com/cyrust-app/ffxsensix/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    },

    footer: {
      message: 'Dirilis di bawah Lisensi MIT.',
      copyright: 'Copyright © 2024-sekarang Cyrust App'
    },

    search: {
      provider: 'local' // Menambahkan fitur pencarian lokal
    }
  }
})
