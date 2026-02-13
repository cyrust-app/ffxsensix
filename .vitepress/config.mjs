import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX SENSIX",
  description: "Ultimate System Tuner",
  base: '/ffxsensix/',
  head: [
    // Ini cara paksa memasukkan CSS ke header
    ['style', {}, `
      :root { --vp-c-brand-1: #00F2FF !important; }
      .ui-container { background: #111; border: 1px solid #222; padding: 20px; border-radius: 15px; }
      /* ... paste semua CSS dari langkah 1 di sini jika tidak ingin buat file terpisah ... */
    `]
  ],
  themeConfig: {
    // ... config kamu yang lain
  }
})
