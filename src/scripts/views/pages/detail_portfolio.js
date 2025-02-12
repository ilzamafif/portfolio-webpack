import UrlParser from "../../routes/url-parser";
import { DetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    console.log("Rendering Detail Page");
    return `
          <section class="section-detail">
            
          </section>
    `;
  },

  async afterRender() {
    console.log("After Render Detail Page");
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log("Parsed URL:", url);
    const detailContainer = document.querySelector(".section-detail");
    detailContainer.innerHTML = "";
    
    const projects = [
      {
        id: 'open-music',
        title: 'OPEN MUSIC',
        image: './images/portfolio-9.png',
        description: 'REST API untuk pengelolaan MUSIC',
        longDescription: 'Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis dengan menggunakan bahasa pemrograman Python. Tujuan utama dari program ini adalah untuk membantu pengguna, terutama pelajar, dalam menyelesaikan soal-soal Aritmatika dengan lebih cepat dan mudah',
        link: 'https://github.com/ilzamafif/open-music',
        technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'SweetAlert2'],
        features: [
          'Menghitung suku tertentu dari barisan aritmatika dengan menggunakan rumus suku ke-n.',
          'Menentukan suku pertama atau beda jika hanya dua suku diketahui dalam barisan aritmatika.',
          'Menghitung jumlah n suku pertama dari deret aritmatika dengan langkah perhitungan yang jelas.'
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
          'Pembayaran melalui berbagai metode.',
          'Notifikasi email untuk konfirmasi pemesanan.',
        ]
      },
      {
        id: 'thermocouple-app',
        title: 'Thermocouple App',
        image: './images/portfolio-7.png',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!',
        longDescription: 'Thermocouple App adalah aplikasi yang dirancang untuk mengukur suhu menggunakan sensor thermocouple. Aplikasi ini memberikan hasil pengukuran yang akurat dan real-time.',
        link: 'https://github.com/ilzamafif/thermocouple-app',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        features: [
          'Pengukuran suhu real-time.',
          'Grafik visualisasi data suhu.',
          'Penyimpanan data pengukuran.',
        ]
      },
      {
        id: 'wyasa-aplikasi',
        title: 'WYASA APLIKASI',
        image: './images/portfolio-2.png',
        description: 'Software untuk pemeliharaan alat rumah sakit dan inventaris',
        longDescription: 'WYASA APLIKASI adalah software yang digunakan untuk pemeliharaan alat rumah sakit dan inventaris. Aplikasi ini membantu dalam manajemen dan pemeliharaan alat-alat medis dengan efisien.',
        link: 'https://github.com/ilzamafif/wyasa-aplikasi',
        technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
        features: [
          'Manajemen inventaris alat medis.',
          'Pemeliharaan dan perawatan alat.',
          'Laporan dan analisis data pemeliharaan.',
        ]
      },
      {
        id: 'app-fetching-data-with-bluetooth',
        title: 'App Fetching Data With Bluetooth',
        image: './images/portfolio-6.png',
        description: 'Aplikasi untuk mengambil data menggunakan Bluetooth',
        longDescription: 'App Fetching Data With Bluetooth adalah aplikasi yang dirancang untuk mengambil data dari perangkat menggunakan koneksi Bluetooth. Aplikasi ini memungkinkan pengguna untuk mengakses dan mengelola data secara nirkabel.',
        link: 'https://github.com/ilzamafif/app-fetching-data-with-bluetooth',
        technologies: ['JavaScript', 'Bluetooth API', 'HTML', 'CSS'],
        features: [
          'Mengambil data dari perangkat Bluetooth.',
          'Menampilkan data secara real-time.',
          'Menyimpan data yang diambil.',
        ]
      },
      {
        id: 'dhs-kalibrasi',
        title: 'DHS Kalibrasi',
        image: './images/portfolio-8.png',
        description: 'Aplikasi berbasis web Internal Perusahaan untuk Pengkaibrasian Alat Medis',
        longDescription: 'DHS Kalibrasi adalah aplikasi berbasis web yang digunakan untuk kalibrasi alat medis di lingkungan perusahaan. Aplikasi ini membantu dalam memastikan akurasi dan keandalan alat medis melalui proses kalibrasi yang terstruktur.',
        link: 'https://github.com/ilzamafif/dhs-kalibrasi',
        technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
        features: [
          'Kalibrasi alat medis secara terstruktur.',
          'Penyimpanan data kalibrasi.',
          'Laporan hasil kalibrasi.',
        ]
      },
    ];

    const project = projects.find(p => p.id === url.id);
    console.log("Found Project:", project);

    if (project) {
      detailContainer.innerHTML += DetailTemplate(project);
      console.log("Detail Template Rendered");
    } else {
      detailContainer.innerHTML = "<error-message>Project not found</error-message>";
      console.log("Project not found");
    }
  },
};

export default Detail;