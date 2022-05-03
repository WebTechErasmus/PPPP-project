/* functions for sidebar */
function openNav() {
  document.getElementById("mySidebar").style.width = "15%";
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
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
}

// Immediately invoked function to set the theme on initial load
(function () {
      if (localStorage.getItem('theme') === 'theme-bauhaus') {
          setTheme('theme-bauhaus');
      } else if (localStorage.getItem('theme') === 'theme-art_nouveau') {
          setTheme('theme-art_nouveau');
      } else if (localStorage.getItem('theme') === 'theme-baroque') {
          setTheme('theme-baroque');
      } else if (localStorage.getItem('theme') === 'theme-brody') {
          setTheme('theme-brody');
      } else if (localStorage.getItem('theme') === 'theme-future') {
          setTheme('theme-future');
      } else {
        setTheme('theme-art_deco');
      }
})();
