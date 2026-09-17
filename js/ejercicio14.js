function calcular(){
    var nums=document.getElementById('numeros').value;
    var tMayor = document.getElementById('mayor');
    var tMenor = document.getElementById('menor');
    var tPromedio = document.getElementById('promedio');
    if(nums.trim===""){
        alert("Por favor ingresa una lista de números");
        tMayor.value="";
        tMenor.value="";
        tPromedio.value="";
        return;
    }
    //Separar la cadena por comas
    var arreglo = nums.split(",");
    //Limpiar espacios y convertir cada elemento a número
    var numeros = arreglo.map(Number);
    //Obtener el número mayor y menor con Math y el operador spread (...)
    var maximo = Math.max(...numeros);
    var minimo = Math.min(...numeros);

    var suma = numeros.reduce((acc, valor) => acc + valor, 0);
    var promedio = suma/numeros.length;

    tMayor.value = maximo;
    tMenor.value = minimo;
    tPromedio.value = promedio.toFixed(2);

}