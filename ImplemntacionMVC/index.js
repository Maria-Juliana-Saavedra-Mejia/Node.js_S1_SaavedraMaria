const { showMenu } = require('./Views/menus');
const { createItem, listItems, updateItem, deleteItem } = require('./Controlers/dataController');

let booleanito = true;

while (booleanito) {
    const opcion = showMenu();
    switch (opcion) {
        case "1":
            createItem();
            break;
        case "2":
            listItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            booleanito = false;
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida.");
    }
}
