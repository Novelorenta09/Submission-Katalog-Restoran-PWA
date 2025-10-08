#﻿# Submission-Katalog-Restoran-PWA

# Fare Culiner (Submission 2 - PWA)

Versi lanjutan dari aplikasi restoran sederhana berbasis JavaScript dan Webpack, yang kini sudah diintegrasikan dengan Progressive Web App (PWA) agar dapat berjalan secara offline, cepat, dan dapat diinstal seperti aplikasi native.

- Proyek ini dibuat untuk memenuhi kriteria:

### Halaman Utama (Daftar Restoran) – menampilkan daftar restoran yang diambil dari data API.
- Halaman Detail Restoran – menampilkan detail informasi restoran (menu, alamat, rating, review).
- Halaman Daftar Restoran Favorit – menyimpan daftar restoran yang disukai pengguna menggunakan IndexedDB.
- Native Capability – mendukung instalasi aplikasi (Add to Home Screen) dan berfungsi offline melalui Service Worker.
- Code Quality – menerapkan struktur kode yang bersih, modular, dan mengikuti standar ESLint.
- Mempertahankan submission sebelumnya – tetap menggunakan Webpack, struktur folder modular, dan script start-dev / build.

### Fitur PWA yang Ditambahkan
- Service Worker (Workbox): caching konten statis & dinamis agar tetap bisa diakses saat offline.
- Web App Manifest: memungkinkan aplikasi diinstal seperti aplikasi native.
- Offline Fallback Page: menampilkan halaman khusus jika tidak ada koneksi internet.
- Add to Home Screen (A2HS): pengguna dapat menambahkan aplikasi ke layar utama.
- IndexedDB: menyimpan data restoran favorit secara lokal tanpa koneksi.
