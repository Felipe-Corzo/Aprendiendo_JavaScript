// const paises = new Array(5);

// paises[0]= "Colombia";
// paises[1]= "Costa rica"
// paises[2]="Amsterdan"
// paises[5]="brasil"
// for(let i = 0; i<paises.length; i++) {
//     console.log(paises[i]);
// }


// //Declaraciones de array

// const frutas = []; // array vacio
// const mixtos = ["papas","patacones", "chicharrones", "arepas"];

// Declaracion con array y elemenos especificos

const frutasExoticas = new Array("kiwi","chontaduro","granada");

// // Declaracion con Array.From() 
// const letras = Array.from("hola"); // => devulve  ['h','o','l','a']

// //declarando array con array.of
// const numeros = Array.of=(7) //[7]
// const numeros2 = Array.of =(5,10,20) // [5,10,20]

// // recorriedo el array por sus elementos
// for (let i of frutasExoticas){
//     console.log(i)
// }


// //METODOS PARA MANEJAR LOS ARRAYS 

// //PUSH : agregar al final

// numeros.push(13);
// console.log(numeros)

// // METODO unshift : agrega al inicio
// numeros2.unshift(80);

// //METODO POP : Elimina al final de la fila 
// numeros.pop();

// // METODO SHIFT : ELIMINA EL PRIMER ELEMENTO 
// numeros.shift();

+
//METODOS FUNCIONALES
        // METODO map()   : recorre el array y le aplica una funcion a cada elemento

console.log(frutasExoticas.map(fruta => fruta.toUpperCase()));


        // METODO FILTER : crea un  nuevo array con todos los elementos que cumplen la condicion de una funcion (verdadero o falso)

console.log(frutasExoticas.filter(f => {
    let cantidadVocales = 0
    for( let i of f){
        switch(i){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                ++cantidadVocales;
                break;
        }
    }
    return cantidadVocales > 3;
}));


        //METDO foreach  :  es un metodo de los arrays que va a ejecutar una funcion por cada elemento del array sin hacer ningun return

        //emails.foreach(e => enviarEmail(e));
    frutasExoticas.forEach(f => console.log(f.toUpperCase()));

    //METODO SOME : VERIFICA SI ALMENOS UN ELEMENTO CUMPLE CON LA CONDICION. (DEVUELVE TRUE OR FALSE)
    frutasExoticas.some();

    // METODO EVERY : VERIFICA SI TODOS LOS ELEMENTOS DEL ARRAY CUMPLEN CON LA CONDICON
    frutasExoticas.every();

    // METODO FIND()  : busca y devuelve el primer elemento que cumpla con la condicion
    frutasExoticas.find();
    

