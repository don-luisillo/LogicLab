let oscuro = document.getElementById("modoBtn");

if(localStorage.getItem("Modo Oscuro") === "dark"){
  document.body.classList.add("dark");
}

oscuro.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("Modo Oscuro", document.body.classList.contains("dark")? "dark": "light");
});