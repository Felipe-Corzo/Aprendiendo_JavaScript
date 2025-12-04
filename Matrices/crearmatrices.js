function crear_matrices (filas, colum){
    let matriz = [];
    for(let i = 0; i < filas; i++) {
        matriz[i]=new Array(colum); 
    }
    return matriz;
}
function printMatriz(matriz){
    for(let fila of matriz){
        let f = "";
        for(let dato of fila) {
            f+=dato + "\t";
        }
        console.log(f)
    }
}

function llenarMatriz (matriz){
    for(let fila of matriz){
        for(let i = 0; i < fila.length; ++i ) {
            fila[i] = Math.floor(Math.random()*100) +1;
        }
    }
}

let matriz = crear_matrices(8,20);
llenarMatriz(matriz);
printMatriz(matriz);