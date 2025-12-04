// Promesas
/*
SINTAXIS 

1.DECLARACION
const mipromesa = new Pormisse((resolne, rejerc) => {....});

2. EJECUCION 
mipromesa
    .then(resuelve => {...})
    .catch(error => {...})

*/

// EJEMPLO DE PROMESA
//Construccion de la promesa

const miPromesa = new Promise((resolve, reject) => {
    const exito=false;

    if (exito){
        console.log("esperando... ")
        setTimeout(() => resolve("Promesa cumplida"), 2000)

    }else {
        reject("Pormesa rechazada")
    }
});
//ejecutar la promesa
miPromesa 
    .then(respuesta => {console.log("no hubo errores en la promesa")
                        console.log(respuesta);    })
    .catch(error => {console.log("Error en la promesa"); 
                    console.log(error)
       });

