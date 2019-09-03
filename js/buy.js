
var id = ["huisnummer","postcode","banknummer","really"];
let hello = 1;
var counter = 0;
localStorage.clear();
document.getElementById('a').addEventListener("keypress", test);
function test(){
  var key = event.keyCode;

console.log(key);
  switch(key){
    case 13:
    console.log(id[counter]);

document.getElementById(id[counter]).style.property = visibility:visible;


counter+=1;
if(counter>3)
{
  counter=0;
}
    break;


    case 104:
    console.log("lol");
    window.location.href ='home.html';
    break;
  }
}
