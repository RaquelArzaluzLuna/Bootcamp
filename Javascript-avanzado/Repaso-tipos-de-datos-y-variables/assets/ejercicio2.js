
let añoActual = 2022;
let resta = document.getElementById('edad');
function calcular(){
    let edad = prompt('Escribe tu fecha de nacimiento');
    resta.textContent = añoActual - edad;
}