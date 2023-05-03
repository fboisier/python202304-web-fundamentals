var nombreUsuario = "FRANCISCO";
var apellidoUsuario = "BOISIER";
var edadUsuario = 38;
var pasatiemposUsuario = ['PROGRAMAR', 'VIDEOJUEGOS', 'ANIME'];

var nombreUsuario1 = "JAVIER";
var apellidoUsuario1 = "SANDOVAL";
var edadUsuario1= 20;
var pasatiemposUsuario1 = ['FUTBOL', 'LEER', 'DORMIR'];

var nombreUsuario2 = "JAVIER";
var apellidoUsuario2 = "SANDOVAL";
var edadUsuario2= 20;
var pasatiemposUsuario2 = ['FUTBOL', 'LEER', 'DORMIR'];


// [valor1, valor2, valor3]
// { llave1: valor1, llave2:valor2, llave3:valor3 }
var usuario = {
    'nombre': 'FRANCISCO',
    'apellido': 'BOISIER',
    'edad': 38,
    'pasatiempo': ['PROGRAMAR', 'VIDEOJUEGOS', 'ANIME'],
    'curso': {
        'nombre': 'Python',
        'horas': 400,
        'relatores': ['Francisco', 'Enrique']
    },
    'ciudades': [
        { 'nombre': 'Temuco', 'region':'Araucania' },
        { 'nombre': 'Santiago', 'region':'Metropolitana' },
        { 'nombre': 'Guaitecas', 'region': 'Aysen' },
    ],
    'juegos':[
        ['ACCION', 'DRAMA'],
        ['HORIZON', 'STRANGER']
    ],
    'saludar': function(){ 
        return "hola "+ this.nombre + " " + this.apellido; 
    }
}
usuario.apellido = "SANDOVAL";
usuario.pasatiempo[1] = "JUEGOS";

console.log(usuario.pasatiempo[2]);
console.log(usuario.curso.relatores[1])
console.log(usuario.ciudades[2].region)

console.log(usuario.juegos[1][1])
console.log(usuario.saludar())

function procesarObjeto(obj){
    console.log(obj.ciudades[2].region)
}

procesarObjeto(usuario)

// { = .
// [ = []
// funcion = ()

fetch('https://pokeapi.co/api/v2/pokemon/5')
    .then(response => response.json())
    .then(data => {
        console.log("ESTAMOS ACA:!!!! ")
        console.log(data.abilities[0].ability.name)
    })
    .catch(error => console.error(error));


function saludar(nombre){
    return "HOLA " + nombre;
}
console.log(saludar("PANCHO"));

var saludar = function(nombre){
    return "HOLA " + nombre;
}
console.log(saludar("ALGO"));
