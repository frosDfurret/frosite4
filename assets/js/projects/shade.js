//i use this code THAT I MADE in way too many of my projects

const cover = document.getElementById("cover");
window.onload = function() {
  cover.style.opacity = "0%";
  setTimeout(function() {
    cover.style.visibility = "hidden";
  }, 500);
};

window.onbeforeunload = function() {
  cover.style.visibility = "visible";
  cover.style.opacity = "100%";
};