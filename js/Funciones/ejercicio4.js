//Promedio de un array
function calcularPromedio(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    
    return suma / numeros.length; 
  }
  
  let numeros = [5, 10, 15, 20];
  console.log(calcularPromedio(numeros)); 
  