// Modelo que sea escalable y eficiente
const connectDB = require('../db'); 
// se importa el archivo que tiene la conexión de la base de datos en una variable 

class UserModel{ 
    constructor(){ // estructura de datos para la base de datos
        this.schema={ // se crea un diccionario con diferentes llaves y tipos de datos 
            nombre:'string',
            correo:'string',
            edad:'number'
        };
    }



    validar(usuario){ 
        // se validan los usuarios, retirna false si esta un
        //  tipo de dato diferente al que se estipulo en el costructor
        for(let campo in this.schema){
            if (typeof usuario[campo] !== this.schema[campo]){
                return false;
            }
        }
        return true;
    }
    async crear(usuario){
        if(!this.validar(usuario)){ // Va a el validar y si es false bota el error
            throw new Error('Error en el tipo de datos ingresados.');
        }
        const db = await connectDB.connect(); // Conexion a base de datos
        const result = await db.collection('usuarios').insertOne(usuario); // entra a usuarios y agrega un nuevo objeto
        let idObjeto = result.insertedId; // agrega el id al objeto
        await connectDB.disconnect(); // desconecta base de datos
        return idObjeto; // regresa el nuevo objeto que se creo 
    }
    async listar(){
        const db = await connectDB.connect(); // Conexión base de datos
        let arreglo = await db.collection('usuarios').find().toArray(); // crea en un array la data 
        await connectDB.disconnect(); // dasconecta de la base de datos
        return arreglo; // muestra la información 
    }
    
}
module.exports= UserModel;