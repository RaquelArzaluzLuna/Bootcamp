/* flujo orden en que se ejecutan las declaraciones */

/*let miVariable = 10;
console.log(miVariable);*/

/* Estructuras de control de flujo */

/*let edad1 = 25;
let tienesINE = true;

if (edad1 >= 18 && tienesINE == true) {
    console.log('Puedes entrar')
} else {
    console.log('No puedes entrar')
}*/

/*let edad1 = 19;

(edad1 >= 18)
? console.log('Mayor de edad')
: console.log('Menor de edad')*/

/*let pregunta = (edad >= 18)
? 'Mayor de edad'
: 'Menor de edad'

console.log(pregunta); */

/*let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? 'Mayor' : 'Menor'} de edad`;
console.log(preguntaEdad)*/


/*let dia;

if(dia === 0){
    console.log('Domingo');
} else if(dia ===1)
console.log('Lunes'); {
} else if(dia ===2)
console.log('Martes') ;{
    
} else if(dia ===3)
console.log('Miercoles'); {
    
} else if(dia ===4)
console.log('Jueves'); {
    
} else if(dia ===5)
console.log('Viernes'); {
    
} else if(dia ===6)
console.log('Sabado') {
    
} else
console.log('Ese no es un día'); {
    
}*/
let dia = 0;

switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
    case 2:
        break;
        console.log('Martes');
    case 3:
        break;
        console.log('Miercoles');
    case 4:
        break;
        console.log('Jueves');
    case 5:
        break;
        console.log('Viernes');
    case 6:
        break;
        console.log('Sabado');
    default:
        console.log('No es un día valido');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
        break;
        case 'Plata':
            descuento = 10;
            break;
            case 'Oro':
            descuento = 15;
            default: 
            console.log('Cupón no vaido');
            break;
}
console.log(descuento);