function convertidor() {
    var cel=document.getElementById('cel').value;
    var resultado=document.getElementById("resultado");
    // Validación para verificar que no este vacío y que sea numérico
    if(cel.trim()===""){
        alert("Por favor ingresa un valor numerico valido");
        resultado.value="";
        return;
    }
    var c=parseFloat(cel);
    var f=(c*(9/5)+32);
    resultado.value=f+"°F";
}