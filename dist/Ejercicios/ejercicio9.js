"use strict";
//Dos parámrtros
var miFuncion = function (a, b) { return a + b; };
//Mas de dos parámtros
var persona = {
    nombre: 'Laura',
    edad: '22',
    profesion: function () {
        var _this = this;
        setTimeout(function () { return console.log("Mi nombre es " + _this.nombre + " , tengo " + _this.edad + " y soy ingeniera"); }, 1500);
    }
};
persona.profesion();
