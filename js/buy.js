
var id = ["huisnummer",""];
let hello = 1;

localStorage.clear();
document.getElementById('a').addEventListener("keypress", test);
function test(){
  var key = event.keyCode;

console.log(key);
  switch(key){
    case 13:

    break;

    case 104:
    console.log("lol");
    window.location.href ='home.html';
    break;
  }
}
