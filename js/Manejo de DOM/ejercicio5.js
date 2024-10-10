//Formularios
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function(event) {
        const campos = formulario.querySelectorAll('input');
        let todosLlenos = true;

        campos.forEach(function(campo) {
            if (campo.value.trim() === '') {
                todosLlenos = false;
            }
        });

        if (!todosLlenos) {
            alert('Completa todos los campos antes de enviar.');
            event.preventDefault(); 
        }
        else{
            alert("Agregado con exito")
            formulario.submit();
        }
    });
});
