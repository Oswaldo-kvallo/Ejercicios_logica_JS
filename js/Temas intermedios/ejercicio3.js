// Función flecha que multiplica cada número por 2
const multiplicar = (numeros) => numeros.map(num => num * 2);

const arrayOriginal = [1, 2, 3, 4, 5];
const arrayMultiplicado = multiplicar(arrayOriginal);

console.log(arrayOriginal);
console.log(arrayMultiplicado);
