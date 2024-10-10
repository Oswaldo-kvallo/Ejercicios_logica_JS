//Promedio de un array
function encontrarMaxMin(numeros) {
    let max = Math.max(...numeros); 
    let min = Math.min(...numeros); 
  
    return { max, min }; 
  }
  
  let numeros = [5, 10, -3, 25, 7];
  let resultado = encontrarMaxMin(numeros);
  
  console.log("Máximo:", resultado.max); 
  console.log("Mínimo:", resultado.min); 
  