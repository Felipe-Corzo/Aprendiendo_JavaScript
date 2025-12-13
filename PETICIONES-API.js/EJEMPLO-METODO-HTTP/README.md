# Ejemplo Método HTTP - Gestor de Campers

## Problemas Identificados y Solucionados

### 🔧 Errores Corregidos:

1. **Errores de sintaxis en `api.js`**:
   - Error en el throw statement del método GET
   - Headers mal formateados con espacios en `application / json`
   - Faltaban métodos PUT y DELETE para operaciones completas CRUD

2. **Función `procesarModulos` incompleta**:
   - Faltaba el `return modulos;` al final de la función
   - Error de sintaxis con punto y coma extra
   - Variable mal nombrada `nombModulo` en lugar de `nombre`

3. **Funciones faltantes en `ejemplo-rest-api.js`**:
   - No estaban implementadas `actualizarCamper` y `funcionEliminarCamper`
   - Faltaban funciones de edición y eliminación en la interfaz

4. **Servidor backend inexistente**:
   - El código frontend estaba configurado para `localhost:3000` pero no había servidor
   - Faltaba toda la infraestructura backend (Express, rutas, manejo de archivos JSON)

### ✅ Soluciones Implementadas:

1. **Servidor Express completo** (`server.js`):
   - API REST con rutas para GET, POST, PUT, DELETE
   - Manejo de archivo JSON como base de datos
   - Validaciones y manejo de errores
   - CORS habilitado para desarrollo

2. **Frontend corregido** (`ejemplo-rest-api.js`):
   - Todas las funciones CRUD implementadas
   - Manejo correcto de módulos
   - Validaciones de formulario
   - Funciones de editar y eliminar campers

3. **API Client mejorado** (`api.js`):
   - Métodos completos para todas las operaciones
   - Headers corregidos
   - Manejo de errores mejorado

4. **Configuración del proyecto** (`package.json`):
   - Dependencias necesarias (express, cors)
   - Scripts para ejecutar el servidor

## 🚀 Cómo usar la aplicación:

### 1. Iniciar el servidor:
```bash
cd "/home/camper/Aprendiendo JavaScript/PETICIONES-API.js/EJEMPLO-METODO-HTTP"
npm start
```

### 2. Acceder a la aplicación:
- **Interfaz web**: http://localhost:3000/
- **API REST**: http://localhost:3000/campers

### 3. Funcionalidades disponibles:

#### ✅ **Cargar Campers**
- Hace una petición GET para obtener todos los campers del JSON
- Los muestra en una tabla con información completa

#### ✅ **Guardar Camper**
- Hace una petición POST para crear un nuevo camper
- **Validaciones incluidas**:
  - Nombre, edad y sexo son obligatorios
  - Edad mínima de 18 años
  - Módulos opcionales en formato: `nombre-puntaje` (uno por línea)

#### ✅ **Editar Camper**
- Al hacer clic en "Editar" en la tabla, los datos se cargan en el formulario
- Al guardar con un ID existente, hace una petición PUT
- Actualiza el registro en el JSON

#### ✅ **Eliminar Camper**
- Al hacer clic en "Eliminar" se solicita confirmación
- Hace una petición DELETE
- Remueve el registro del JSON

### 4. Formato de módulos:
```
Java-85
Spring Boot-90
Base de Datos-78
```

### 5. Datos de ejemplo en `db.json`:
El archivo ya contiene algunos campers de ejemplo para probar la funcionalidad.

## 🧪 Probar la API con curl:

```bash
# Obtener todos los campers
curl -X GET http://localhost:3000/campers

# Crear un nuevo camper
curl -X POST http://localhost:3000/campers \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "edad": 25,
    "sexo": "masculino",
    "modulos": [
      {"id": 1, "nombre": "Java", "puntaje": 85}
    ]
  }'

# Actualizar un camper (cambiar 1 por el ID deseado)
curl -X PUT http://localhost:3000/campers/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez Actualizado",
    "edad": 26,
    "sexo": "masculino",
    "modulos": []
  }'

# Eliminar un camper (cambiar 1 por el ID deseado)
curl -X DELETE http://localhost:3000/campers/1
```

## 🎯 Resultado:
La aplicación ahora funciona completamente:
- ✅ Carga campers desde el JSON
- ✅ Guarda nuevos campers en el JSON
- ✅ Actualiza campers existentes en el JSON
- ✅ Elimina campers del JSON
- ✅ Todas las validaciones funcionando
- ✅ Interfaz responsive y funcional

El problema principal era la falta del servidor backend y los errores de sintaxis que impedían el funcionamiento correcto de las peticiones HTTP.
