var s1 = document.createElement("script");
s1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.body.appendChild(s1);
var s2 = document.createElement("script");
s2.src = "https://cdn.scaledrone.com/scaledrone.min.js";
document.body.appendChild(s2);
  var ip = "";
    $.getJSON("https://ipinfo.io", function(data) {
        ip = data.ip;
    }, "json")
const drone = new Scaledrone("F5e3EkTFDFfshEty");
drone.on("open", function(error) {
  if (error) {
  var message = document.createElement("span");
  message.textContent = error;
  document.getElementById("server").appendChild(message);
  return;
}
var room = drone.subscribe("ServerBackend");
room.on("open", function(error) {
if (error) {
var message = document.createElement("span");
message.textContent = error;
document.getElementById("server").appendChild(message);
return;
}
})
})
function server(text) {
sendMessageToScaleDrone(ip, text);
}
function sendMessageToScaleDrone(name, text) {
drone.publish({
room: "ServerBackend",
message: {
name: ip,
content: text
}
})
}
