const entrada = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
function agregarElemento() {
    const texto = entrada.value.trim();
    if (texto !== '') {
        // Crear elemento li con clases de diseño de Bootstrap
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center py-2';
        // Nodo de texto
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);
        // Botón de eliminar con estilo visual de Bootstrap
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-outline-danger btn-sm';
        botonEliminar.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(botonEliminar);
        lista.appendChild(li);
        // Limpieza y enfoque del input
        entrada.value = '';
        entrada.focus();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}
//Event Listener y para agregar presionando "Enter"
botonAgregar.addEventListener('click', agregarElemento);
entrada.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});