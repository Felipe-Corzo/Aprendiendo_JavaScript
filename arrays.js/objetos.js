// const persona= {
//     nombre: 'felipe',
//     edad : '23',
//     altura : '1.80 m',
//     peso : '80 kg',
//     hobbit : () => console.log("la,la,la"),
//     direccion : [{
//         calle:56,
//         numero : "23 -45 ",
//         barrio : "zana franca"
//     },
// {
//     calle:33,
//         numero : "105-544 ",
//         barrio : "cuadra play"
// }]
// };

// console.log(typeof(persona))
// console.log(persona.altura)
// console.log(persona.direccion[1].barrio)
// persona.hobbit();

const figura ={
    ancho: 20 ,
    alto : 15,
    tipo : "circulo",
    area : (tipoFigura) => {
        switch(tipoFigura.toLowerCase()) {
            case "triangulo":
                return this.ancho * this.alto /2;
            case "cuadrado":
                return this.ancho * this.alto ;
            default: 
                return NaN;
        }
    }
}

console.log("Area de la figura ", figura.area("cuadrado"));