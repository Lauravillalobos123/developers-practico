"use strict";
// Función con parametros obligatorios, opcionales y por defecto
//nombre : obligatorio , apellido: opcional , email:por defecto
var getUsers = function (nombre, apellido, email) {
    if (email === void 0) { email = "lauravillallobos@gmail.com"; }
    var mensaje;
    if (apellido)
        return mensaje = "Mi nombre es " + nombre + " y mi apellido " + apellido + "  mi correo es " + email;
    else
        return "Mi nombre es " + nombre + "  y mi correo es  " + email;
};
var user1 = getUsers('Laura', 'Villalobos');
console.log(user1);
var user2 = getUsers('Laura');
console.log(user2);
