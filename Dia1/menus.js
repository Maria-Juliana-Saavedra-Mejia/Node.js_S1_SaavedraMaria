// menus.js (Node.js)

function menuPrincipal() {
    console.log(`
=======================================
======= Bienvenido a Campuslands ✨😁 =========
=======================================
======= Estas son las opciones ==========
=======================================
1. Camper
2. Trainer
3. Coordinador
=======================================
`);
}

function menuEstudiante() {
    console.log(`
===================================
======= ¿Qué desea hacer? 😃 =======
===================================
1. Inscripción
2. Ingresar al Perfil
3. Salir de Campus
===================================
`);
}

function menuTrainer() {
    console.log(`
===================================
======= Perfil del Trainer 💼 =======
===================================
1. Pedro Gómez
2. Juan Pérez
3. Salir
===================================
`);
}

module.exports = {
    menuPrincipal,
    menuEstudiante,
    menuTrainer
};
