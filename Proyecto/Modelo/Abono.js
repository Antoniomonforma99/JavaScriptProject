export class Abono{
    pin;
    tarifa;
    fechaInicio;
    fechaFin;
    abonado;

    constructor(pin, tarifa, fechaInicio, fechaFin, abonado){
        this.pin = pin;
        this.tarifa = tarifa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.abonado = abonado
    }
}