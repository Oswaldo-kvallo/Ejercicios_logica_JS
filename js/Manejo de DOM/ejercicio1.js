// Manipulación del DOM:
document.addEventListener('DOMContentLoaded', function() {
    const parrafo = document.getElementById('miParrafo');
    const boton = document.getElementById('cambiarTextoBtn');

    boton.addEventListener('click', function() {
        parrafo.textContent = 'Penalti a favor del Real Madrid';
    });
});
