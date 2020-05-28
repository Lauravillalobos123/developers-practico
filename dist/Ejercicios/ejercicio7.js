"use strict";
// Uso de clases
var rectangulo = /** @class */ (function () {
    function rectangulo(a, b) {
        this.a = a;
        this.b = b;
    }
    rectangulo.prototype.area = function () {
        var resultado;
        resultado = this.a * this.b;
        console.log("El resultado entre " + this.a + " y " + this.b + " es " + resultado);
    };
    return rectangulo;
}());
var resultado1;
resultado1 = new rectangulo(5, 2);
resultado1.area();
