const HomeTemplate = () => `
  <div class="content">
    <img src="./images/profile.png" alt="Ilzam Afif" class="profile" />
    <h1 class="name">Ilzam Afif</h1>
    <p class="description">I'm Software Developer</p>
    <a href="/#/about" class="btn">About</a>
  </div>`;

const AboutTemplate = () => `
   <section class="about">
      <div class="row">
        <h1 class="about">hii I'm Ilzam Afif</h1>
        <p>Saya Adalah Seoarng Software Developer dengan 2 Tahun 
        pengalaman di bidang professional dalam pengembangan
        perangkat lunak, dengan keahlian dalam membangun website.
        Mahir dalam bahasa pemrograman seperti JavaScript, dan PHP,
        serta memiliki pengalaman dalam penggunaan kerangka kerja
        seperti Laravel dan Node Js. Memiliki minat yang tinggi dalam
        mengikuti perkembangan teknologi..</p>
      </div>
      <img src="./images/profile.png" alt="">
      
    </section>
    <section class="cetificate">
      <h1 class="heading">My <span>Recent Work</span></h1>

      <div class="box-container">
        <div class="box">
          <img src="./images/portfolio-8.png" alt="" />
          <div class="content">
            <h3>DHS KALIBRASI</h3>
            <p>Aplikasi berbasis web Internal Perusahaan untuk Pengkaibrasian Alat Medis</p>
            <a href="#/detail/dhs-kalibrasi" class="btn">View</a>
        </div>
        </div>
            <div class="box">
            <img src="./images/portfolio-2.png" alt="" />
            <div class="content">
            <h3>WYASA APLIKASI</h3>
            <p>Software untuk pemeliharaan alat rumah sakit dan inventaris</p>
            <a href="#/detail/wyasa-aplikasi" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-9.png" alt="" />
          <div class="content">
            <h3>OPEN MUSIC</h3>
            <p>Mengembangkan RESTFUL api untuk aplikasi OpenMusic dari sisi backend.</p>
            <a href="#/detail/open-music" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-7.png" alt="" />
          <div class="content">
            <h3>Thermocouple App</h3>
            <p>Thermocouple App adalah aplikasi yang dirancang untuk menampilkan suhu menggunakan sensor thermocouple</p>
            <a href="#/detail/thermocouple-app" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-6.png" alt="" />
          <div class="content">
            <h3>App Fecthing Data With blutooth</h3>
            <p>Aplikasi untuk mengambil data menggunakan Bluetooth</p>
            <a href="#/detail/nomads" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-4.png" alt="" />
          <div class="content">
            <h3>NOMADS</h3>
            <p>Aplikasi Pemesanan Tiket Dengan Laravel</p>
            <a href="#/detail/nomads" class="btn">View</a>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio">
      <h1 class="heading">Our <span>Certificate</span></h1>
      <div class="box-container">
        <div class="box">
          <a href="https://github.com/ilzamafif">
           <img src="./images/certificate-6.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Build With Angga</h3>
            <p>Full Sstack Web Developer</p>
          </div>
        </div>
         <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/certificate-4.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Dicoding</h3>
            <p>Belajar Prinsip Pemrograman SOLID</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/certificate-1.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Dicoding</h3>
            <p>Menjadi Frontend Developer Expert</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/certificate-2.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Dicoding</h3>
            <p>Membangun Arsitketur Cloud Di AWS</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/certificate-3.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Dicoding</h3>
            <p>Memulai Pemrograman Dengan Python</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
           <img src="./images/certificate-5.jpg" class="image" />
          </a>
          <div class="content">
            <h3>Build With Angga</h3>
            <p>Full Stack javascript Developer</p>
          </div>
        </div>
      </div>
    </section>

   `;

const ContactTemplate = () => `
 <h1 class="heading">Contact</h1>
  <div class="row">
    <form action="mailto:ilzamafif27@gmail.com" method="POST">
      <div class="inputBox">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="name" placeholder="Email" />
      </div>

      <textarea name="message" id="message" cols="30" rows="10"> </textarea>

      <button type="submit" class="btn">Send</button>
    </form>
  </div>`;

  const DetailTemplate = (project) => `
  <section class="detail">
      <div class="box-container">
        <div class="box">
            <img src="${project.image}" alt="${project.title}" />
            <div class="content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View</a>
            </div>
        </div>
        <div class="content">
           <div class="desc-box">
            <h3>${project.title}</h3>
            <p>${project.longDescription}</p>
            </div>
            <div class="tech-container">
           <h2>🚀 Teknologi yang digunakan</h2>
        <div class="tech-list">
            ${project.technologies.map(tech => `<span class="tech-item"><i></i> ${tech}</span>`).join('')}
        </div>
          <div class="button-container">
            <a href="${project.link}" class="button github">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
        </div>
      </div>
      <div class="feature-box">
              <h2><span class="icon">⭐</span> Fitur</h2>
              <ul>
                  ${project.features.map(feature => `<li>🔵 ${feature}</li>`).join('')}
              </ul>
          </div>
      </div>
      
    </section>
  `;

export { HomeTemplate, AboutTemplate, ContactTemplate, DetailTemplate };
