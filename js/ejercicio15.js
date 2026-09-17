// Arreglo global para almacenar los objetos de tipo estudiante
const estudiantes = [];

function agregarEstudiante() {
    const nombreEn = document.getElementById('nombre');
    const califEn = document.getElementById('calificacion');
    const totalRegistrados = document.getElementById('totalRegistrados');
    const nombre = nombreEn.value.trim();
    const calificacionStr = califEn.value.trim();
    
    // Validaciones
    if (nombre ==="" || calificacionStr ==="") {
        alert("Por favor, completa tanto el nombre como la calificación.");
        return;
    }
    const calificacion = parseFloat(calificacionStr);
    if (isNaN(calificacion) || calificacion < 0) {
        alert("Por favor, ingresa una calificación numérica válida.");
        return;
    }
    // Creación del objeto y almacenamiento en el arreglo
    const nuevoEstudiante={
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(nuevoEstudiante);
    totalRegistrados.textContent = `Estudiantes agregados: ${estudiantes.length}`;
    // Limpieza para la siguiente captura
    nombreEn.value = "";
    califEn.value = "";
    nombreEn.focus();
}

function calcularResultados() {
    const tPromedio = document.getElementById('promedio');
    const tMayor = document.getElementById('mayor');
    const tMenor = document.getElementById('menor');
    if (estudiantes.length === 0) {
        alert("Debes agregar al menos un estudiante antes de calcular.");
        return;
    }
    // 1. Promedio con reduce()
    const suma = estudiantes.reduce((total, est) => total + est.calificacion, 0);
    const promedio = suma / estudiantes.length;
    // 2. Extraer calificaciones para Math.max y Math.min con spread operator (...)
    const calificaciones = estudiantes.map(est => est.calificacion);
    const maxCalificacion = Math.max(...calificaciones);
    const minCalificacion = Math.min(...calificaciones);
    // 3. Buscar el estudiante correspondiente a cada calificación extrema
    const mejorEstudiante = estudiantes.find(est => est.calificacion === maxCalificacion);
    const menorEstudiante = estudiantes.find(est => est.calificacion === minCalificacion);
    // 4. Mostrar valores en los inputs readonly
    tPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
    tMayor.value = mejorEstudiante ? mejorEstudiante.nombre : "";
    tMenor.value = menorEstudiante ? menorEstudiante.nombre : "";
}