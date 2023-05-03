function saludar(){
    alert('HOLA');
    console.log("ESTAMOS EJECUTANDO DENTRO DE SALUDA!!!!")
}

function probando(elemento){
    console.log(elemento);
    elemento.innerHTML = "<strong>FRANCISCO</strong>";

}

function ocultar(elem){
    elem.remove();
}

function cambiar(elem, texto){
    elem.innerHTML = texto;
    if (texto == 'CHAO'){
        elem.style.backgroundColor = "lime";   
    } else {
        elem.style.backgroundColor = "red";   
    }
}

function cambiarImg(elemento, nombreFoto){
    elemento.src = nombreFoto;
}