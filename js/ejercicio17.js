// Closure para encapsular el manejo del estado y la persistencia en LocalStorage
const moduloTareas = (() => {
    const CLAVE_STORAGE = "tareas_usuario";
    // Scope local: funciones privadas del closure
    const obtenerTareas = () => {
        const datos = localStorage.getItem(CLAVE_STORAGE);
        return datos ? JSON.parse(datos) : [];
    };
    const guardarEnStorage = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };
    return {
        agregarTarea: (texto) => {
            const tareas = obtenerTareas();
            tareas.push({ id: Date.now(), texto: texto });
            guardarEnStorage(tareas);
        },
        eliminarTarea: (id) => {
            let tareas = obtenerTareas();
            tareas = tareas.filter(tarea => tarea.id !== id);
            guardarEnStorage(tareas);
        },
        obtenerTodas: () => {
            return obtenerTareas();
        }
    };
})();
// Renderizado en el DOM y eventos
const tareaEn = document.getElementById('tareaEn');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
function renderizarTareas() {
    listaTareas.innerHTML = "";
    const tareas = moduloTareas.obtenerTodas();
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.style.marginBottom = "8px";
        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarea.texto + " ";
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        // Confirmación con SweetAlert2 antes de eliminar
        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `Se borrará: "${tarea.texto}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    moduloTareas.eliminarTarea(tarea.id);
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