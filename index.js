
function botonConcatena() {
  var Verificacion = document.getElementById("cctv-1");
  var VerificacionDos = document.getElementById("cctv-2");

  var Llamado = document.getElementById("call-1");
  var LlamadoDos = document.getElementById("call-2");
  var LlamadoTres = document.getElementById("call-3");



  navigator.clipboard.writeText("En visualización: " + Verificacion.value + " " + VerificacionDos.value + " " + "\nResultado del llamado: " + Llamado.value + LlamadoDos.value + LlamadoTres.value);
}


