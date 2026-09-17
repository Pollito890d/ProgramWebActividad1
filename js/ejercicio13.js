function verificarvoto(){
    var edad= document.getElementById('edad').value;
    var resultado = document.getElementById('resultado');
    if (edad.trim() === "" || isNaN(edad)) {
        alert("Por favor, ingresa una edad válida.");
        resultado.value = "";
        return;
    }
    var e=parseInt(edad);
    if(e<0){
        alert("Ingrese números positivos por favor");
        resultado.value="";
        return;
    }
    if(e>=18){
        resultado.value= "Puedes votar";
    }else{
        resultado.value="No puedes votar";
    }
}