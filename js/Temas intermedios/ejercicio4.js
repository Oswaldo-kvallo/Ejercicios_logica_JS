//Clases básicas
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; 
      this.edad = edad;    
    }
  
    saludar() {
      console.log(`¡Hola! me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  const persona1 = new Persona('Oswaldo', 21);
  
  persona1.saludar();
  