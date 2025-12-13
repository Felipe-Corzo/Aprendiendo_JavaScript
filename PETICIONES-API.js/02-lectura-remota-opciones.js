const opciones = {
    method: "GET", 
    Headers: {"content-type": "application/json;cahtset=UTF-8"},};

    const fecthRes = fetch ("https://jsonplaceholder.typicode.com/todos/1");

fecthRes 
    .then(res => res.json())
    .then(datos => console.log(datos))
    .catch(error => console.log("ERROR: " + error));

async function getData() {
    try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await result.json();
    console.table(datos);
} catch (error) {
    console.error("ERROR: " + error);
}

}

setTimeout(getData, 2000);