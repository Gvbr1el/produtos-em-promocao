var button = document.getElementById("button");
var min = 4;
var seg = 00;

function promocao(){ 
    var titulo = document.getElementsByTagName("h1")[0];
    var contador = document.getElementsByTagName("p")[0];
    contador.innerText = `${min}:${seg}`;

    if(seg === 0){
        min--;
        seg = 60
    }
    else{
        seg--;
    }

    if(min === 0 && seg === 0){
        titulo.innerText = "A promoção chegou ao fim!";
        min = 0;
        seg = 0;
        contador.innerText = `${min}:${seg}`
        stopInterval();
    }
    
}

var inter;

function interval(){
    inter = setInterval(promocao, 1000);
    button.style.display = "none";
}

function stopInterval(){
    clearInterval(inter);
}
