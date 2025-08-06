
const menus = require('./menus');
const campers = require('./campers');
const trainers = require('./trainers');
const readline = require('readline-sync');

// Menú principal
menus.menuPrincipal();

// Entrada de usuario
let n = readline.question("Digite su elección de cómo quiere ingresar 👀: ");

if (n == 1) {
    menus.menuEstudiante();
    let n1 = readline.question("Digite el número de lo que quiere realizar ✔: ");
    if (n1 == 1) {
        campers.inscripcion();
    } else if (n1 == 2) {
        campers.IngresarPerfil();
    } else if (n1 == 3) {
        campers.salir();
    } else {
        console.log("Elección incorrecta");
    }

} else if (n == 2) {
    menus.menuTrainer();
    let n2 = readline.question("Digite el número correspondiente a su perfil 😆: ");
    if (n2 == 1) {
        trainers.Pedro();
    } else if (n2 == 2) {
        trainers.Juan();
    } else {
        console.log("Elección incorrecta");
    }

} else {
    console.log("Elección incorrecta");
}
