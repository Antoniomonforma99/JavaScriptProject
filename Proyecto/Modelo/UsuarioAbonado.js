import { Usuario } from "./Usuario.js";
export class UsuarioAbonado extends Usuario{
    dni;
    numPlaza;
    numTarjeta;
    vehiculo;
    abono;

    constructor(nombre, id, dni, numPlaza, numTarjeta, vehiculo, abono){
        super(nombre,id)
        this.dni = dni;
        this.numPlaza = numPlaza;
        this.numTarjeta = numTarjeta;
        this.vehiculo = vehiculo;
        this.abono = abono;
    }
}