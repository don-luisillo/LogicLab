var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var tipo = Math.floor(Math.random() * 3);

var resultado;

if (tipo == 0) {
  document.getElementById("operacion").textContent = num1 + " + " + num2;
  resultado = num1 + num2;
} else if (tipo == 1) {
  document.getElementById("operacion").textContent = num1 + " - " + num2;
  resultado = num1 - num2;
} else {
  document.getElementById("operacion").textContent = num1 + " × " + num2;
  resultado = num1 * num2;
}

document.getElementById("btnVerificar").addEventListener("click", function () {
  var respuesta = document.getElementById("respuesta").value;

  if (respuesta == resultado) {
    window.location.href = "resultados.html?score=1";
  } else {
    document.getElementById("mensaje").textContent = "Incorrecto";
  }
});
