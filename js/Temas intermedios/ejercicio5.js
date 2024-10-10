//Herencia
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; 
      this.edad = edad;    
    }
  
    saludar() {
      console.log(`¡Hola! me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
  }

class Estudihambre extends Persona {
    constructor(nombre, edad, grado){
        super(nombre,edad);
        this.grado = grado;
    }

    gradoEstudiante() {
        console.log(`Hola soy ${this.nombre} y voy en el ${this.grado}`);
    }
}

  const Estudiante1 = new Estudihambre('Oswaldo', 21, 'Tercer Grado.');
  
  Estudiante1.saludar();
  Estudiante1.gradoEstudiante();  