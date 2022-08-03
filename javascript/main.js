// Select Navigation Bar
var navbar = document.getElementById("nav");

// Make it so when the user scrolls the scrolled class gets added to the navigation class list, 
// causing it to go from transparent to solid colour.
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 65 || document.documentElement.scrollTop >= 65) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };