// 1. classList.length
const miDiv= document.getElementById("miElemento")
console.log("Cantidad de clases del div: " , miDiv.classList.length)
// 2. classList y classList. value
console.log("Clases del DIV: " , miDiv .classList.value);

// 3. classList.item(n)
console.log("Segunda clase del div: " , miDiv.classList.item(1));

//4. classList.contains - verifica si una clase esta en la lista de calases
console.log("Está clase 3 en el div?" , miDiv.classList.contains("clase3"));

// 5. classList.Add - nos permite agregar clases a la lita en este ejemplo la 3
miDiv.classList.add("clase3");
//6. classList.remove
miDiv.classList.remove("clase1","clase2")
//classList.toggle() - ALterna la presencia de una clase e los atributis de un elemento HTML si existe, borra la clase, si no la crea
function toggleClass() {
    miDiv.classList.toggle("clase4");
}
// classlist.replace(old, new) - quita la clase antigua y pone la nueva

miDiv.classList.replace("clase3", "clase5")