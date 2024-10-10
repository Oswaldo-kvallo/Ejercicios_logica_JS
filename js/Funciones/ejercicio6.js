//Contar vocales
function contarVocales(palabra) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
  
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) { 
        contador++;
      }
    }
  
    return contador;
  }
  
  console.log(contarVocales("Visca el Barca"));