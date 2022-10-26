class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
}

getFullName(){
    return (`Mi nombre es ${this.nombre} ${this.apellido}`)
}

//Agregar mascota
addMascota(mascota){
    this.mascotas.push(mascota);
}

countMascotas(){
    
}

//Agregar libro
addBook(titulo,autor){
    this.libros.push(titulo,autor)
}

getBookNames(){
}

}

const usuario1 = new Usuario("Jorgelina","Navarro");

usuario1.addMascota("perro");
usuario1.addMascota("gato");

usuario1.addBook("El Tunel","Ernesto Sabato")


console.log(usuario1)



