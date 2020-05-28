//Ejercicio 2 
interface Usuario{
    nombreUsuario:string;
    password:string;
    passwordConfirm?:string; // ? representa cuando un valor es  opcional
}

let usuario:Usuario={
    nombreUsuario:"Laura Villalobos",
    password: '1234'
}
console.log(usuario);

let usuario2:Usuario={
    nombreUsuario:"Laura Villalobos",
    password: '1234',
    passwordConfirm:'1234'
}
console.log(usuario2);