//Interfaz que valide el objeto heroe
interface heroe{
nombre:string,
poderes:string[]
}
let spiderman:heroe={
nombre : 'Peter Parker',
poderes : ['Correr', 'Trepar']
}
console.log("Mi nombre es " + spiderman.nombre + " y mis poderes son : "+ spiderman.poderes[0] , spiderman.poderes[1]
);
