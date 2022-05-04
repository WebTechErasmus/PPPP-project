$(".activeButton").bind("click", function () {
  $("#showall").hide();
  $(".openDiv").hide();
  var divId = $(this).attr("divId");
  $("#" + divId).show();
});

$(".back-button").bind("click", function () {
  var divId = $(this).attr("divId");
  $("#" + divId).hide();
  $("#showall").show();
});

$(".sidebarMetadataClosed").bind("click", function () {
  $("#arrow-button").hide();
  $("#metadata").show();
});

$(".closeMetadata").bind("click", function () {
  $("#arrow-button").show();
  $("#metadata").hide();
});
