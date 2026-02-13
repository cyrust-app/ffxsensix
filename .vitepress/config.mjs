import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX SENSIX",
  description: "Ultimate System Tuner",
  base: '/ffx/', 
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: 'https://github.com/cyrust-app/ffx/releases' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust-app' }
    ],
    footer: {
      message: 'FFX SENSIX Project',
      copyright: 'Copyright © 2026 CyrusT'
    }
  }
})
