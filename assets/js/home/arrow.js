var homelink = document.getElementsByClassName('homelink');
var hlarrow = document.getElementsByClassName('hlarrow');
var hlcontent = document.getElementsByClassName('hlcontent');
const links = ["https://www.example.org","https://ninja78900987.newgrounds.com"]
const hovers = ["look ma i did the it","Because the old grounds were too, old."]


// i still don't know how to use eventListeners or whatever and i'm too lazy to find out so take this bullsh

 for (var i = 0; i < homelink.length; i++) {
  homelink[i].setAttribute('onmouseover','javascript:rotato('+i+')')
  homelink[i].setAttribute('onmouseleave','javascript:notato('+i+')')
  homelink[i].setAttribute('onclick','javascript:gotato('+i+')')
  homelink[i].setAttribute('title',hovers[i])
}

function rotato(e) {
  hlarrow[e].style.transform = "rotate(-90deg)"
}

function notato(e) {
  hlarrow[e].style.transform = "rotate(0deg)"
}

function gotato(e) {
  for (var i = 0; i < homelink.length; i++) {
    if (i !== e) {
      hlarrow[i].style.transform = "rotate(270deg)"
      hlarrow[i].classList.add("animate__animated")
      hlcontent[i].classList.add("animate__animated")
      hlarrow[i].classList.add("animate__flipOutY")
      hlcontent[i].classList.add("animate__fadeOutLeft")
      console.log("did")
    } else {
      hlarrow[i].style.transform = "rotate(0deg)"
    }
    setTimeout(function(){window.location = links[e]},750)
  }
}