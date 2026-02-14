// .vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nama Situs Anda",
  description: "Deskripsi situs",
  themeConfig: {
    // Menu navigasi di atas
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    // Menu sidebar di samping
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Apa itu FFX?', link: '/guide' },
        ]
      }
    ],
    // Link ke GitHub Anda
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust-app/ffxsensix' }
    ]
  }
})
