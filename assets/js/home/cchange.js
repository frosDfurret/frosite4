var tbutton = document.getElementById('tbutton')
var baseColor = 255;

function tchange(c) {
  document.getElementsByTagName('body')[0].style.color = c;
  var homelink = document.getElementsByClassName('homelink');
  for (var i = 0; i < homelink.length; i++) {
    homelink[i].style.color = c;
  }
}

function cchange() {
  var red = baseColor;
  var green = baseColor;
  var blue = baseColor;
  var redRemove = Math.floor(Math.random() * 20);
  var greenRemove = Math.floor(Math.random() * 20);
  var blueRemove = Math.floor(Math.random() * 20);
  if (baseColor == 255) {
    red = red - redRemove
    green = green - greenRemove
    blue = blue - blueRemove
  } else {
    red = red + redRemove
    green = green + greenRemove
    blue = blue + blueRemove
  }

  document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

function bchange() {
  if (baseColor == 255) {
    baseColor = 0
    tchange('white');
    tbutton.innerHTML = '🌙'
  } else {
    baseColor = 255
    tchange('black');
    tbutton.innerHTML = '☀️'
  }
  cchange()
}

cchange()