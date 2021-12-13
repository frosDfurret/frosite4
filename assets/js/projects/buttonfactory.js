const projectTitles = ["aestheticlock", "anonet","WHS Hack Club","Google"];
const projectHovers = ["A clock, but it's a e s t h e t i c ? (i hate that term)", "Unblock the net. Using proxies from TitaniumNetwork","The site I made for the WHS Hack Club.","mine i swear"];
const projectURL = ["https://aestheticlock.glitch.me", "https://anonet.frosdfurret.xyz","https://whs-hackclub.frosdfurret.xyz","https://www.google.com"];
const thumbURL = ["https://aestheticlock.glitch.me", "https://6c6f6e676c697665696e7465726e657466726565646f6d.frosdfurret.repl.co/","https://whs-hackclub.frosdfurret.xyz/home","https://www.google.com"];
const projectHeight = Math.round(window.innerHeight / 6)
const projectWidth = Math.round(window.innerWidth / 1.2)


for (var i = 0; i < projectTitles.length; i++) {
  var newPB = document.createElement("button");
  newPB.classList.add('projectbutton');
  newPB.innerHTML = projectTitles[i];
  newPB.title = projectHovers[i]
  newPB.setAttribute('onclick', "javascript:window.location='" + projectURL[i] + "';")
  newPB.style.backgroundImage = "url('https://gimedascarnshote.herokuapp.com/capture?url=" + thumbURL[i] + "&height=" + projectHeight * 3 + "&width=" + projectWidth * 3 + "&transparent=true')"
  newPB.setAttribute('onmouseover', "javascript:blowup('" + i + "')")
  newPB.setAttribute('onmouseleave', "javascript:nowup('" + i + "')")
  newPB.style.backgroundSize = "cover";
  var brak = document.createElement("br")
  document.body.appendChild(newPB)
  document.body.appendChild(brak)
}

projectbutton = document.getElementsByClassName('projectbutton')
for (var i = 0; i < projectbutton.length; i++) {
  projectbutton[i].style.width = window.innerWidth - window.innerHeight / 15 + "px"
  projectbutton[i].style.height = window.innerHeight / 8 + "px"
  projectbutton[i].style.fontSize = window.innerHeight / 14 + "px"
  projectbutton[i].style.marginBottom = 1 + "px"
}

function blowup(e) {
  /*
  projectbutton[e].style.width = window.innerWidth / 1.2 + 50 + "px"
  projectbutton[e].style.height = window.innerHeight / 6 + 50 + "px"*/
  projectbutton[e].style.fontSize = window.innerHeight / 14 + 10 + "px"
}

function nowup(e) {
  projectbutton[e].style.fontSize = window.innerHeight / 14 + "px"
}