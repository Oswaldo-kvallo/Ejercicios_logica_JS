//Eliminar elementos del DOM
document.addEventListener('DOMContentLoaded', function() {
    const lista = document.getElementById('miLista');
    const boton = document.getElementById('eliminarElementoBtn');

   
    boton.addEventListener('click', function() {
        if (lista.children.length > 0) {
            lista.removeChild(lista.lastElementChild);
        } else {
            alert('No hay elementos para eliminar.');
        }
    });
});
