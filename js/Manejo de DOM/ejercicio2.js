//Crear elementos en el DOM
document.addEventListener('DOMContentLoaded', function() {
    const lista = document.getElementById('miLista2');
    const boton = document.getElementById('agregarElementoBtn');
    const input = document.getElementById('nuevoElemento');

    boton.addEventListener('click', function() {
        const nuevoTexto = input.value.trim();

        if (nuevoTexto !== '') {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = nuevoTexto;
            lista.appendChild(nuevoElemento);
            input.value = '';
        } else {
            alert('Introduce un texto válido.');
        }
    });
});
