document.getElementById("btnInvertir").addEventListener("click", function () {

  var numero = document.getElementById("numeroInvertir").value;
  var resultado = document.getElementById("resultadoInvertir");

  var invertido = numero.split("").reverse().join("");

  resultado.textContent = "Número invertido: " + invertido;
});