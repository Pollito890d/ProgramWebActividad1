// Funciones flecha para cada operación básica
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : 'Error: División por cero');
// Función coordinadora de la lógica
function calcularOperacion(tipoOperacion) {
    const num1Str = document.getElementById('numero1').value.trim();
    const num2Str = document.getElementById('numero2').value.trim();
    const resultadoEn = document.getElementById('resultado');
    // Validación: verificar si algún campo está vacío o no es numérico
    if (num1Str === "" || num2Str === "" || isNaN(num1Str) || isNaN(num2Str)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Por favor, ingresa números válidos en ambos campos antes de operar.'
        });
        resultadoEn.value = "";
        return;
    }
    const n1 = parseFloat(num1Str);
    const n2 = parseFloat(num2Str);
    let res;
    // Manejo del tipo de operacion segun funciones flecha
    switch (tipoOperacion) {
        case 'suma':
            res = sumar(n1, n2);
            break;
        case 'resta':
            res = restar(n1, n2);
            break;
        case 'multiplicacion':
            res = multiplicar(n1, n2);
            break;
        case 'division':
            res = dividir(n1, n2);
            if (res === 'Error: División por cero') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: 'No es posible dividir un número entre cero.'
                });
                resultadoEn.value = res;
                return;
            }
            break;
        default:
            return;
    }
    // Formatear si el resultado posee decimales extensos
    resultadoEn.value = (typeof res === 'number' && !Number.isInteger(res))
        ? parseFloat(res.toFixed(4))
        : res;
}