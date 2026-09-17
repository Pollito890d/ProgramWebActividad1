function convertidor(){
    var km=document.getElementById('km').value;
    var resultado=document.getElementById('millas');

    if(km.trim()===""||isNaN(km)){
        alert("Por favor ingresa un valor númerico valido");
        resultado.value="";
        return;
    }
    var kms=parseFloat(km);
    var mill=(kms*0.621371);
    resultado.value=mill+"Mi";
}