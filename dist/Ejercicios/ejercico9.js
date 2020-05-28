"use strict";
//Dos parámrtros
var miFuncion = function (a, b) { return a + b; };
//Mas de dos parámtros
var persona = {
    nombre: 'Laura',
    edad: '22',
    profesion: function () {
        setTimeout(function () { return console.log("Mi nombre es " + nombre + " , tengo " + edad + " y soy ingeniera"); }, 1500);
    }
};
persona.profesion();
