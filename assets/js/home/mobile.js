if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  var body = document.getElementsByTagName('body')[0]
  //var linkcontainer = document.getElementById('linkcontainer')
  var hlarrow = document.getElementsByClassName('hlarrow');
  var homelink = document.getElementsByClassName('homelink');
  body.style.padding = "0px";
  body.style.textAlign = "center"
  //linkcontainer.style.textAlign = "center"
  for (var i = 0; i < hlarrow.length; i++) {
  hlarrow[i].style.visibility = "hidden";
  homelink[i].style.textAlign = "center";
  
}
}