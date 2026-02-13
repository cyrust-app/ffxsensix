import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX SENSIX",
  description: "Ultimate System Tuner",
  themeConfig: {
    logo: '/logo.png', // Jika ada
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust-app' },
      { icon: 'youtube', link: 'https://youtube.com' }
    ],
    footer: {
      message: 'FFX SENSIX Project',
      copyright: '© 2026 CyrusT'
    }
  }
})
