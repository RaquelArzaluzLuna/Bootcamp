let title = document.getElementById('title')

let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adios');//Objeto string
console.log(cadena2);

console.log(cadena2.includes('a'));
//includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLocaleLowerCase().includes('a'))
//convierte a minisculas o mayusculas 

console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toLocaleUpperCase());

//cohersión y conversión

//cohersión - JasaScript convierte en automatico un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());

/* Funcion que recibe una palabra y la regresa invertida */
let palabra = 'Hola Mundo'
let arreglo = palabra.split('');
//console.log(arreglo);

//console.log(arreglo.reverse());

function invertirPalabra(cadena) {
    let arreglo = cadena.split(''); //conviertiendo la cadena en una arreglo
    arreglo.reverse();//invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(''); //une los elementos de un arreglo y regresa un string
     return console.log(cadenaInvertida);
}
invertirPalabra('Generation');