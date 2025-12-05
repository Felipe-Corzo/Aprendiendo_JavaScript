//1. getAttribute()
const enlace = document.getElementById("miEnlace");
const url =enlace.getAttribute("href");
console.log("URL: " + url)


// 2. setAttribute()
enlace.setAttribute("href", "https://camper.campuslands.com/");

// get AttributesNames - recupera una lista de todos los atributos 

console.log("Nombres de los atributus", enlace.getAttributeNames());

//3. toggkeAttributes() - si existe el elemento lo elimina y si no existe lo agrega
/*sintaxis:  */
function altenarEnlace () {
    enlace.toggleAttribute("hidden");
    if (enlace.hasAttribute("hidden")){
        document.getElementsByTagName("button")[0].textContent = "Mostrar"
    }else {
        document.getElementsByTagName("button")[0].textContent = "Ocultar"
    }

    // 4. removeAttribute()
    enlace.removeAttribute("target")
}



