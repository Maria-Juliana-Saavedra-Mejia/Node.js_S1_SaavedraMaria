const { loadData, saveData } = require('../Models/dataModel');
const { inputNombre, inputId } = require('../Views/menus');

function createItem() {
    const nombre = inputNombre();
    const id = Date.now();
    const data = loadData();
    data.push({ id, nombre });
    saveData(data);
    console.log(" Elemento agregado correctamente.");
}

function listItems() {
    const data = loadData();
    console.table(data);
}

function updateItem() {
    const data = loadData();
    console.table(data);

    const id = inputId("Digite el id del nombre a editar: ");
    const item = data.find(e => e.id === id);

    if (!item) {
        console.log(" No se encontró un elemento con ese ID.");
        return;
    }

    const nuevoNombre = inputNombre(`Nuevo nombre (actual: ${item.nombre}): `);
    item.nombre = nuevoNombre;
    saveData(data);
    console.log(" Elemento actualizado correctamente.");
}

function deleteItem() {
    const data = loadData();
    console.table(data);

    const id = inputId("Digite el id del nombre a eliminar: ");
    const existe = data.some(e => e.id === id);

    if (!existe) {
        console.log(" No se encontró un elemento con ese ID.");
        return;
    }

    const nuevaData = data.filter(e => e.id !== id);
    saveData(nuevaData);
    console.log(" Elemento eliminado correctamente.");
}

module.exports = { createItem, listItems, updateItem, deleteItem };