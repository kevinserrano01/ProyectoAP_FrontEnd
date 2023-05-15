export class persona{
    id?: number; // Dato no necesario
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre
        this.apellido = apellido
        this.img = img
    }
}