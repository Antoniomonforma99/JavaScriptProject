export class AbonoRepo {
    listadoAbonos;

    constructor(listadoAbonos){
        this.listadoAbonos = listadoAbonos;
    }

    addAbono(abono){
        return this.listadoAbonos.push(abono);
    }

    buscarPorPin(pin){
        let devuelto;
        this.listadoAbonos.forEach(Abono => {
            if (Abono.pin == pin) {
                devuelto = Abono;
            }
        });
        return devuelto;
    }
}