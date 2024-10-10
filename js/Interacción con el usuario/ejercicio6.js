//Palíndromos
let palabra = prompt("Ingresa una palabra:").toLowerCase().trim();
let palabraInvertida = palabra.split("").reverse().join("");

if (palabra === palabraInvertida) {
    console.log(palabra + " es un palíndromo.");
} else {
    console.log(palabra + " no es un palíndromo.");
}
