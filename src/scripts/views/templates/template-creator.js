const HomeTemplate = () => `
  <div class="content">
    <img src="./images/profile.png" alt="Ilzam Afif" class="profile" />
    <h1 class="name">Ilzam Afif</h1>
    <p class="description">I'm Fullstack Web Developer</p>
    <a href="#" class="btn">Blog</a>
    <a href="#" class="btn">About</a>
  </div>`;

const AboutTemplate = () => `
   <section class="about">
      <div class="row">
        <h1 class="about">hii I'm Ilzam Afif</h1>
        <p>LLorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, magnam doloremque, incidunt rem, debitis perspiciatis aliquid voluptatem ducimus repellat ut dignissimos labore similique. Amet odit libero iusto illo ratione animi, nam molestias. Soluta architecto iste ullam adipisci atque id a ab ea harum facilis! Hic officiis veniam saepe repudiandae nemo.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <img src="./images/profile.png" alt="">
      
    </section>

    <section class="portfolio">
      <h1 class="heading">My <span>Recent Work</span></h1>

      <div class="box-container">
        <div class="box">
          <a href="#">
            <img src="./images/portfolio-1.png" class="image" />
          </a>
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="#">
            <img src="./images/portfolio-2.png" class="image" />
          </a>
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="#">
            <img src="./images/portfolio-3.png" class="image" />
          </a>
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <a href="#">
            <img src="./images/portfolio-4.png" class="image" />
          </a>
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-5.png" class="image" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
        <div class="box">
          <img src="./images/portfolio-6.png" class="image" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cetificate">
      <h1 class="heading">Our <span>Cetificate</span></h1>

      <div class="box-container">
        <div class="box">
          <img src="./images/certificate-1.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-2.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-1.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-2.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-1.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
        <div class="box">
          <img src="./images/certificate-2.png" alt="" />
          <div class="content">
            <h3>Nama</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, saepe!</p>
            <a href="#" class="btn">View</a>
          </div>
        </div>
      </div>
    </section>`;

const ContactTemplate = () => `
 <h1 class="heading">Contact</h1>
  <div class="row">
    <form action="" method="POST">
      <div class="inputBox">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="name" placeholder="Email" />
      </div>

      <textarea name="message" id="message" cols="30" rows="10"> </textarea>

      <button type="submit" class="btn">Send</button>
    </form>
  </div>`;

export { HomeTemplate, AboutTemplate, ContactTemplate };
