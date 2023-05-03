// print
console.log("HOLA");
// if else elif 
var edad = 18;
if (edad >= 18){
    console.log("Eres mayor de edad.")
}else{
    console.log("Eres menor de edad.")
}

// for while
for(var contador = 0; contador < 10; contador++){
    console.log("HOLA");
    console.log(contador);
}

// for while
for(var contador = 9; contador >= 0; contador--){
    console.log("HOLA");
    console.log(contador);
}

var perro = "PERRO";
var gato = "GATO";
var conejo = "CONEJO";
var tigre = "TIGRE";

console.log("El animal que estmaos viendo ahora es el ", perro);
console.log("El animal que estmaos viendo ahora es el ", gato);
console.log("El animal que estmaos viendo ahora es el ", conejo);
console.log("El animal que estmaos viendo ahora es el ", tigre);

perro = perro + "1";
gato = gato + "1";
conejo = conejo + "1";
tigre = tigre + "1";

console.log("El animal que estmaos viendo ahora es el ", perro);
console.log("El animal que estmaos viendo ahora es el ", gato);
console.log("El animal que estmaos viendo ahora es el ", conejo);
console.log("El animal que estmaos viendo ahora es el ", tigre);

var animales = ["PERRO", "GATO", "CONEJO", "TIGRE"]; // length = 4
        //        0         1        2        3

console.log("El animal que estmaos viendo ahora es el ", animales[0]);
console.log("El animal que estmaos viendo ahora es el ", animales[1]);
console.log("El animal que estmaos viendo ahora es el ", animales[2]);
console.log("El animal que estmaos viendo ahora es el ", animales[3]);

animales[0] = animales[0] + "1";
animales[1] = animales[1] + "1";
animales[2] = animales[2] + "1";
animales[3] = animales[3] + "1";

console.log("El animal que estmaos viendo ahora es el ", animales[0]);
console.log("El animal que estmaos viendo ahora es el ", animales[1]);
console.log("El animal que estmaos viendo ahora es el ", animales[2]);
console.log("El animal que estmaos viendo ahora es el ", animales[3]);

var animales = ["PERRO", "GATO", "CONEJO", "TIGRE"]; // length = 4
        //        0         1        2        3

animales.push("OSO");

for (var indice = 0; indice < animales.length; indice++){
    console.log("El animal que estmaos viendo ahora es el ", animales[indice]);
    animales[indice] = animales[indice] + "1";
}
for (var indice = 0; indice < animales.length; indice++){
    console.log("El animal que estmaos viendo ahora es el ", animales[indice]);
}


// ----------------
function mostrarArreglo(arreglo, aumentar, texto1, texto2="1"){
    for (var indice = 0; indice < arreglo.length; indice++){
        if (aumentar){
            arreglo[indice] = arreglo[indice] + texto2;
        }
        console.log(texto1, arreglo[indice]);
    }
}

var animales = ["PERRO", "GATO", "CONEJO", "TIGRE"]; // length = 4
        //        0         1        2        3
animales.push("OSO");
var texto = "El animal que estmaos viendo ahora es el ";

mostrarArreglo(animales, false, texto);
mostrarArreglo(animales, true, texto);
mostrarArreglo(animales, true, "ESTO ES: ", "ALGO OK");


var marcas_auto = ["TOYOTA", "CITROEN", "SUZUKI", "HYUNDAY", "FERRARY"]
mostrarArreglo(marcas_auto, true, "ESTO ES UN AUTO", "-OK")
// arreglos o listas
// objetos o diccionarios
// funciones



function mostrarArregloResumido(arreglo){
    for (var indice in arreglo){
        console.log(arreglo[indice]);
    }
}
var marcas_auto = ["TOYOTA", "CITROEN", "SUZUKI", "HYUNDAY", "FERRARY"]

mostrarArregloResumido(marcas_auto);




function mostrarArregloResumido(arreglo){
    for (var item of arreglo){
        console.log(item);
    }
}
var marcas_auto = ["TOYOTA", "CITROEN", "SUZUKI", "HYUNDAY", "FERRARY"]

mostrarArregloResumido(marcas_auto);