/*let numeros = new Array();
numeros = [1, 3, 11, 45, 52, 32, 13, 65, 19, 50, 111, 112, 157, 119, 91, 33, 39, 45, 25, 99];

console.log(numeros.length);
for (let i = 0; i < numeros.length ; i++){
    document.write(`${numeros[i]} <br/>` );

} */

let numeros = [1, 3, 11, 45, 52, 32, 13, 65, 19, 50, 111, 112, 157, 119, 91, 388, 39, 45, 125, 99];
let a = newArray(numeros);

function newArray(numeros) {
    let i = 0, suma = 0, length = numeros.length;
    while (i < length) {
        suma = suma + numeros[i++];
}
    return suma / length;
}
console.log(a)