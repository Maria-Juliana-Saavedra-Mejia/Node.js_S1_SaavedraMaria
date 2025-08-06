// trainers.js (Node.js)

const readline = require('readline-sync');

function Pedro() {
    console.log(`
Bienvenido trainer Pedro Gómez
1. Agregar notas a clase P_1
2. Agregar notas a clase P_2
3. Ver horario
4. Salir
    `);
    const eleccion = readline.question("Digite el número de su elección 😃: ");

    if (eleccion == 1 || eleccion == 2) {
        console.log("Bienvenido a la clase P_" + eleccion);
        console.log("¿Qué nota desea ingresar?");
        const tipo = readline.question("1. Proyecto\n2. Examen\n3. Otros\nSeleccione una opción: ");
        for (let i = 1; i <= 5; i++) {  // ejemplo reducido de 5 notas
            const nota = readline.question(`Ingrese la nota #${i}: `);
        }
    } else if (eleccion == 3) {
        console.log("🕐 Horario: Lunes a Viernes, 8am a 4pm.");
    } else {
        console.log("👋 Saliendo del menú del trainer.");
    }
}

function Juan() {
    console.log("Bienvenido Juan Pérez 👨‍🏫");
    console.log("No hay acciones definidas aún.");
}

module.exports = {
    Pedro,
    Juan
};
