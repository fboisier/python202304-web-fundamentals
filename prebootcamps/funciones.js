function mostrarArreglo(arreglo, aumentar, texto1, texto2="1"){
    for (var indice = 0; indice < arreglo.length; indice++){
        if (aumentar){
            arreglo[indice] = arreglo[indice] + texto2;
        }
        console.log(texto1, arreglo[indice]);
    }
}

function saludar(nombre){
    console.log("HOLA", nombre);
}

function cambiarTexto(elemento, texto){
    elemento.innerHTML = texto;
    elemento.style.backgroundColor = 'blue';
    elemento.style.color = 'white';
    console.log(elemento);
    console.dir(elemento.style);
}