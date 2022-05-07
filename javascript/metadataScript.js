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
