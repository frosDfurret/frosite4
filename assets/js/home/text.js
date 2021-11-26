//code stolen from MYSELF HA

console.log("Skills? No.");
const title = document.getElementById("title");

const titleText = "frosite⁴";
var i = 0;

var doTitle = setInterval(function() {
  i += 1;
  title.innerHTML = titleText.substring(0, i);
  console.log("a")
  if (i > titleText.length) {
    clearInterval(doTitle);
  }
}, 100);