cart = document.getElementById('cart');

var apple2 = localStorage.getItem("apple2");
var commondore = localStorage.getItem("commondore");
var floppy = localStorage.getItem("floppy");
var ibmpc = localStorage.getItem("ibmpc");
var spectrum = localStorage.getItem("spectrum");
var windows = localStorage.getItem("windows");

let tekst = "";



if(apple2 !== null){
    tekst += "<div class='product'><h3>Apple 2</h3><img src='pictures/apple2.jpg'></div>";
}
if(commondore !== null){
    tekst += "<div class='product'><h3>Commodore 64</h3><img src='pictures/commodore.jpg'></div>";
}
if(floppy !== null){
    tekst += "<div class='product'><h3>Floppy Disk</h3><img src='pictures/floppy.jpg'></div>";
}
if(ibmpc !== null){
    tekst += "<div class='product'><h3>IBM PC</h3><img src='pictures/ibmpc.jpg'></div>";
}
if(spectrum !== null){
    tekst += "<div class='product'><h3>ZX Spectrum</h3><img src='pictures/spectrum.jpg'></div>";
}
if(windows !== null){
    tekst += "<div class='product'><h3>Windows 3.1</h3><img src='pictures/windows.jpg'></div>";
}

if(tekst === ""){
    tekst = "<p>Je hebt nog geen producten besteld</p>";
}

cart.innerHTML = tekst;

function ToHome(){
    window.location.assign("home.html");
}

function ToCart(){
    window.location.assign("cart.html");
}