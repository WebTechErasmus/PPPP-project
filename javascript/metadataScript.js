//script for activating the different metadata divs
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
String.prototype.tpl = function (o) {
  var r = this;
  for (var i in o) {
    r = r.replace(new RegExp("\\$" + i, "g"), o[i]);
  }
  return r;
};

function addElementIds() {
  addElementId("p.author", "author");
  addElementId("p.title", "title");
  addElementId("p.publication-date", "date");
  addElementId("p.content", "content");
  addElementId("p.captions", "caption");
  addElementId("p.keyword", "keyword");
}

function addElementId(what, name) {
  var id = "0";
  var elements = $(what);
  for (var i = 0; i < elements.length; i++) {
    elements[i].id = name + id++;
  }
}

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

function addMetadata(what, where, type = undefined) {
  var list = "";
  if (type == "keywords") {
    list = `<input type="checkbox" class='links' onchange="highlightKeywords('$place', this)">$content </input><br/>`;
  } else if (type) {
    list = `<h5 class='links' >$type</h5><a class='links' href='#' onclick="scrollToElement('$place')">$content </a>`;
  } else {
    list = `<li><a class='links' href='#' onclick="scrollToElement('$place')">$content </a></li>`;
  }
  var elements = $(what);
  for (var i = 0; i < elements.length; i++) {
    $(where).append(
      list.tpl({
        place: "#" + elements[i].id,
        content: elements[i].innerHTML,
        type: type,
      })
    );
  }
}

function scrollToElement(id) {
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 60,
    },
    300
  );
  $(id).css("backgroundColor", "#ffdf65");
  setTimeout(function () {
    $(id).css("backgroundColor", "unset");
  }, 2000);
}

function highlightKeywords(id, el) {
  el.checked = !el.checked;
  console.log(document.getElementById(id));
}
