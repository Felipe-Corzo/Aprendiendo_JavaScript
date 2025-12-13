const API_URL = "http://localhost:3000/campers";

// METODO GET
export async function obtenerTodosCampers() {
    try {
        console.log("GET: Obtener datos de los campers");
        const respuesta = await fetch(API_URL);

        if(!respuesta.ok) {
            throw new Error(`Error GET: ${respuesta.status} ${respuesta.statusText}`);
        }

        const campers = await respuesta.json();
        return campers;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

// METODO POST
export async function createCamper(camper) {
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(camper)
        });

        if (!respuesta.ok){
            throw new Error(`Error al crear campers: ${respuesta.status}`);
        }

        const camperCreado = await respuesta.json();
        console.table(camperCreado);

        return camperCreado;
    } catch (error) {
        console.error("Error al crear un camper", error);
        throw error;
    }
}

// METODO PUT (para actualizar)
export async function actualizarCamper(id, camper) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(camper)
        });

        if (!respuesta.ok){
            throw new Error(`Error al actualizar campers: ${respuesta.status}`);
        }

        const camperActualizado = await respuesta.json();
        console.table(camperActualizado);

        return camperActualizado;
    } catch (error) {
        console.error("Error al actualizar un camper", error);
        throw error;
    }
}

// METODO DELETE
export async function eliminarCamper(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!respuesta.ok){
            throw new Error(`Error al eliminar campers: ${respuesta.status}`);
        }

        console.log(`Camper con id ${id} eliminado correctamente`);
        return true;
    } catch (error) {
        console.error("Error al eliminar un camper", error);
        throw error;
    }
}

export async function eliminarCamperPorId(id) {
    try{
        const respuesta= await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!respuesta){
            throw new Error(`ERROR ${respuesta.status}`);
        }
        return true;
    }catch (error){
        throw error;
    }
    
}