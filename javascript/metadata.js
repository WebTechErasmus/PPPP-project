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
    <div style="margin-bottom:5%">
      <h4 style="float:left" id="metadataTitle">Metadata &amp; additional services</h4>
      <button class="back-button" id="back-button" divId="Info">Back</button>
  
      </div>
      <div class="button-group" id="showall">
        <!--javascript:void(0) if the redirection path is undefined the browser stays on the same page -->
        <button class="activeButton" href="javascript:void(0);" divId="Info">
          Info
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="Caption">
          Captions
        </button>
        <button class="activeButton" href="javascript:void(0);" divId="Keyword">
          Keywords
        </button>
      </div>
      <div class="info" class="open_Div" id="Info">
        <div id="info-content"> 
        </div>
      </div>
      <div class="caption" class="open_Div" id="Caption">
      <div id="caption-content"> 
      </div>

      </div>
      <div class="keyword" class="open_Div" id="Keyword">
      <div id="keyword-content"> 
      </div>

    </div>
    </div>
  
        `;
  }
}
customElements.define("metadata-component", Metadata);
