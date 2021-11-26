//this is to make the sizing of stuff relative to the page height
//cause, yeah

document.getElementsByTagName('body')[0].style.padding = window.innerHeight / 10 + "px"
var header1 = document.getElementsByTagName('h1');
var homelink = document.getElementsByClassName('homelink');
var hlarrow = document.getElementsByClassName('hlarrow');
var hlcontent = document.getElementsByClassName('hlcontent');
var tbutton = document.getElementById('tbutton')

for (var i = 0; i < header1.length; i++) {
  header1[i].style.fontSize = window.innerHeight / 7 + "px";
}

for (var i = 0; i < homelink.length; i++) {
  homelink[i].style.fontSize = window.innerHeight / 16 + "px";
  hlarrow[i].style.fontSize = window.innerHeight / 18 + "px";
  hlcontent[i].style.paddingLeft = window.innerHeight / 17 + "px";
}

tbutton.style.right = window.innerHeight / 17 + "px";
tbutton.style.bottom = window.innerHeight / 17 + "px";
tbutton.style.fontSize = window.innerHeight / 18 + "px";