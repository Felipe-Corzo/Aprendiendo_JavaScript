// appendChild () - inserta un elemento nuevo como hijos 
const miDiv = document.querySelector(".parent");

const parrafo = document.createElement("p");
parrafo.textContent="Hoy es viernes :D"
miDiv.appendChild(parrafo);
// insertBefore() - inserta como primer hijo
const parrafo2 = document.createElement("p");
parrafo2.textContent= "PIDAN TUTORIASSSSS =)";
miDiv.insertBefore(parrafo2, miDiv.firstChild);

//  removerChild() - remueve hijos

const parrHola= document.querySelector(".parent > p ~ p");
miDiv.removeChild(parrHola)

// replaceChild() - reemplaza el hijo

const parrMensaje = document.querySelector(".message");
const parrNuevo = document.createElement("p");
parrNuevo.innerHTML= "<p><b><em>MI nombre es MAXIMUS TERCERO MERIDIUM</em></b></p>";
miDiv.replaceChild(parrNuevo , parrMensaje)

//4. insertBefore(new , node) - inserta un nuevo elemento nuevo antes de otro elemento, el elemento nuevo sse agrega a la lista  de hijos del elemento anterior 

const miBoton = document.createElement("button");
miBoton.textContent = "Conquistar JAVASCRIPT"
miDiv.insertBefore(miBoton, miDiv.firstChild);

// antes del comatiner

const comatiner=document.querySelector(".container");
const lineaNueva = document.createElement("hr")
const lineaNueva2 = document.createElement("hr")
const lineaNueva3 = document.createElement("hr")
const lineaNueva4 = document.createElement("hr")
comatiner.before(lineaNueva)
comatiner.after(lineaNueva2)
comatiner.prepend(lineaNueva3)
comatiner.append(lineaNueva4)


// reemplazar todos los hijos del contenedor

function reemplazaHijos () {
    comatiner.replaceChildren(parrNuevo);
}


// replaceWith)(/ - reemplaza no solo el hijo si no todo el elemento)
const pVelitas= document.createElement("p");
pVelitas.textContent= "las campanas de la iglesia estan sonando !!!!!  \u{1F514}";

function reemplazaContainer() {
    comatiner.replaceWith(pVelitas);
}