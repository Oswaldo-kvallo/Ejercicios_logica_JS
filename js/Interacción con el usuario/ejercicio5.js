//Validación de entrada
let input = prompt("Ingresa un número:");

if (isNaN(input) || input.trim() === "") {
    console.log("Error: Lo ingresado no es un número válido.");
} else {
    console.log("Has ingresado el número: " + input);
}
