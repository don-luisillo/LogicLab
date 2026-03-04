var inicio = Math.floor(Math.random() * 5) + 1;
var incremento = Math.floor(Math.random() * 5) + 1;

var n1 = inicio;
var n2 = inicio + incremento;
var n3 = n2 + incremento;

document.getElementById("secuencia").textContent = n1 + ", " + n2 + ", " + n3 + ", ?";

document.getElementById("btnVerificar").addEventListener("click", function () {
  var respuesta = document.getElementById("respuesta").value;
  var correcto = n3 + incremento;

  if (respuesta == correcto) {
    window.location.href = "resultados.html?score=1";
  } else {
    document.getElementById("mensaje").textContent = "Incorrecto";
  }
});
