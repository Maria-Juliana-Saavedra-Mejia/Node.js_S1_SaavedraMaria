// models/itemModel.js
// Modelo + repositorio en "memoria" para items
// Crear la clase Item

class Item{
    constructor ({id, nombre, descripcion}){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion
        this.creadoEn= new Date();
        this.actualizadoEn=new Date();
    }

}

// Crear el ItemModel con un arreglo privado y métodos CRUD

class ItemModel{
    constructor(){
        this._items = [];
        this._seq=1;
    }
    crear({nombre, descripcion}){
        const nuevo = new Item({
            id:this._seq++,
            nombre:(nombre || "").trim(),
            //trim() eliminar espacios en blanco 
            // o caracteres específicos al principio y/o al final de una cadena de texto
            descripcion:(descripcion|| "").trim() 
        })
        this._items.push(nuevo);
        return nuevo;
    }
    listar(){
        return[...this._items];// los tres puntos son para crear una copia en memoria.
    }
    buscarPorId(id){
        return this._items.find(i=>i.id === Number(id))|| null;
        // Extrae la lista con los objetos, i se vuelve cada uno de los objetos,
        // a ese se le saca el id y mira que sea el que usted buscó
        // si lo encuentra devuelve el id que encontro, si no lo encuentra bota nulo 
        // (||) significa or
    }
    actualizar(id,{nombre,descripcion}){
        const item = this.buscarPorId(id);
        if(!item) return null;
        if(typeof nombre==="string") item.nombre = nombre.trim(); // verifica que el tipo de texto 
        // de nombre sea string y luego realiza el cambio.
        if(typeof descripcion==="string") item.descripcion = descripcion.trim();
        item.actualizadoEn = new Date();
        return item;
    }

    eliminar(id){
        const idx = this._items.findIndex(i=>i["id"]=== Number(id))// idx-> index -> indice, el find index si no lo encuentra bota -1
        if(idx === -1) return false;
        this._items.splice(idx,1); //en splice() primero se coloca la posicion del elemento y luego la cantidad de elementos a eliminar.
        return true;
    }
}
module.exports={ItemModel}; // exporta los modulos{}