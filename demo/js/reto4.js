document.getElementById("btnPrimo").addEventListener("click", function () {

  var numero = parseInt(document.getElementById("numeroPrimo").value);
  var resultado = document.getElementById("resultadoPrimo");
  var esPrimo = true;

  if (numero <= 1) {
    esPrimo = false;
  } else {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }

  if (esPrimo) {
    resultado.textContent = "Es un número primo";
  } else {
    resultado.textContent = "No es un número primo";
  }
});