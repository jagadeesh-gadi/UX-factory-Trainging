function clickevent() {
  alert("this is onclick event method");
}

function mouseoverevent() {
  document.getElementById("img").src="th.jpeg";
}

function mouseoutevent() {
  document.getElementById("img").src = "logo.jpeg";
}

function mousedownevent(){
  document.getElementById("para").innerHTML="Mouse Pressed!!!!!!";
}

function mouseupevent(){
  document.getElementById("para").innerHTML="Mouse Released!!!!";
}