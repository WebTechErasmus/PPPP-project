class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-custom">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Home</a>
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
              <a class="dropdown-item" href="#">Theme1</a>
              <a class="dropdown-item" href="#">Theme2</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Documentation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disclaimer</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      `;
  }
}
customElements.define("navbar-component", Navbar);
