// Closure para encapsular el manejo del estado y la persistencia en LocalStorage
const moduloTareas = (() => {
    const CLAVE_STORAGE = "tareas_usuario";
    // Funciones privadas dentro del closure
    const obtenerTareas = () => {
        const datos = localStorage.getItem(CLAVE_STORAGE);
        return datos ? JSON.parse(datos) : [];
    }
    const guardarEnStorage = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };
    return {
        // Al trabajar por índice, solo guardamos el texto directamente
        agregarTarea: (texto) => {
            const tareas = obtenerTareas();
            tareas.push(texto);
            guardarEnStorage(tareas);
        },
        // Borramos extrayendo por posición con splice()
        eliminarTareaPorIndice: (indice) => {
            const tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarEnStorage(tareas);
        },
        obtenerTodas: () => {
            return obtenerTareas();
        }
    };
})();

// Referencias del DOM
const tareaEn = document.getElementById('tareaEn');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
function renderizarTareas() {
    listaTareas.innerHTML = "";
    const tareas = moduloTareas.obtenerTodas();
    // El segundo parámetro del forEach nos da el índice exacto (0, 1, 2...)
    tareas.forEach((textoTarea, indice) => {
        const li = document.createElement('li');
        const spanTexto = document.createElement('span');
        spanTexto.textContent = textoTarea;
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        // Confirmación con SweetAlert2 usando el índice actual
        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `Se borrará: "${textoTarea}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    moduloTareas.eliminarTareaPorIndice(indice);
                    renderizarTareas();
                    Swal.fire('Eliminada', 'La tarea ha sido retirada.', 'success');
                }
            });
        });
        li.appendChild(spanTexto);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}

// Evento para agregar nueva tarea
btnAgregar.addEventListener('click', () => {
    const valor = tareaEn.value.trim();
    if (valor === "") {
        Swal.fire('Campo vacío', 'Por favor ingresa un texto para la tarea.', 'info');
        return;
    }
    moduloTareas.agregarTarea(valor);
    tareaEn.value = "";
    tareaEn.focus();
    renderizarTareas();
});
// Cargar tareas al iniciar la página
document.addEventListener('DOMContentLoaded', renderizarTareas);