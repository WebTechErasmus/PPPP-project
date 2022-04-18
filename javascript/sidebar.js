class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
    </div>

    <div id="main">
        <button class="openbtn" onclick="openNav()">☰ </button>  
    </div>
        
        `;
  }
}
customElements.define("sidebar-component", Sidebar);
