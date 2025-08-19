// El objetvivo del controlador es recibir los
// inputs de la vista, realizar validaciones básiacas y 
// coordinar el modelo 

class ItemController{
    constructor({model,view,prompt}){
        this.model=model;
        this.view=view;
        this.prompt = prompt
    }
    crear(){
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es obligatorio.");
            return;
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Creado con ID ${creado.id}.`);
    }
}
module.exports={ItemController};