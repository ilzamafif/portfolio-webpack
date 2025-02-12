import UrlParser from "../../routes/url-parser";
import { DetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
          <section class="section-detail">
            
          </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector(".section-detail");
    detailContainer.innerHTML = "";
    
    const projects = [
      {
        id: 'open-music',
        title: 'OPEN MUSIC',
        image: './images/portfolio-9.png',
        description: 'REST API untuk pengelolaan MUSIC',
        longDescription: 'Api ini telah dikembangkan secara berangsur dan saat ini sudah dalam versi akhir yang memiliki fitur menambahkan lagu, membuat playlist, memasukan lagu ke dalam playlist, autentikasi dan autorisasi user, kolaborasi/membagikan playlist kepada pengguna lain, fitur server-side caching untuk mengurangi pekerjaan database, ekspor daftar lagu yang berada di playlist, dan upload gambar untuk sampul album.',
        link: 'https://github.com/ilzamafif/open-music',
        technologies: ['HTML CSS', 'JOI Validation', 'Framework HAPI js', 'PostgeSQL', 'Redis', 'Rabbit MQ'],
        features: [
          'autentikasi dan autorisasi user.',
          'menambahkan lagu, membuat playlist, memasukan lagu ke dalam playlist.',
          'Kolaborasi/membagikan playlist kepada pengguna lain.',
          'fitur server-side caching untuk mengurangi pekerjaan database',
          'ekspor daftar lagu yang berada di playlist',
          'dan upload gambar untuk sampul album',
        ]
      },
      {
        id: 'nomads',
        title: 'NOMADS',
        image: './images/portfolio-4.png',
        description: 'Aplikasi Pemesanan Tiket Dengan Laravel',
        longDescription: 'NOMADS adalah aplikasi pemesanan tiket yang dibangun dengan menggunakan framework Laravel. Aplikasi ini memudahkan pengguna dalam memesan tiket perjalanan dengan cepat dan mudah.',
        link: 'https://github.com/ilzamafif/nomads',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
        features: [
          'Pemesanan tiket online.',
          'Pembayaran melalui berbagai metode Yang terintegrasi dengan Midtrans.',
          'Notifikasi email untuk konfirmasi pemesanan.',
          'Authentication dan Authorization',
        ]
      },
      {
        id: 'thermocouple-app',
        title: 'Thermocouple App',
        image: './images/portfolio-7.png',
        description: '',
        longDescription: 'Thermocouple App adalah aplikasi yang dirancang untuk mengukur suhu menggunakan sensor thermocouple. Aplikasi ini memberikan hasil pengukuran yang akurat dan real-time.',
        link: 'https://github.com/ilzamafif/thermocouple',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        features: [
          'Pengukuran suhu real-time.',
          'Grafik visualisasi data suhu.',
          'Penyimpanan data pengukuran.',
          'terigrentasi Dengan hardware.',
        ]
      },
      {
        id: 'wyasa-aplikasi',
        title: 'WYASA APLIKASI',
        image: './images/portfolio-2.png',
        description: 'Software untuk pemeliharaan alat rumah sakit dan inventaris',
        longDescription: 'WYASA APLIKASI adalah software yang digunakan untuk pemeliharaan alat rumah sakit dan inventaris. Aplikasi ini membantu dalam manajemen dan pemeliharaan alat-alat medis dengan efisien.',
        link: 'https://wyasaaplikasi.com',
        technologies: ['PHP', 'Laravel', 'My SQL', 'Bootstrap'],
        features: [
          'Manajemen inventaris alat medis.',
          'Pemeliharaan dan perawatan alat.',
          'Laporan dan analisis data pemeliharaan.',
          'Authentication dan Authorization.',
        ]
      },
      {
        id: 'app-fetching-data-with-bluetooth',
        title: 'App Fetching Data With Bluetooth',
        image: './images/portfolio-6.png',
        description: 'Aplikasi untuk mengambil data menggunakan Bluetooth',
        longDescription: 'App Fetching Data With Bluetooth adalah aplikasi yang dirancang untuk mengambil data dari perangkat menggunakan koneksi Bluetooth. Aplikasi ini memungkinkan pengguna untuk mengakses data secara nirkabel.',
        link: 'https://github.com/ilzamafif/bluetooth',
        technologies: ['JavaScript', 'Bluetooth API', 'HTML', 'CSS'],
        features: [
          'Mengambil data dari perangkat Bluetooth.',
          'Menampilkan data secara real-time.',
        ]
      },
      {
        id: 'dhs-kalibrasi',
        title: 'DHS Kalibrasi',
        image: './images/portfolio-8.png',
        description: 'Aplikasi berbasis web Internal Perusahaan untuk Pengkaibrasian Alat Medis',
        longDescription: 'DHS Kalibrasi adalah aplikasi berbasis web yang digunakan untuk kalibrasi alat medis di lingkungan perusahaan. Aplikasi ini membantu dalam memastikan akurasi dan keandalan alat medis melalui proses kalibrasi yang terstruktur.',
        link: 'https://kalibrasi.wyasaaplikasi.com',
        technologies: ['JavaScript', 'PHP', 'Laravel', 'My SQL', 'Bootstrap'],
        features: [
          'Kalibrasi alat medis secara terstruktur.',
          'Penyimpanan data kalibrasi.',
          'perhitungan Ketidakpastian',
          'Laporan hasil kalibrasi.',
          'Authentication dan Authorization',
        ]
      },
    ];

    const project = projects.find(p => p.id === url.id);

    if (project) {
      detailContainer.innerHTML += DetailTemplate(project);
    } else {
      detailContainer.innerHTML = "<error-message>Project not found</error-message>";
    }
  },
};

export default Detail;