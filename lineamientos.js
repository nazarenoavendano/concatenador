
function botonConcatenar() {

    var copiarTextoVerificacion = document.getElementById("cctv");
    var copiarTextoLlamado = document.getElementById("call");
    var fraseCompleta = copiarTextoVerificacion + " " + copiarTextoLlamado;

    navigator.clipboard.writeText(copiarTextoVerificacion.value + " " + copiarTextoLlamado.value);

   
}






