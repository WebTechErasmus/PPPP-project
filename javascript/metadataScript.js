//script for activating the different divs for the metadata
$(".activeButton").bind("click", function () {
  $("#showall").hide();
  $(".openDiv").hide();
  $("#back-button").show();
  var divId = $(this).attr("divId");
  $("#back-button").attr("divId", divId);
  $("#" + divId).show();
  document.getElementById("metadataTitle").innerHTML = divId;
});

$(".back-button").bind("click", function () {
  var divId = $(this).attr("divId");
  $("#" + divId).hide();
  $("#back-button").hide();
  $("#showall").show();
  document.getElementById("metadataTitle").innerHTML =
    "Metadata &amp; additional services";
});

//script for closing and opening the metadataview
$(".sidebarMetadataClosed").bind("click", function () {
  $("#arrow-button").hide();
  $("#metadata").show();
});

$(".closeMetadata").bind("click", function () {
  $("#arrow-button").show();
  $("#metadata").hide();
});

//regex for tag strings
String.prototype.inputs = function (strings) {
  var element = this;
  for (var i in strings) {
    element = element.replace(new RegExp("\\$" + i, "g"), strings[i]);
  }
  return element;
};

//function used for setting the id for all the elements
function addElementIds() {
  addElementId("p.author", "author");
  addElementId("h1.title", "title");
  addElementId("p.publication-date", "date");
  addElementId("p.content", "content");
  addElementId("p.captions", "caption");
  addElementId("p.keyword", "keyword");
}

//setting the id for each element in a given class
function addElementId(what, name) {
  var id = 0;
  var elements = $(what);
  for (var i = 0; i < elements.length; i++) {
    elements[i].id = name + id;
    id += 1;
  }
}

//setting the content for each of the metadata features
function metaDataContent() {
  $("#info-content").empty();
  $("#caption-content").empty();
  $("#keyword-content").empty();
  addMetadata("#file .title", "#info-content", "title:");
  addMetadata("#file .author", "#info-content", "author:");
  addMetadata("#file .publication-date", "#info-content", "publication date:");
  addMetadata("#file .content", "#info-content", "summary:");
  addMetadata("#file .captions", "#caption-content");
  addMetadata("#file .keyword", "#keyword-content", "keywords");
}

//creating a new element for the metadataview
//if type is equal to keywords we add a checkbox element with the onchange method highlighKeywords
//else if type is not keyword, but type is defined we add a hyperlink element with the onclick function scrollToElement for the info content
//if type is not defined we add a list of the different captions in the caption div
function addMetadata(what, where, type = undefined) {
  var el = "";
  if (type == "keywords") {
    el = `<input type="checkbox" class='links'  onchange="highlightKeywords( this, '$content')">$content </input><br/>`;
  } else if (type) {
    el = `<h5 class='links' >$type</h5><a class='links' href='#' onclick="scrollToElement('$place')">$content </a>`;
  } else {
    el = `<li><a class='links' href='#' onclick="scrollToElement('$place')">$content </a></li>`;
  }
  var elements = $(what);
  for (var i = 0; i < elements.length; i++) {
    $(where).append(
      el.inputs({
        place: "#" + elements[i].id,
        content: elements[i].innerHTML,
        type: type,
      })
    );
  }
}

//script for scrolling to a given element given the id of that element
function scrollToElement(id) {
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 500,
    },
    300
  );
  $(id).css("backgroundColor", "#ffdf65");
  setTimeout(function () {
    $(id).css("backgroundColor", "unset");
  }, 2000);
}

//script for highlighting keywords given in the metadataview
function highlightKeywords(id, el) {
  if (id.checked) {
    $("." + el).css("background", "#ffdf65");
  } else {
    $("." + el).css("background", "none");
  }
}
