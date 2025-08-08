class Libro{
    constructor (isbn,titulo){
        this.isbn=isbn;
        this.titulo=titulo;
        this._autor=null//Referencia de vuelta
    }
    setAutor(autor){
        this._autor=autor
    }
}

module.exports=Libro;