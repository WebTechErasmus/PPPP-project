class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-custom">
    <div class="container-fluid">
      <a href="../index.html" class="navbar-brand">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCustom"
      >
        <i class="fa fa-bars fa-lg py-1 text-white"></i>
      </button>
      <div
        class="navbar-collapse collapse justify-content-end"
        id="navbarCustom"
      >
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Theme
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" title="theme1" href="#" onclick="setTheme('theme-bauhaus')">Bauhaus</a>
            <a class="dropdown-item" title="theme1" href="#" onclick="setTheme('theme-art_nouveau')">Art Nouveau</a>
            <a class="dropdown-item" title="theme2" href="#" onclick="setTheme('theme-art_deco')">Art Deco</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../components/about.html"> About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../components/documentation.html">Documentation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../components/disclaimerpage.html">Disclaimer</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      `;
  }
}
customElements.define("navbar-component", Navbar);
