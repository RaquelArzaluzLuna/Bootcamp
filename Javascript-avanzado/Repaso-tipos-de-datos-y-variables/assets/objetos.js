/*let miObjeto = {
    //pares de clave valor
    nombre: 'Raquel Luna'
} */

let nombre = 'Raquel Luna';
let edad = 25;
let direccion = 'Huixquilucan'
let numero = 5585781723;

console.log(nombre);

let persona = {
    nombre: 'Luna',
    edad: 25,
    dirección: {
        ciudad:'Huixquilucan',
        estado: 'México'
    },
    numero: 5585781723
};

console.log(persona);

let videojuegos ={
    consola: ['XBox', 'Nintendo switch', 'Playstation'],
    genero: ['Arcade', 'accion', 'deportivo', 'estrategia', 'aventura'],
    numeroDeJugadores: ['1',' 2', '3', '4'],
}

console.log(videojuegos.numeroDeJugadores[2])