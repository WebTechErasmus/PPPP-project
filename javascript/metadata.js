class Metadata extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="sidebarMetadata" >
      <h4>Metadata &amp; additional services</h4>
      <div class="button-group" id="showall">
        <!--javascript:void(0) if the redirection path is undefined the browser stays on the same page -->
        <button class="activeButton" href="javascript:void(0);" divId="div1">
          Info
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="div2">
          Quotes
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="div3">
          Additional
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="div4">
          Additional
        </button>
      </div>
      <div class="info" class="open_Div" id="div1">
        <h3>Info</h3>
        <ul>
          <li>Author:</li>
          <li>Title:</li>
          <li>Content:</li>
        </ul>
        <button class="back-button" divId="div1">Back</button>
      </div>
      <div class="quotes" class="open_Div" id="div2">
        <h3>Quotes</h3>
        <button class="back-button" divId="div2">Back</button>
      </div>
    </div>
  
        `;
  }
}
customElements.define("metadata-component", Metadata);
