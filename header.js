class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="sticky-top bg-light">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/" aria-label="logo of Suvedas"
            ><img src="./img/suvedas-logo.svg" alt="Suvedas logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto gap-lg-5">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="project.html">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="teams.html">Teams</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="career.html">Career</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <a class="btn-all" href="#contact-us">Get in touch</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    `;
}
}
customElements.define("my-header", MyHeader);