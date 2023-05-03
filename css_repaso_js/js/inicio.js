function cambiarTexto(elemento){
    console.dir(elemento);
    elemento.innerHTML = '<strong>Texto Cambiado</strong>'
}

function cambioImg(elemento){
    console.log("MOUSE ENTRANDO A LA IMAGEN");
    elemento.src = 'img/chatGPT2.png'
}

function cambioImg2(elemento){
    console.log("MOUSE SALIENDO DE LA IMAGEN");
    elemento.src = 'img/chatGPT1.png'
}

