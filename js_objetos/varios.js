var numero = 9;

if ( numero == 4 ){
    console.log(numero)
}

if (4){
    console.log("SI FUNCIONA");
}

if (0){
    console.log("NO DEBERIA ENTRAR")
}

console.log(numero)

if (numero === 9){
    console.log("FUNCIONA")
}


console.log(  "4" == 4  );
console.log(  "4" === 4  );
console.log(  4 === 4  );


if ("cosas"){
    console.log("POSITIVO")
}

if (""){
    console.log("POSITOVO")
}


var isAlgo = true;
if (isAlgo){

}

var today = new Date();
console.log(today.getFullYear())
console.log(today.getDay())
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMonth() + 1)
if(today.getDay() == 3) {
    console.log("Odio los miercoles");
}

var today = new Date();
if(today.getDay() == 1) {
    console.log("Odio los lunes");
} else if(today.getDay() == 5) {
    console.log("Viernes? ¡Más bien bien-res!");
} else if(today.getDay() == 2) {
    console.log("Martes");
} else {
    console.log("¡Hoy está bien!");
}

switch(today.getDay()){
    case 1:  console.log("Odio los lunes"); break;
    case 5:  console.log("Viernes? ¡Más bien bien-res!"); break;
    case 2:  console.log("Martes"); break;
    default:  console.log("¡Hoy está bien!");
}


var temperature = 60; // supongamos que son grados Fahrenheit
var estáLloviendo = false;
    
if(temperature >= 50) {
    if(!estáLloviendo) {
        console.log("¡Este es un buen día para dar un paseo!");
    }
}
// todo debe ser VERDADERO para que se cumpla.
if( temperature >= 50 &&  !estáLloviendo){
    console.log("¡Este es un buen día para dar un paseo!");
}

// al menos UNO debe ser verdadero para que se cumpla
if( temperature >= 50 ||  !estáLloviendo){
    console.log("¡Este es un buen día para dar un paseo!");
}


var numero = parseInt(7 / 2);
var resto = 7 % 2;
console.log(numero, resto)

for (var numero = 0; numero < 100; numero++){
    if (numero % 2 === 0){
        console.log("EL NUMERO ", numero, " ES PAR");
    }else{
        console.log("EL NUMERO ", numero, " ES IMPAR");
    }
}

