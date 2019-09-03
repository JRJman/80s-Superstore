// document.getElementById('response_vield').addEventListener("keypress", );
// function myFunction(event) {
//   var x = event.keyCode;
//   if (x == 27) {  // 27 is the ESC key
//     alert ("You pressed the Escape key!");
//   }
// }

let hello = 1;

localStorage.clear();
document.getElementById('a').addEventListener("keypress", test);
function test(){
  var key = event.keyCode;
  if(key == 13){
console.log(hello);
};
}
