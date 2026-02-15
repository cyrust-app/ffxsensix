# 🛠️ API Reference

Selamat datang di referensi teknis FFXSensix. Halaman ini menjelaskan struktur data dan parameter yang digunakan dalam sistem optimasi kami.

## Core Module: `SensixCalculator`

Modul utama untuk menghitung nilai DPI berdasarkan resolusi layar.

### `calculateDPI()`
Menghasilkan nilai rekomendasi DPI berdasarkan input lebar layar.

- **Parameter:**
  - `screenWidth` (number): Lebar layar dalam pixel.
  - `multiplier` (number): Faktor pengali (default: `1.2`).

- **Contoh Penggunaan:**
  ```javascript
  const recommendedDPI = calculateDPI(1080, 1.2); 
  // Output: 449
