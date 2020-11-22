export class TicketRepo{
    listadoTickets;

    constructor(listadoTickets){
        this.listadoTickets = listadoTickets;
    }

    generarPIN(){
        return Math.floor((Math.random() * (9000 - 1000) + 1000));
    }

    generarPlaza(){
        return Math.floor((Math.random() * (45 - 1) + 1));
    }


    buscarPorMatricula(matricula){
        for (let i = 0; i < this.listadoTickets.length; i++) {
            if (this.listadoTickets[i].matricula == matricula) {
                return this.listadoTickets[i];
            }else{
                console.log("Matrícula incorrecta");
            }   
        }
    }

    buscarPorMatricula(pin){
        for (let i = 0; i < this.listadoTickets.length; i++) {
            if (this.listadoTickets[i].pin == pin) {
                return this.listadoTickets[i];
            }else{
                console.log("Pin incorrecto");
            }   
        }
    }

    generarTicketAlDepositar(ticket){
        ticket.pin = generarPIN();
        console.log(`Matrícula del vehículo : ${ticket.matriculaVehiculo}`);
        console.log(`El pin de su vehículo es : ${ticket.pin}`);
        console.log(`Fecha Llegada : ${ticket.fechaEntrada}`);
        console.log(`El número de su plaza es : ${ticket.plaza}`);
        this.listadoTickets[this.listadoTickets.indexOf(this.buscarPorPin(ticket.pin))] = ticket;
    }

    addTicket(ticket){
        return this.listadoTickets.push(ticket);
    }

    delTicket(ticket){
        return this.listadoTickets.splice(this.listadoTickets.indexOf(this.buscarPorPin(ticket.pin)), 1);
    }
}