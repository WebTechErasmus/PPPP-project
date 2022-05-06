class Metadata extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="sidebarMetadata" id="metadata">
    <div class="closeMetadata" id="closeMetadata">
    <img width="20" height="20" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" title="" >
    </div>
      <h4 id="metadataTitle">Metadata &amp; additional services</h4>
      <div class="button-group" id="showall">
        <!--javascript:void(0) if the redirection path is undefined the browser stays on the same page -->
        <button class="activeButton" href="javascript:void(0);" divId="Info">
          Info
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="Caption">
          Captions
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="Quotes">
          Quotes
        </button>
      </div>
      <div class="info" class="open_Div" id="Info">
        <div id="info-content"> 
         </div>
        <button class="back-button" divId="Info">Back</button>
      </div>
      <div class="caption" class="open_Div" id="Caption">
      <div id="caption-content"> 
      </div>
        <button class="back-button" divId="Caption">Back</button>
      </div>
      <div class="quotes" class="open_Div" id="Quotes">
      <button class="back-button" divId="Quotes">Back</button>
    </div>
    </div>
  
        `;
  }
}
customElements.define("metadata-component", Metadata);
