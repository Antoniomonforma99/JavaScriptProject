export class Vehiculo{
    matricula;
    tipo;
    usuario;
    id;
    ticket;

    constructor(matricula, tipo, usuario, id, ticket){
        this.matricula = matricula;
        this.tipo = tipo;
        this.usuario = usuario;
        this.id = id;
        this.ticket = ticket;
    }
}