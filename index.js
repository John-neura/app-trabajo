// Botones
const botonTareas = document.querySelector("#btn-tareas");
const botonDotacion = document.querySelector("#btn-dotacion");
const botonVehiculos = document.querySelector("#btn-vehiculos");
const botonPlanta = document.querySelector("#btn-planta");
const botonFallas = document.querySelector("#btn-fallas");

// Listas
const listaTareas = document.querySelector("#lista-tareas");
const listaDotacion = document.querySelector("#lista-dotacion");
const listaVehiculos = document.querySelector("#lista-vehiculos");
const listaPlanta = document.querySelector("#lista-planta");
const listaFallas = document.querySelector("#lista-fallas");

// Función para ocultar todas las listas
function ocultarTodasLasListas() {
  listaTareas.style.display = "none";
  listaDotacion.style.display = "none";
  listaVehiculos.style.display = "none";
  listaPlanta.style.display = "none";
  listaFallas.style.display = "none";
}

// Eventos para mostrar cada lista al hacer clic
botonTareas.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaTareas.style.display = "block";
});

botonDotacion.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaDotacion.style.display = "block";
});

botonVehiculos.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaVehiculos.style.display = "block";
});

botonPlanta.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaPlanta.style.display = "block";
});

botonFallas.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaFallas.style.display = "block";
});
