// 1) Busco los elementos del HTML por ID
const status = document.getElementById("status");
const btnCambiar = document.getElementById("btnCambiar");

// 2) Compruebo que el JS cargó
status.textContent = "Estado: JS cargó OK ✅";

// 3) Hago que el botón haga algo al click
btnCambiar.addEventListener("click", () => {
  status.textContent = "Estado: tocaste el botón 🎉";
  alert("Funciona el JavaScript 😄");
});
