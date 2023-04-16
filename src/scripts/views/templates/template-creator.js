const HomeTemplate = () => `
  <div class="content">
    <img src="./images/profile.png" alt="Ilzam Afif" class="profile" />
    <h1 class="name">Ilzam Afif</h1>
    <p class="description">I'm Fullstack Web Developer</p>
    <a href="/#/about" class="btn">About</a>
  </div>`;

const AboutTemplate = () => `
   <section class="about">
      <div class="row">
        <h1 class="about">hii I'm Ilzam Afif</h1>
        <p>Seorang full-Strack Web Developer dalam pengembangan
        perangkat lunak, dengan keahlian dalam membangun website.
        Mahir dalam bahasa pemrograman seperti JavaScript, dan PHP,
        serta memiliki pengalaman dalam penggunaan kerangka kerja
        seperti Laravel dan Node Js. Memiliki minat yang tinggi dalam
        mengikuti perkembangan teknologi..</p>
      </div>
      <img src="./images/profile.png" alt="">
      
    </section>

    <section class="portfolio">
      <h1 class="heading">My <span>Recent Work</span></h1>

      <div class="box-container">
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/portfolio-1.png" class="image" />
          </a>
          <div class="content">
            <h3>Moonton</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/portfolio-2.png" class="image" />
          </a>
          <div class="content">
            <h3>Nomads</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/portfolio-3.png" class="image" />
          </a>
          <div class="content">
            <h3>Staycation</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
            <img src="./images/portfolio-4.png" class="image" />
          </a>
          <div class="content">
            <h3>Payna</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
           <img src="./images/portfolio-5.png" class="image" />
          </a>
          <div class="content">
            <h3>Stream</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="https://github.com/ilzamafif">
           <img src="./images/portfolio-6.png" class="image" />
          </a>
          <div class="content">
            <h3>M</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cetificate">
      <h1 class="heading">Our <span>Cetificate</span></h1>

      <div class="box-container">
        <div class="box">
          <img src="./images/certificate-1.jpg" alt="" />
          <div class="content">
            <h3></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-2.jpg" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-3.jpg" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-4.jpg" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-5.jpg" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-6.jpg" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="https://github.com/ilzamafif" class="btn">View</a>
          </div>
        </div>
      </div>
    </section>`;

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

export { HomeTemplate, AboutTemplate, ContactTemplate };
