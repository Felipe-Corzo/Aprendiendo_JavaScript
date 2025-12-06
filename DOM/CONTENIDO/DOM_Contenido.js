// textContent 
const miDiv = document.getElementById("miElemento");
miDiv.textContent="<b>Contenido modificado</b>";

//2. innerHTML
miDiv.innerHTML = "<i>Contenido modifiado</i>";

//3. nodeName - devueve el nombre del noodo con una cadena de texto, el nombre del nodo es el nombre de la etiqueta HTML
const elemMensaje = document.querySelector(".message")
console.log("NOmbre del nodo" , elemMensaje.nodeName)

// 4. outerText - MUESTRA CONTENIDO del nodo 

console.log("Contenido del nodo: \n" , elemMensaje.outerText);
console.log("contenido del container: \n" , document.querySelector(".container").outerText);

//5. outerHTML - MUETRA EL HTML COMPLETO
console.log("Contenido del nodo: \n" , elemMensaje.outerHTML);
console.log("contenido del container: \n" , document.querySelector(".container").outerHTML);

//6. setHTML - agrega de forma segura html a los elementos en el DOM

const htmlCode = "<b>Mi nombre es campuslands</b>";
elemMensaje.setHTML(htmlCode)  // metodo en proceso, a la fecha no esta disponible