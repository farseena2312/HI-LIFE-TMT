document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle submenu visibility
    function toggleSubmenu(element) {
      var submenu = element.nextElementSibling;
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    }
  
    // Add click event listeners to navbar items
    var aboutUs = document.querySelector(".nav-link.about-us");
    aboutUs.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu(aboutUs);
    });
  
    var hiLife = document.querySelector(".nav-link.hi-life");
    hiLife.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu(hiLife);
    });
  
    var mediaCenter = document.querySelector(".nav-link.media-center");
    mediaCenter.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu(mediaCenter);
    });
  });
  