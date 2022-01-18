let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

/* addEventListener agrega un evento al elemento */
$btnMensaje.addEventListener('click', () => {
console.log('No me presiones :c')
}); 

$mensaje.addEventListener('keyup', (e) => {
    console.log(e);
/*console.log(e);*/

if(e.target.value.length < 2){
    $spanError.classList.remove('hide');
    $spanError.classList.add('error');
}else{
    $spanError.classList.add('hide');
    $spanError.classList.remove('error');
}
});