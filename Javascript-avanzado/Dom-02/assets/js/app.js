/*let titulo = document.getElementById('tituloi');
console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde JS';*/

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JS';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';
// document.body.append agrega un elemento dentro de body al final
//document.body.append(subtitulo);
document.body.insertAdjacentElement("afterend",subtitulo);

let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent = '<br>');
//console.log($contenido.innerHTML = '<br>');
//console.log($contenido.outerHTML = 'Hola');
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);

