// Función con parametros obligatorios, opcionales y por defecto
//nombre : obligatorio , apellido: opcional , email:por defecto
let getUsers=(nombre:string, apellido?:string, email="lauravillallobos@gmail.com")=>{
    let mensaje:string
    if(apellido) return mensaje = `Mi nombre es ${nombre} y mi apellido ${apellido}  mi correo es ${email}`;
    else return`Mi nombre es ${nombre}  y mi correo es  ${email}`
}

let user1 = getUsers('Laura', 'Villalobos')
console.log(user1);

let user2 = getUsers('Laura')
console.log(user2);