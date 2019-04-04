// web/http.js
function sendRequest(url){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, true);
  xhttp.send();
}
