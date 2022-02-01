//clases, molde que nos permite crear objetos

class Animal{
    //constructor es una función
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
        //console.log('Este es un constructor');
    }

    get getNombre(){
        return this.nombre;
    }
    
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set getEspecie(especie){
        this.especie = especie;
    }
        //metodos == funcion
    presentarse(){
    document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje);
    }

    static saludar(){
        return console.log('Hola, soy un metodo estático');
    }
}

Animal.saludar();



//Heredan los atributos y los metodos de la clase que estan utilizando
const Animal1 = new Animal('Scooby', 'perro'); //creamos un objeto
console.log(Animal1);

const Animal2 = new Animal('Pecas', 'gato');
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);


Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy';
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre('Oddie');
//document.write(Animal1.cambiarNombre('Oddie')); //metodo para cambiar un valor


console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);