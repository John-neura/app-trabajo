// Botones
const botonTareas = document.querySelector("#btn-tareas");
const botonTareas2 = document.querySelector("#btn-tareas2");
const botonDotacion = document.querySelector("#btn-dotacion");
const botonVehiculos = document.querySelector("#btn-vehiculos");
const botonPlanta = document.querySelector("#btn-planta");
const botonFallas = document.querySelector("#btn-fallas");
const botonMaquina = document.querySelector("#btn-maquina");

// Listas
const listaTareas = document.querySelector("#lista-tareas");
const listaTareas2 = document.querySelector("#lista-tareas2");  // Corregido aquí
const listaDotacion = document.querySelector("#lista-dotacion");
const listaVehiculos = document.querySelector("#lista-vehiculos");
const listaPlanta = document.querySelector("#lista-planta");
const listaFallas = document.querySelector("#lista-fallas");
const listaMaquina = document.querySelector("#lista-maquina");

// Función para ocultar todas las listas
function ocultarTodasLasListas() {
  listaTareas.style.display = "none";
  listaTareas2.style.display= "none";
  listaDotacion.style.display = "none";
  listaVehiculos.style.display = "none";
  listaPlanta.style.display = "none";
  listaFallas.style.display = "none";
  listaMaquina.style.display = "none";
}

// Eventos para mostrar cada lista al hacer clic
botonTareas.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaTareas.style.display = "block";
});

botonTareas2.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaTareas2.style.display = "block";
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

botonMaquina.addEventListener("click", () => {
  ocultarTodasLasListas();
  listaMaquina.style.display = "block";
});
