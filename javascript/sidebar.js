class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a href="#">Publication 1</a>
                <div class="sidebarText">
                    <a href="#">Text 1</a>
                    <a href="#">Text 2</a>
                    <a href="#">Text 3</a>
                </div>
            <a href="#">Publication 2</a>
                <div class="sidebarText">
                    <a href="#">Text 1</a>
                    <a href="#">Text 2</a>
                    <a href="#">Text 3</a>
                </div>
            <a href="#">Publication 3</a>
                <div class="sidebarText">
                    <a href="#">Text 1</a>
                    <a href="#">Text 2</a>
                    <a href="#">Text 3</a>
                </div>
        </div>

        <div id="main">
            <button class="openbtn" onclick="openNav()">☰ </button>  
        </div>
        
        `;
  }
}
customElements.define("sidebar-component", Sidebar);
