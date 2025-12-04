//SetTimeout() para ejecutar tareas mas adelante en un tiempo determinado 

console.log("1. hacer arepas");
setTimeout(() =>{
    console.log("3. la arepa esta ñlista en 2 segundos despues")
}, 5000);

console.log("2. mientras se va barriendo la casa");

//callback es una funcion que recibe como parametro o devuelve otra funcion
//ejemplo con calculadora dinamica

function calcular (precio,cantidad,funcallback){
    console.log(`calculando ${cantidad} productos por $${precio.toLocaleString('es-CO')}`);
    funcallback(precio, cantidad);
}
const conIVA = (precio, cant) => {
    const total = precio * cant *1.19;
    console.log(`Total con iva : ${total.toLocaleString('es-CO')}`);
}

const conDescuento = (precio, cant) => {
    const total = precio * cant * 0.15;
    console.log(`Total con  15 % descuento : ${total.toLocaleString('es-CO')}`);
}

calcular(45000,3,conIVA);
calcular(45000,3,conDescuento);
