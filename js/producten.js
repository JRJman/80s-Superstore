function kopen(name){

    switch(name){
        case 'apple2':
            localStorage.setItem("apple2", '1');
        break;
        case 'commondore':
            localStorage.setItem("commondore", '1');
        break;
        case 'floppy':
            localStorage.setItem("floppy", '1');
            break;
        case 'ibmpc':
            localStorage.setItem("ibmpc", '1');
            break;
        case 'spectrum':
            localStorage.setItem("spectrum", '1');
            break;
        case 'windows':
            localStorage.setItem("windows", '1');
            break;
    }

    window.location.assign("../cart.html");
}

function ToHome(){
    window.location.assign("../home.html");
}

function ToCart(){
    window.location.assign("../cart.html");
}