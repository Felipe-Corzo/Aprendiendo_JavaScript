const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nombrepokemon");
const imagenDisplay = document.getElementById("imagenpokemon");

function consultar (){
    nombreDisplay.textContent="";
    imagenDisplay.innerHTML="";
    const nompoke = inputNombre.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

    nombreDisplay.textContent="Buscando pokemon ....";



fetch(url)
    .then(respuesta => { 
        if (!respuesta.ok){
            throw new Error(`Nombre de pokemon ${nompoke} no encontrado`);
        }
        return respuesta.json();
    })
    .then(datos => {
        nombreDisplay.textContent=datos.name[0].toUpperCase() + datos.name.slice(1);
        const rutaimagen = datos.sprites.front_default;
        console.log(rutaimagen);
        imagenDisplay.innerHTML=`<img src="${rutaimagen}"  alt="${datos.name}">`;
    })
    .catch(error => {
        nombreDisplay.textContent= error.message + "ESTAMOS TRABAJANDO PARA MEJORAR SU EXPERIENCIA"
    })

}