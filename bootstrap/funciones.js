

function saludar(iniciar){
    console.log("INIICAR VALE AHORA:", iniciar);
    console.log("SALUDAR!");
    console.log("OTRA LINEA");
    var suma = iniciar;
    suma = 100 + suma;
    console.log("LA SUMA AHORA ES:", suma);
}

saludar(100);
saludar(500);
saludar(4);
saludar(40);
saludar(99);

function repetir(numero){
    for(var i = 0; i<numero; i++){
        console.log(i);
    }
}

repetir(10);
repetir(5);


function zapato(color, tela){
    var zapato = "Se ha fabricado un zapato de color " + color + " y con tela " + tela;
    return zapato;
}

var zapato1 = zapato("negro", "gamuza");
var zapato2 = zapato("cafe", "cuero");

console.log(zapato1);
console.log(zapato2);


function sumar(a, b){
    return a + b;
}
var resultado = sumar(10,50);
console.log( resultado );