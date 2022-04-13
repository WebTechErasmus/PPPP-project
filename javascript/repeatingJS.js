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
    url: "../publications.json",
    success: function (d) {
      for (var i = 0; i < d.length; i++) {
        var li =
          "<a href=" +
          d[i].url +
          ">" +
          d[i].label +
          "</a><div id=publication" +
          (i+1) +
          "></div>";
        $("#mySidebar").append(li);
      }
    },
    error: function () {
      alert("No publication to show");
    },
  });
  /*
       //render texts for publication 1
      $.ajax({
        method: 'GET',
        url: "../texts1.json",
        success: function(d) {
            for (var j=0; j<d.length; j++){
              var li = "<a href=" + d[j].url  + ">"+d[j].label + "</a>"
            $('#publication1').append(li)
            }
        },
        error: function() {
          alert('No text to show')
        }
      });

      //render texts for publication 2
      $.ajax({
        method: 'GET',
        url: "../texts2.json",
        success: function(d) {
            for (var j=0; j<d.length; j++){
              var li = "<a href=" + d[j].url  + ">"+d[j].label + "</a>"
            $('#publication2').append(li)
            }
        },
        error: function() {
          alert('No text to show')
        }
      });

      //render texts for publication 3
      $.ajax({
        method: 'GET',
        url: "../texts3.json",
        success: function(d) {
            for (var j=0; j<d.length; j++){
              var li = "<a href=" + d[j].url  + ">"+d[j].label + "</a>"
            $('#publication3').append(li)
            }
        },
        error: function() {
          alert('No text to show')
        }
      });
    */
}
