const prompt = require('prompt-sync')();

function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");
    return prompt("Selecciona una opción: ");
}

function inputNombre(mensaje = "Ingresa un nombre: ") {
    return prompt(mensaje);
}

function inputId(mensaje) {
    return parseInt(prompt(mensaje));
}
function agregadoCorrectamente(){
    console.log(" Elemento agregado correctamente.");
}
function noEncontrado(){
    console.log(" No se encontró un elemento con ese ID.");
} 
function idEditar(){
    const cambio = parseInt(prompt("Digite el id del nombre a editar: "));
    return cambio
}
function EditarNombre(){
    const nuevoNombre = inputNombre(`Digite el nuevo nombre: `); 
    return nuevoNombre
}
function ActulizacionCorrecta(){
    console.log("Nombre actualizado correctamente.");
}
function Eliminado(){
    console.log(" Elemento eliminado correctamente.");
}
function idEliminar(){
    const id = inputId("Digite el id del nombre a eliminar: ");
    return id
}
module.exports = { 
    showMenu, 
    inputNombre, 
    inputId,
    agregadoCorrectamente, 
    noEncontrado, 
    idEditar,
    EditarNombre,
    ActulizacionCorrecta,
    Eliminado,
    idEliminar,
 };
