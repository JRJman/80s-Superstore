function GoToItem(item){
    window.location.assign("producten/" + item + ".html");
}

function ToHome(){
    window.location.assign("home.html");
}

function ToCart(){
    window.location.assign("cart.html");
}



var counter = 1;
document.getElementById('a').addEventListener("keypress", test);

function test(){
  var key = event.keyCode;

console.log(key);
  switch(key){


    case 104:
    console.log("lol");
    window.location.href ='home.html';
    break;
    case 110:
    window.scroll(0,1000);
    break;

    case 112:

    window.scroll(0,0);
    break;

    case 99:
    window.location.href ='cart.html';

    break;
  }
}
