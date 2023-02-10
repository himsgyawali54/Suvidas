class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <footer>
        <div class="container">
          <div class="row g-4 g-md-5">
            <div class="col-12 col-lg-5">
              <div class="card">
                <img src="./img/suvedas-logo.svg" alt="Suvedas Logo" />
              </div>
              <p>
                Our boundless imagination helps us to help business solve their
                problem with technology in an innovative way.
              </p>
              <ul class="social-links">
                <li>
                  <a href="/"><i class="bi-facebook"></i></a>
                </li>
                <li>
                  <a href="/"><i class="bi-facebook"></i></a>
                </li>
                <li>
                  <a href="/"><i class="bi-facebook"></i></a>
                </li>
                <li>
                  <a href="/"><i class="bi-facebook"></i></a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-2">
              <h3>Quick Links</h3>
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="teams.html">Teams</a></li>
                <li><a href="blogs.html">Blogs</a></li>
                <li><a href="career.html">Career</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
              </ol>
            </div>
            <div class="col-12 col-md-6 col-lg-2">
              <h3>Blogs</h3>
              <ol>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="single-post.html">Single Post</a></li>
              </ol>
            </div>
          </div>
          <p class="text-center">Copyright @ 2023 - Suvedas</p>
        </div>
      </footer>
      `;
    }
  }
  customElements.define("my-footer", MyFooter);