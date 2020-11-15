import moment from 'moment';
export class ParkingRepo{
    parking;
    vehiculoRepo;
    abonadoRepo;
    ticketRepo;

    constructor(parking, vehiculoRepo, abonadoRepo, ticketRepo){
        this.parking = parking;
        this.vehiculoRepo = vehiculoRepo;
        this.abonadoRepo = abonadoRepo;
        this.ticketRepo = ticketRepo;
    }

    plazasDispo(){
        let contAbonado = 0;
        let contTicket = 0;

        this.abonadoRepo.listaAbonados.forEach(Abonado => {
            contAbonado++
        });

        this.ticketRepo.listaTickets.forEach(Ticket => {
            contTicket++;
        });

        let plazasOcupadas = contAbonado + contTicket;
        let plazasDisponibles = this.parking.numPlazas - plazasOcupadas;

        if (plazasOcupadas < this.parking.numPlazas) {
            console.log(`Aun quedan ${plazasDisponibles} plazas libres.`)
            return true;
        }else{
            console.log("No hay plazas disponibles");
            return false;
        }
    }

    estadoParking(){
        let contAbonado = 0;
        let contTicket = 0;
        let numPlazasAbonados = [];
        let numPlazasTicket = [];

        this.abonadoRepo.listaAbonados.forEach(UsuarioAbonado => {
            contAbonado++;
            numPlazasAbonados.push(UsuarioAbonado.numPlaza)
        });
        
        this.ticketRepo.listaTickets.forEach(Ticket => {
            contTicket++;
            numPlazasTicket.push(Ticket.numPlaza)
        });

        let plazasOcupadas = contAbonado + contTicket;

        console.log(`Hay ${plazasOcupadas} plazas ocupadas \nHay ${contAbonado} plazas ocupadas por abonados. \nHay ${contTicket} plazas
        ocupadas por no abonados`);
        console.log(`Las plazas ocupadas por no abonados son ${numPlazasTicket}`);
        console.log(`Las plazas ocupadas por abonados son ${numPlazasAbonados}`);
    }

    precioEstancia(matricula, pin){
        let vehiculo = this.vehiculoRepo.buscarPorMatricula(matricula);
        let ticket  = this.ticketRepo.buscarPorPin(pin);

        ticket.fechaSalida =  newDate();
        
        let minutosEstancia = (ticket.fechaSalida - ticket.fechaEntrada) / 60000;
        
        if (vehiculo.tipo == "Turismo") {
            return ticket.precio = minutosEstancia * 0.12;
        } else if (vehiculo.tipo == "Motocicleta"){
            return ticket.precio = minutosEstancia * 0.08;
        }else if (vehiculo.tipo == "Caravana"){
            return ticket.precio = minutosEstancia * 0.45;
        }
    }

    facturacion (fecha, fecha1, listaTicketsPagados){
        let pagados = [];
        listaTicketsPagados.forEach(Ticket => {
            if (Ticket.fechaSalida.isBetween(fecha, fecha1)) {
                console.log(Ticket);
                pagados.push(Ticket);
            }
        });

        facturados.forEach(Ticket => {
            console.log(`El vehículo con número de matrícula ${Ticket.matricula} estacionado en la plaza número ${Ticket.plaza} \n
            Llegó el día ${Ticket.fechaEntrada.format('llll')}. \n Saió el dia ${Ticket.fechaSalida.format('llll')} y pagó un importe de ${Ticket.precio} euros`)
        });
    }
}