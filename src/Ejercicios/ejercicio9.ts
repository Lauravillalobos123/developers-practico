//Dos parámrtros
let miFuncion = (a:number,b:number)=> a+b

//Mas de dos parámtros
let persona ={
nombre: 'Laura',
edad: '22',
profesion(){
    setTimeout(()=> console.log(`Mi nombre es ${this.nombre} , tengo ${this.edad} y soy ingeniera`), 1500);
}
}
persona.profesion();