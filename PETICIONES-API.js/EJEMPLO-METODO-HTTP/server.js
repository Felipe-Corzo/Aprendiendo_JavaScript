const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Función para leer la base de datos
async function leerDB() {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer la base de datos:', error);
        return { campers: [] };
    }
}

// Función para escribir en la base de datos
async function escribirDB(data) {
    try {
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error al escribir en la base de datos:', error);
        throw error;
    }
}

// Ruta para obtener todos los campers
app.get('/campers', async (req, res) => {
    try {
        const db = await leerDB();
        res.json(db.campers);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los campers' });
    }
});

// Ruta para obtener un camper por ID
app.get('/campers/:id', async (req, res) => {
    try {
        const db = await leerDB();
        const id = parseInt(req.params.id);
        const camper = db.campers.find(c => c.id === id);
        
        if (!camper) {
            return res.status(404).json({ error: 'Camper no encontrado' });
        }
        
        res.json(camper);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el camper' });
    }
});

// Ruta para crear un nuevo camper
app.post('/campers', async (req, res) => {
    try {
        const db = await leerDB();
        const nuevoCamper = req.body;
        
        // Generar ID automáticamente
        const maxId = db.campers.length > 0 ? Math.max(...db.campers.map(c => c.id)) : 0;
        nuevoCamper.id = maxId + 1;
        
        // Validar datos básicos
        if (!nuevoCamper.nombre || !nuevoCamper.edad || !nuevoCamper.sexo) {
            return res.status(400).json({ error: 'Faltan datos requeridos: nombre, edad, sexo' });
        }
        
        db.campers.push(nuevoCamper);
        await escribirDB(db);
        
        console.log('Camper creado:', nuevoCamper);
        res.status(201).json(nuevoCamper);
    } catch (error) {
        console.error('Error al crear camper:', error);
        res.status(500).json({ error: 'Error al crear el camper' });
    }
});

// Ruta para actualizar un camper
app.put('/campers/:id', async (req, res) => {
    try {
        const db = await leerDB();
        const id = parseInt(req.params.id);
        const camperActualizado = req.body;
        camperActualizado.id = id; // Asegurar que el ID no cambie
        
        const indice = db.campers.findIndex(c => c.id === id);
        
        if (indice === -1) {
            return res.status(404).json({ error: 'Camper no encontrado' });
        }
        
        // Validar datos básicos
        if (!camperActualizado.nombre || !camperActualizado.edad || !camperActualizado.sexo) {
            return res.status(400).json({ error: 'Faltan datos requeridos: nombre, edad, sexo' });
        }
        
        db.campers[indice] = camperActualizado;
        await escribirDB(db);
        
        console.log('Camper actualizado:', camperActualizado);
        res.json(camperActualizado);
    } catch (error) {
        console.error('Error al actualizar camper:', error);
        res.status(500).json({ error: 'Error al actualizar el camper' });
    }
});

// Ruta para eliminar un camper
app.delete('/campers/:id', async (req, res) => {
    try {
        const db = await leerDB();
        const id = parseInt(req.params.id);
        
        const indice = db.campers.findIndex(c => c.id === id);
        
        if (indice === -1) {
            return res.status(404).json({ error: 'Camper no encontrado' });
        }
        
        const camperEliminado = db.campers[indice];
        db.campers.splice(indice, 1);
        await escribirDB(db);
        
        console.log('Camper eliminado:', camperEliminado);
        res.json({ mensaje: 'Camper eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar camper:', error);
        res.status(500).json({ error: 'Error al eliminar el camper' });
    }
});

// Ruta principal - servir el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ejemplo-rest-api (1).html'));
});

// Manejo de errores globales
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📊 API REST disponible en http://localhost:${PORT}/campers`);
    console.log(`🌐 Interfaz web en http://localhost:${PORT}/`);
});
