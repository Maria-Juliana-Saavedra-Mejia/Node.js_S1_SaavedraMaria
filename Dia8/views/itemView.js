// La vista busca centralizar toda la interaccion
// por consola, lo cual incluye menú, prompts y 
// formatos de salida.

const ItemView ={
    mostrarMenu(){
        console.log("\n=== CRUD de Items (MVC, consola) ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver pot ID")
        console.log("4) Actualizar")
        console.log("5) Eliminar")
        console.log("0) Salir")
    },
    pedirOpcion(prompt){
        const op = prompt("Elige una opcion: ");
        return op.trim();
    } 
}