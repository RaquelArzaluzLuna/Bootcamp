let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

numeros.forEach(function (numero) {
    document.write(numero + ', ');
});

let numeros2 = numeros.map(function (elemento) {
    return elemento;
});

document.write('<br>' + numeros2 + '<br>');

/*let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');*/

/* Includes */
/*document.write('<br> + numerosPares + '<br>');*/

let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate']
let frutasFiltro = frutas.filter((fruta) => {
    /* if (fruta.includes('g') == true){
         return true;
     }*/
    return fruta.includes('m');

});
document.write('<br>' + frutasFiltro + '<br>');

/* Sort ordena los elemento */
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

document.write('<br>' + otrosNumeros.sort() + '<br>');

/* Reverse invierte el orden de los elementos de un arrelo */

document.write('<br>' + numeros.reverse() + '<br>');

/* Find */
let frutaEncontrada = frutas.find((elemento) =>{
return elemento.tolowerCase().includes('ma');
});
document.write('<br>' + frutaEncontrada + '<br>');