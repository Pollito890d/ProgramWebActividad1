const entrada = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = entrada.value.trim(); 

    if (texto !== '') {
        // 1. Crear el li con clases de Bootstrap
        const li = document.createElement('li'); 
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // 2. Elemento para el texto
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);

        // 3. Botón de eliminar
        const botonEliminar = document.createElement('button'); 
        botonEliminar.textContent = 'Eliminar'; 
        botonEliminar.className = 'btn btn-danger btn-sm';
        
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        });

        li.appendChild(botonEliminar); 
        lista.appendChild(li); 

        // 4. Limpieza del campo de entrada
        entrada.value = '';
        entrada.focus();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);
entrada.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});