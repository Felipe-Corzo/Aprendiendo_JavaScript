//es una estructura con llave : valor

const articulos = new Map();

articulos.set("aguacate", 3000).set("banano", 700);
// acceder al valor de una llave

console.log(articulos.get("banano"));

// verificar existencia de una llave


console.log(articulos.has("mora"));

//eliminar llave : valor

console.log(articulos.delete("banano"));

// tamaño del mapa
console.log(articulos.size);

//recorrer mapa dos opiones 

for(let [k,v] of  articulos) console.log(`${k} -> ${v}`);

articulos.forEach((v,k)=> console.log(`${k} -> ${v}`));

// solucion al problema de lanzamiento de dados 
const dados = new Map();
let dado1 , dado2, resultado;
for (let i = 1; i <= 10_000_000; i++) {
    dado1= Math.floor(Math.random() *6 ) +1 ;
    dado2= Math.floor(Math.random() *6 ) +1 ;

    resultado = dado1 + dado2;
    
    dados.set(resultado, (dados.get(resultado)?? 0 )+1);

}

let mayor = 0, n;
for(let [num, veces] of dados. entries()){
    if (veces>mayor) mayor = veces, n = num;
}

console.log(n);