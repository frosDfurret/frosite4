const projectTitles = ["aestheticlock", "anonet","WHS Hack Club"];
const projectHovers = ["A clock, but it's a e s t h e t i c ? (i hate that term)", "Unblock the net. Using proxies from TitaniumNetwork","The site I made for the WHS Hack Club."];
const projectURL = ["https://aestheticlock.glitch.me", "https://anonet.frosdfurret.xyz","https://whs-hackclub.frosdfurret.xyz/home"];
const projectHeight = Math.round(window.innerHeight / 6)
const projectWidth = Math.round(window.innerWidth / 1.2)


for (var i = 0; i < projectTitles.length; i++) {
  var newPB = document.createElement("button");
  newPB.classList.add('projectbutton');
  newPB.innerHTML = projectTitles[i];
  newPB.title = projectHovers[i]
  newPB.setAttribute('onclick', "javascript:window.location='" + projectURL[i] + "';")
  newPB.style.backgroundImage = "url('https://api.apiflash.com/v1/urltoimage?access_key=6381b01dc6194d33b030b47cf0a3165e&url=" + projectURL[i] + "&height=" + projectHeight * 3 + "&width=" + projectWidth * 3 + "')"
  newPB.setAttribute('onmouseover', "javascript:blowup('" + i + "')")
  newPB.setAttribute('onmouseleave', "javascript:nowup('" + i + "')")
  newPB.style.backgroundSize = "cover";
  newPB.style.backgroundColor = "black";
  var brak = document.createElement("br")
  document.body.appendChild(newPB)
  document.body.appendChild(brak)
}

projectbutton = document.getElementsByClassName('projectbutton')
for (var i = 0; i < projectbutton.length; i++) {
  projectbutton[i].style.width = window.innerWidth / 1.2 + "px"
  projectbutton[i].style.height = window.innerHeight / 6 + "px"
  projectbutton[i].style.fontSize = window.innerHeight / 13 + "px"
  projectbutton[i].style.marginBottom = window.innerHeight / 35 + "px"
}

function blowup(e) {
  /*
  projectbutton[e].style.width = window.innerWidth / 1.2 + 50 + "px"
  projectbutton[e].style.height = window.innerHeight / 6 + 50 + "px"*/
  projectbutton[e].style.fontSize = window.innerHeight / 13 + 10 + "px"
}

function nowup(e) {
  projectbutton[e].style.fontSize = window.innerHeight / 13 + "px"
}