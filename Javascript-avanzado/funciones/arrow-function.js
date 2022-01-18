/*Arrow function
Función de flecha */

/*function suma(numero1, numero2){
    //Operaciones o codigo a ejecutar
    return numero1 + numero2;
}*/

const sumar = (nuemero1, numero2) => {
    return numero1 + numero2;
};

let numero1 = parseInt(prompt("Número 1"));
let numero2 = parseInt(prompt("Número 2"));
let suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`);