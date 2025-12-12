const API_URL = "http://localhost:3000/campers";

// METODO GET
export async function obtenerTodosCampers() {
    try {
        console.log("GET: Obtener datos de los campers");
        const respuesta = await fetch(API_URL);

        if(!respuesta.ok) {
            throw new Error("Error GET: " , respuesta.status, respuesta.statusText);
        }

        const campers = await respuesta.json();
        return campers;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}