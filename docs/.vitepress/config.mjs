import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFXSensix",
  description: "VitePress Site for ffxsensix",
  base: '/ffxsensix/', // Sesuai dengan nama repositori Anda
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is FFXSensix?', link: '/' },
          { text: 'Getting Started', link: '/guide' }
        ]
      }
    ]
  }
})
