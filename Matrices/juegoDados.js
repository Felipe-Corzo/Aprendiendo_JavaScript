// Cantidad de lanzamientos 
const lanzamientos = 10000000; 
// Objeto para guardar cuántas veces aparece cada suma 
const contador = 0; 
// Inicializamos las posibles sumas de 2 a 12 
for (let i = 2; i <= 12; i++) { 
contador[i] = 0; 
} 
// Simulación 
for (let i = 0; i < lanzamientos; i++) { 
let dado1 = Math.floor(Math.random() *6) + 1; 
let dado2 = Math.floor(Math.random() * 6) + 1; 
let suma = dado1 + dado2; 
} 
contador[suma]++; 
// Encontrar el número más frecuente let numeroMas Frecuente = null; 
let maxApariciones = 0; 
for (let suma in contador) { 
if (contador[suma] > maxApariciones) { maxApariciones = contador[suma]; numeroMasFrecuente = suma; 
} 
} 
// Mostrar resultados 
console.log("Resultados:"); 
console.log(contador); 
console.log('El número que más cayó fue $ {numeroMasFrecuente} con $ {maxApariciones} apariciones.');
