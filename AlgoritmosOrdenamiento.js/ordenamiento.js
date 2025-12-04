// const frutas = ["banano", "mango", "lulo", "guayaba", "mora","fresa"]
// const precios = [45000,89000,12000,65000,35000]

// // console.log(precios)
// // precios.sort(); //teamsort : mergeSort y Insertion Sort O(nlog n)
// // console.log(precios)

// //ordenar de manera descendente
// console.log(precios)
// precios.sort((a,b)=> b-a);
// console.log(precios)    

// //oredenar el vector de frutas por el tamaño o cantidad de letras

// const frutas2 = ["banano", "mango", "lulo", "guayaba", "mora","fresa"]
// console.log(frutas2)
// //frutas2.sort((fr1,fr2) => fr1.length - fr2.length);
// frutas2.sort((fr1,fr2) => {
//     const dif = fr1.length - fr2.length;
//     if (dif !==0)
//         return dif;
//     else  
//         return (fr1 > fr2) ? 1 : -1 ;
//     })

//     console.log(frutas2)



const campers = [
    {
        nombre : "diomedez",
        edad : 25,
        score : 5
    },
    {
        nombre : "maria",
        edad : 19,
        score : 81
    },
    {
        nombre : "victor",
        edad : 30,
        score : 75
    }
]

console.log(campers)
campers.sort((c1,c2)=> c2.score - c1.score);
console.log(campers)