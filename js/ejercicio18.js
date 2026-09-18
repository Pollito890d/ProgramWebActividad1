const entrada = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = entrada.value.trim(); //[cite: 5]

    if (texto !== '') {
        // 1. Crear el li con clases de Bootstrap[cite: 5]
        const li = document.createElement('li'); //[cite: 5]
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // 2. Elemento para el texto
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);

        // 3. Botón de eliminar[cite: 5]
        const botonEliminar = document.createElement('button'); //[cite: 5]
        botonEliminar.textContent = 'Eliminar'; //[cite: 5]
        botonEliminar.className = 'btn btn-danger btn-sm';
        
        botonEliminar.addEventListener('click', function() { //[cite: 5]
            li.remove(); //[cite: 5]
        });

        li.appendChild(botonEliminar); //[cite: 5]
        lista.appendChild(li); //[cite: 5]

        // 4. Limpieza del campo de entrada[cite: 5]
        entrada.value = ''; //[cite: 5]
        entrada.focus();
    } else {
        alert('Escribe algo para agregar a la lista.'); //[cite: 5]
    }
}

botonAgregar.addEventListener('click', agregarElemento); //[cite: 5]
entrada.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});