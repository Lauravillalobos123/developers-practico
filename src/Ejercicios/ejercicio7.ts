// Uso de clases
class rectangulo{
a:number;
b:number;
 constructor(a:number, b:number){
    this.a =a;
    this.b = b;
  }
  area(){
      let resultado:number
      resultado = this.a*this.b
      console.log(`El resultado entre ${this.a} y ${this.b} es ${resultado}`);
  }
}
let resultado1 :rectangulo;
resultado1=new rectangulo(5,2);
resultado1.area();