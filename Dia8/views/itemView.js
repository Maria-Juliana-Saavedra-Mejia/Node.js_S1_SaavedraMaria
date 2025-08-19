// La vista busca centralizar toda la interaccion
// por consola, lo cual incluye menú, prompts y 
// formatos de salida.

const ItemView = {
    mostrarMenu() {
        console.log("\n=== CRUD de Items ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Actualizar");
        console.log("4) Eliminar");
        console.log("5) Salir");
    },

    pedirOpcion(prompt) {
    const op = prompt("Elige una opción: ");
    return op.trim();
    },

    pedirDatosCreacion(prompt) {
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripción: ").trim();
        return { nombre, descripcion };
    },

    mostrarMensaje(msg) {
        console.log("\n=== Mensaje ===");
        if (typeof msg === "string") {
            console.log(msg);
        } else {
            console.dir(msg, { depth: null, colors: true });
        }
        console.log("==============\n");
    },

    idActualizar(prompt) {
        let id = "";
        do {
            id = prompt("Ingrese el ID: ").trim();
        } while (!id);
        return id;
    }
};

module.exports = { ItemView };
