export class Ticket{
    plaza;
    fechaEntrada;
    fechaSalida;
    matriculaVehiculo;
    importe;
    pin;
    identificador;

    constructor(plaza, fechaEntrada, matriculaVehiculo, identificador){
        this.plaza = plaza;
        this.fechaEntrada = fechaEntrada;
        this.matriculaVehiculo = matriculaVehiculo;
        this.identificador;
    }

}