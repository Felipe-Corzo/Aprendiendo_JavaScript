import * as api from "./api.js";

const btnCargar = document.getElementById("btnCargar");
const btnGuardar = document.getElementById("btnGuardar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tablaCuerpo = document.getElementById("tablaCuerpo");
const mensaje = document.getElementById("mensaje");

const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputSexo = document.getElementById("sexo");
const inputModulos = document.getElementById("modulos");

btnCargar.addEventListener("click", cargarCampers);
btnGuardar.addEventListener("click", guardarCamper);
btnLimpiar.addEventListener("click", limpiarFormulario);

async function cargarCampers() {
  try {
    const campers = await api.obtenerTodosCampers();

    dibujarTabla(campers);

    mostrarMensaje(`Se cargaron ${campers.length} `, "exito");
  } catch (error) {
    mostrarMensaje(`Error al cargar: ${error.message}`, "error");
  }
}

function dibujarTabla(campers) {
    tablaCuerpo.innerHTML = "";
  
    if (campers.length === 0) {
      const fila = document.createElement("tr");
      fila.innerHTML =
        '<td colspan="6" style="text-align: center; color: #999;">No hay campers</td>';
      tablaCuerpo.appendChild(fila);
      return;
    }
  
    campers.forEach((camper) => {
      const fila = document.createElement("tr");
  
      // Calcular promedio de módulos
      let promedio = "N/A";
      if (camper.modulos && camper.modulos.length > 0) {
        const suma = camper.modulos.reduce((total, m) => total + m.puntaje, 0);
        promedio = (suma / camper.modulos.length).toFixed(1);
      }
  
      // Crear HTML de módulos
      let modulosHTML = "";
      if (camper.modulos && camper.modulos.length > 0) {
        modulosHTML = camper.modulos
          .map(
            (m) => `<div class="modulo-item">${m.nombre}: ${m.puntaje}/100</div>`
          )
          .join("");
      } else {
        modulosHTML = '<div style="color: #999;">Sin módulos</div>';
      }
      // Llenar fila
    fila.innerHTML = `
    <td>${camper.id}</td>
    <td>${camper.nombre}</td>
    <td>${camper.edad}</td>
    <td>${camper.sexo}</td>
    <td class="modulos">
      ${modulosHTML}
      <div style="margin-top: 5px; font-weight: bold; color: #0066cc;">Promedio: ${promedio}</div>
    </td>
    <td class="acciones">
      <button class="btnEditar">Editar</button>
      <button class="btnEliminarFila">Eliminar</button>
    </td>
  `;

  // Agregar eventos a botones de la tabla
  const btnEditar = fila.querySelector(".btnEditar");
  const btnEliminarFila = fila.querySelector(".btnEliminarFila");

  btnEditar.addEventListener("click", () => {
    editarCamper(
      camper.id,
      camper.nombre,
      camper.edad,
      camper.sexo,
      camper.modulos || []
    );
  });

  btnEliminarFila.addEventListener("click", () => {
    funcionEliminarCamper(camper.id, camper.nombre);
  });

  tablaCuerpo.appendChild(fila);
});
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;
  
    setTimeout(() => {
      mensaje.textContent = "";
      mensaje.className = "mensaje";
    }, 4000);
  }