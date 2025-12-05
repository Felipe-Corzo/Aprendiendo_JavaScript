// 1. classList.length
const miDiv= document.getElementById("miElemento")
console.log("Cantidad de clases del div: " , miDiv.classList.length)
// 2. classList y classList. value
console.log("Clases del DIV: " , miDiv .classList.value);

// 3. classList.item(n)
console.log("Segunda clase del div: " , miDiv.classList.item(1));

//4. classList.contains - verifica si una clase esta en la lista de calases
console.log("Está clase 3 en el div?" , miDiv.classList.contains("clase3"));