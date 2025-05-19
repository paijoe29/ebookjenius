# Ebook Jenius - Landing Page Interaktif

Selamat datang di repositori Ebook Jenius! Ini adalah proyek landing page yang dirancang untuk mempromosikan dan menjual koleksi ebook tentang AI, coding, dan digital marketing. Halaman ini dibangun dengan fokus pada pengalaman pengguna yang menarik, desain responsif, dan animasi yang halus.

![Screenshot](https://github.com/paijoe29/ebookjenius/blob/dc778bf680385e17a771df8ac83270507110fdef/public/Screenshot%202025-05-18%20at%2019.19.43.png)

## ✨ Fitur Utama

*   **Desain Responsif**: Tampilan optimal di berbagai perangkat, mulai dari desktop hingga seluler.
*   **Navigasi Intuitif**: Navbar yang sticky dengan menu hamburger fungsional di perangkat seluler dan logo yang menarik.
*   **Hero Section Menarik**: Menampilkan judul utama, deskripsi, tombol CTA, dan kartu harga promo yang menonjol.
*   **Countdown Timer Penawaran Terbatas**: Menciptakan urgensi dengan penghitung waktu mundur untuk promo spesial.
*   **Animasi Scroll Halus**: Seksi-seksi halaman muncul dengan animasi elegan saat pengguna menggulir.
*   **Presentasi Ebook Detail & Menarik**: Setiap ebook disajikan dalam kartu yang informatif dengan desain visual yang ditingkatkan, deskripsi, dan harga.
*   **Seksi Fitur Unggulan**: Menjelaskan manfaat utama dari koleksi ebook.
*   **Seksi Perbandingan**: Menunjukkan transformasi yang bisa didapatkan pengguna ("Sebelum" dan "Sesudah" membeli ebook).
*   **Seksi Testimoni**: Menampilkan ulasan positif dari pengguna untuk membangun kepercayaan.
*   **Formulir Kontak Interaktif**: Seksi kontak dengan tata letak dua kolom yang rapi untuk memudahkan pengguna menghubungi.
*   **Call to Action (CTA) Efektif**: Beberapa tombol CTA yang strategis untuk mendorong konversi.
*   **Footer Informatif**: Menyediakan informasi kontak, tautan media sosial, dan hak cipta.
*   **Komponen UI Modern**: Menggunakan komponen dari pustaka Shadcn/UI untuk tampilan yang konsisten dan profesional.
*   **Font Kustom (Poppins)**: Penggunaan font Poppins di seluruh website untuk tampilan yang modern dan mudah dibaca.

## 🛠️ Teknologi yang Digunakan

*   **React**: Pustaka JavaScript untuk membangun antarmuka pengguna.
*   **TypeScript**: Superset JavaScript yang menambahkan pengetikan statis.
*   **Vite**: Alat build frontend generasi berikutnya yang sangat cepat.
*   **Tailwind CSS**: Kerangka kerja CSS utility-first untuk desain yang cepat dan kustom.
*   **Shadcn/UI**: Koleksi komponen UI yang dapat digunakan kembali, dibangun di atas Radix UI dan Tailwind CSS.
*   **React Router DOM**: Untuk routing sisi klien dan navigasi antar halaman (meskipun saat ini sebagian besar adalah single-page dengan anchor links).
*   **Lucide React**: Pustaka ikon SVG yang cantik dan konsisten.
*   **React Intersection Observer**: Untuk memicu animasi saat elemen masuk ke viewport.

## 🚀 Memulai Proyek Secara Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori:**
    ```bash
    git clone https://github.com/USERNAME_ANDA/NAMA_REPOSITORI_ANDA.git
    cd NAMA_REPOSITORI_ANDA
    ```
    *(Ganti `USERNAME_ANDA` dan `NAMA_REPOSITORI_ANDA` dengan detail GitHub Anda)*

2.  **Instal Dependensi:**
    Pastikan Anda memiliki Node.js dan npm (atau Yarn) terinstal.
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Server Pengembangan:**
    Ini akan memulai server pengembangan Vite dan membuka aplikasi di browser Anda.
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
    Aplikasi biasanya akan tersedia di `http://localhost:8080`.

## 📜 Skrip yang Tersedia

Dalam direktori proyek, Anda dapat menjalankan:

*   `npm run dev` atau `yarn dev`: Menjalankan aplikasi dalam mode pengembangan.
*   `npm run build` atau `yarn build`: Membangun aplikasi untuk produksi ke folder `dist`.
*   `npm run lint` atau `yarn lint`: Menjalankan linter ESLint untuk memeriksa masalah kode.
*   `npm run preview` atau `yarn preview`: Menjalankan server lokal untuk melihat build produksi.

## 📁 Struktur Folder Utama

```
.
├── public/
├── src/
│   ├── components/       # Komponen UI yang dapat digunakan kembali
│   │   ├── ui/           # Komponen Shadcn/UI
│   │   └── ...           # Komponen kustom (Navbar, Footer, dll.)
│   ├── hooks/            # Custom React Hooks
│   ├── lib/              # Utilitas (misalnya, cn untuk classnames)
│   ├── pages/            # Komponen halaman utama (Index, NotFound)
│   ├── App.tsx           # Komponen root aplikasi dan konfigurasi router
│   ├── main.tsx          # Titik masuk aplikasi React
│   └── globals.css       # Gaya global dan konfigurasi Tailwind
├── .gitignore            # File yang diabaikan oleh Git
├── tailwind.config.ts    # Konfigurasi Tailwind CSS
├── vite.config.ts        # Konfigurasi Vite
└── README.md             # Anda sedang membacanya!
```

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat kami hargai! Jangan ragu untuk membuka isu atau pull request.

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini.

---

Semoga landing page ini bermanfaat dan menginspirasi! Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi.
