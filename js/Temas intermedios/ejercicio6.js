// Objeto calculadora
const calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    },
    multiplicar: function(a, b) {
      return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
  };
  
  console.log("Suma: ", calculadora.sumar(8, 2));          
  console.log("Resta: ", calculadora.restar(8, 2));         
  console.log("Multiplicación: ", calculadora.multiplicar(8, 2)); 
  console.log("División: ", calculadora.dividir(8, 2));     
  