//FOR
num = 7
for (let i = 1; i<=10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
// FOR .. OF
//SE USA PARA RECORRER VECTORES O ARRAYS
let frase_result = ""
let frase = "sintaxis"; 
let frase_min = frase.toLowerCase();
for(let letra of frase_min) {
    switch(letra){
        case 'a':
        case 'e':
        case 'i' :
        case 'o' :
        case 'u':
            break;
        default:
            frase_result += letra;

    }
}
console.log(frase_result)

//FOR ... IN
//SE USA PARA RECORRER LAS PROPIEDADES DE UN OBJETO

//WHILE
let contraseña = "121212"
let secreta = "juanSapo"
let pal = ""
let i = "-1"
while (contraseña !== "juanSapo"){
    console.log("incorrecta... intente nuevamente")
    pal += secreta.charAt(++i);
    contraseña = pal
}
console.log("Bienvenido al manicomio")

