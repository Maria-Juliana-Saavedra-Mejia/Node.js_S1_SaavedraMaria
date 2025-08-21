// siempre se explica de afuera hacia adentro

const prompt = require ('prompt-sync')();

class UsuarioView{
    pedirDatosUsuario(){
        const nombre = prompt ('Nombre: ');
        const correo = prompt ('Correo: ');
        const edad = parseInt (prompt('Edad: '));
        return { // manda el diccionario con los datos ingresados por el usuario 
            nombre, correo, edad
        }
    }
    mostrarMensaje(msg){
        console.log (msg)
    }
    mostrarUsuarios(usuarios){
        console.log("\n-- Lista de usuario --\n")
        usuarios.forEach (u =>{ // u es cada uno de los objetos dentro de la lista y lo que va a hacer es recorrerlo uno por uno 
            console.log(`Nombre: ${u["nombre"]}, \nCorreo: ${u["correo"]}, \nEdad: ${u["edad"]}`)
        })
    }
}
module.exports=UsuarioView;