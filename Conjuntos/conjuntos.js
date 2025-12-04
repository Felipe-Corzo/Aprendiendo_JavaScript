//estructuras de datos que no repiten elementos y en teoria no ordenados
const frutas = new Set(["banano", "mango", "lulo", "guayaba", "mora","fresa", "banano"]);

console.log(typeof(frutas))
console.log(frutas)
//adicionar elementos al conjunto
frutas.add("anon").add("aguacate").add("tomate")

console.log(frutas)
// si existe 
console.log(frutas.has("aguacate"));
// borrar elemento 
console.log(frutas.delete("mamon"));
//tamaño del conjunto
console.log(frutas.size);
// iterar
for (let f of frutas.values()) console.log(frutas);

frutas.clear();
console.log(frutas);
