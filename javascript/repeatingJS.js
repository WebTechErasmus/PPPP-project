/* functions for sidebar */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*Script for rendering different publications and texts for sidebar */
$(document).ready(main);

function main() {
  $.ajax({
    method: "GET",
    url: "publications.json",
    success: function (d) {
      for (var i = 0; i < d.length; i++) {
        var li =
          "<a href=" +
          d[i].url +
          ">" +
          d[i].label +
          "</a><div id=publication" +
          i +
          "></div>";
        $("#mySidebar").append(li);
      }
    },
    error: function () {
      alert("No publication to show");
    },
  });

  $.ajax({
    method: "GET",
    url: "texts.json",
    success: function (d) {
      for (var i = 0; i < d.length; i++) {
        for (var j = 0; j < d.length; j++) {
          var li = "<a href=" + d[j].url + ">" + d[j].label + "</a>";
          $("#publication" + i).append(li);
        }
      }
    },
    error: function () {
      alert("No text to show");
    },
  });
}
