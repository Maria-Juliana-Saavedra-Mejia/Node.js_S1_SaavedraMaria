
const readline = require('readline-sync');
const campers = [];

function inscripcion() {
    const idn = readline.question("Digite su número de identificación 🎂: ");
    const nombre = readline.question("Digite sus nombres 🤳: ");
    const apellido = readline.question("Digite sus apellidos 😜: ");
    const direccion = readline.question("Ingrese su dirección 🏠: ");
    const acudiente = readline.question("Ingrese el nombre de su acudiente 👨‍👩‍👧‍👦: ");
    const numcel = readline.question("Ingrese su número de celular 📱: ");
    const numfijo = readline.question("Ingrese su número de teléfono fijo ☎️: ");

    campers.push({
        ID: idn,
        Nombre: nombre,
        Apellido: apellido,
        Direccion: direccion,
        Acudiente: acudiente,
        "Numero de celular": numcel,
        "Numero de telefono fijo": numfijo,
        Estado: {
            "En proceso": false,
            "Inscrito": true
        },
        Curso: ""
    });

    console.log("✅ Inscripción realizada con éxito.");
}

function IngresarPerfil() {
    const id = readline.question("Ingrese su ID para ver su perfil 👀: ");
    const camper = campers.find(c => c.ID === id);
    if (camper) {
        console.log("🧾 Perfil del estudiante:");
        console.log(camper);
    } else {
        console.log("❌ No se encontró un perfil con ese ID.");
    }
}

function salir() {
    console.log("👋 Gracias por visitar Campuslands. ¡Hasta luego!");
}

module.exports = {
    inscripcion,
    IngresarPerfil,
    salir
};
