import { Usuario } from ".Usuario.js";
export class Administrador extends Usuario{
    clave;

    constructor(nombre, id, clave){
        super(nombre, id);
        this.clave = clave;
    }
}