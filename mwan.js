addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

$(function() {
    // alert("Medical Women Association of Nigeria")
$('#slideshow').backstretch([
    "images/me.jpg"
  , "images/you.jpg"
  , "images/us.jpg"
  // , "images/desktop.jpg"
  // , "images/doctor.png"
], {duration: 3000, fade: 750});
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

