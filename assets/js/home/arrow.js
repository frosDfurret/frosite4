var hlarrow = document.getElementsByClassName('hlarrow');
var hlcontent = document.getElementsByClassName('hlcontent');

function rotato(e) {
  hlarrow[e].style.transform = "rotate(-90deg)"
}

function notato(e) {
  hlarrow[e].style.transform = "rotate(0deg)"
}