
// sintaxis JSON

const nuevojson = '{"nombre":"luis", "apellido" : "gonzales", "edad": 34, "ocupacion":"aux administrativo"}';

// objeto javaScript
const camper = {
    nombre:"felipe",
    apellido :"corzo",
    edad : 26,
    ocupacion : "estudiante"

};

// cambiar objeto a json
const mijson =  JSON.stringify(camper);

//  Cambiar un JSON a Objeto javascript
const strjson = '{"nombre":"luis", "apellido" : "gonzales", "edad": 34, "ocupacion":"aux administrativo"}';

const objetluis = JSON.parse(strjson)
