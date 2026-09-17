function Convertidor(){
    var mx=document.getElementById('mx').value;
    var resultado=document.getElementById('usd');

    if(mx.trim()===""||isNaN(mx)){
        alert("Por favor ingresa un valor númerico valido");
        resultado.value="";
        return;
    }
    var pesos=parseFloat(mx);
    var dolar=(pesos*0.058);
    resultado.value="$"+dolar.toFixed(2)+"USD";
}