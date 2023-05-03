var arreglo = ["ABRIL", "MAYO"];
console.log(arreglo)
arreglo.push("JUNIO");
console.log(arreglo);
arreglo.unshift("MARZO");
console.log(arreglo);
arreglo.push("LUNES");
arreglo.unshift("DOMINGO");
console.log(arreglo);
arreglo.pop();
arreglo.shift();
console.log(arreglo);

var mesAEliminar = 'ABRIL';

var indicedeAbril = arreglo.indexOf(mesAEliminar);
console.log(indicedeAbril)
if(indicedeAbril > -1){
    arreglo.splice(indicedeAbril, 1);
}
console.log(arreglo);

function quitarDelArreglo(arr, quitar){
    var indice = arr.indexOf(quitar);
    if(indice > -1){
        arr.splice(indice, 1);
    }
    return arr;
}

var arregloMascotas = ["PERRO", "GATO", "CONEJO"];
arregloMascotas = quitarDelArreglo(arregloMascotas, "CONEJO");
console.log(arregloMascotas)