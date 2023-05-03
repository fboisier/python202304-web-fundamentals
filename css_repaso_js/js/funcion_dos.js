function alternarImg(elemento, opcion){
    if (opcion == 'ENTRA'){
        elemento.src = 'img/chatGPT2.png'
    }else{
        elemento.src = 'img/chatGPT1.png'
    }
}


function alternarImgOpcion2(elemento, imagen){
    elemento.src = imagen;
}

function cambiarTODO(){
    console.log("ESTOY ACA!!!!")
    var imagenes = document.querySelectorAll("img");
    for (var imagen of imagenes){
        imagen.src = 'img/chatGPT3.png';
    }
}

var primerH3 = document.querySelector("h3"); 
primerH3.innerHTML = '<strong>Texto cambiado desde JS al CARGAR</strong>'

var todosH3 = document.querySelectorAll("h3");
for (var item of todosH3){
    item.innerHTML = '<strong>Texto cambiado desde el FOR</strong>'
}


function cambiarVERDE(){
    console.log("VERDE O SI!!!!")
    var imagenes = document.querySelectorAll("img");
    for (var imagen of imagenes){
        imagen.classList.add("verde");
    }

    var botones = document.querySelectorAll(".boton");
    for (var boton of botones){
        boton.classList.add("verde");
    }
}

function restablecerColor(){
    var imagenes = document.querySelectorAll("img");
    for (var imagen of imagenes){
        imagen.classList.remove("verde");
    }

    var botones = document.querySelectorAll(".boton");
    for (var boton of botones){
        boton.classList.remove("verde");
    }
}


function cambiarTemperatura(elemento){
    var opcion = elemento.value;

    var numerosTemperatura = document.querySelectorAll(".numero");
    for (var numero of numerosTemperatura){
        var numeroReal = parseInt(numero.innerText);
        console.log(numeroReal)
        var transformado = 0;
        console.log(opcion, opcion == 'F')
        if (opcion == 'F'){
            transformado = (numeroReal * (9/5) ) + 32;
        }else{
            transformado = (numeroReal - 32 ) * (5/9);
        }
        console.log(transformado)
        numero.innerText = parseInt(transformado)
    }
}