window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-mobile").style.padding = ".2rem";
    document.getElementById("navbar-brand-mobile").style.fontSize = "2rem";

  } else {
    document.getElementById("navbar-mobile").style.padding = "1rem";
    document.getElementById("navbar-brand-mobile").style.fontSize = "3rem";

  }
}
