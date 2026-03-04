var numeroSecreto = Math.floor(Math.random() * 100) + 1;

document.getElementById("btnIntentar").addEventListener("click", function () {
  var numeroUsuario = document.getElementById("numeroUsuario").value;
  numeroUsuario = Number(numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    window.location.href = "resultados.html?score=1";
  } else if (numeroUsuario < numeroSecreto) {
    document.getElementById("mensaje").textContent = "El número secreto es MAYOR";
  } else {
    document.getElementById("mensaje").textContent = "El número secreto es MENOR";
  }
});

document.getElementById("btnReiniciar").addEventListener("click", function () {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  document.getElementById("mensaje").textContent = "";
  document.getElementById("numeroUsuario").value = "";
});