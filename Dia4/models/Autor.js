//Autor conoce sus libros y cada libro conoce su Autor
class Autor{
    constructor(id , nombre){
        this.id=id;
        this.nombre=nombre;
        this.libros=[];
    }
    agregarLibro(libro){
        if(this.libros.includes(libro)==false){
            this.libros.push(libro);
            libro.setAutor(this)
        }
    }
    eliminarLibro(libro) {
    this.libros = this.libros.filter(l => l.isbn !== libro.isbn);
    if (libro._autor === this) {
      libro.eliminarAutor();
    }
  }
}

module.exports=Autor;