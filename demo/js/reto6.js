var numero1 = Math.floor(Math.random() * 20) + 1;
var numero2 = Math.floor(Math.random() * 20) + 1;
var numero3 = Math.floor(Math.random() * 20) + 1;

var operacion = numero1 + " + " + numero2 + " * " + numero3;
var resultadoCorrecto = numero1 + (numero2 * numero3);

document.getElementById("preguntaOperacion").textContent = operacion + " = ?";

document.getElementById("btnOperacion").addEventListener("click", function () {

  var respuesta = parseInt(document.getElementById("respuestaOperacion").value);
  var resultado = document.getElementById("resultadoOperacion");

  if (respuesta === resultadoCorrecto) {
    window.location.href = "resultados.html?score=1";
  } else {
    resultado.textContent = "Incorrecto. El resultado era " + resultadoCorrecto;
  }
});
