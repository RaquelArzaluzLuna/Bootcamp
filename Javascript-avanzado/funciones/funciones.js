/* Function
Es un bloque de codigo reutilizable.
Puede tener o no p'aremetros o no de entrada.
Puede devolver o no un valor
 */

function suma(numero1, numero2){
    //Operaciones o codigo a ejecutar
    return numero1 + numero2;
console.log('Hola desde la funcion')
}

let numero1 = parseInt(prompt('numero 1'));
let numero2 = parseInt(prompt('numero 2'));
let sumaNumeros = suma(numero1, numero2)

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`);