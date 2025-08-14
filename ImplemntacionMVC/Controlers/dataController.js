const { loadData, saveData } = require('../Models/dataModel');
const { inputNombre, inputId, agregadoCorrectamente, noEncontrado, idEditar, EditarNombre, ActulizacionCorrecta, Eliminado, idEliminar } = require('../Views/menus');

function createItem() {
    const nombre = inputNombre();
    const id = Date.now();
    const data = loadData();
    data.push({ id, nombre });
    saveData(data);
    agregadoCorrectamente();
}

function listItems() {
    const data = loadData();
    console.table(data);
}

function updateItem() {
    const data = loadData();
    console.table(data);
    const cambio= idEditar();
    const dataEncontrada = data.find(item => item.id === cambio);
    if (!dataEncontrada) {
        noEncontrado();
        return;
    }
    const nuevoNombre = EditarNombre(); 
    dataEncontrada.nombre = nuevoNombre;
    saveData(data); 
    ActulizacionCorrecta()
}

function deleteItem() {
    const data = loadData();
    console.table(data);
    const id =  idEliminar();
    const existe = data.some(e => e.id === id);

    if (!existe) {
        noEncontrado();
        return;
    }
    const nuevaData = data.filter(e => e.id !== id);
    saveData(nuevaData);
    Eliminado();
}

module.exports = { createItem, listItems, updateItem, deleteItem };