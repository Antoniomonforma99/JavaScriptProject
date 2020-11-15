import { Usuario } from "../Modelo/Usuario";
import { UsuarioAbonado } from "../Modelo/UsuarioAbonado";

export class AdonadoRepo{
    listaAbonados;

    constructor(listaAbonados){
        this.listaAbonados = listaAbonados;
    }

    addAbonado(usuarioAbonado){
        return this.listaAbonados.push(usuarioAbonado);
    }

    buscarPorDni(dni){
        let usuarioDevuelto;
        
        this.listaAbonados.forEach(UsuarioAbonado => {
            if (UsuarioAbonado.dni == dni) {
                usuarioDevuelto = UsuarioAbonado
            }
        });

        return usuarioDevuelto;
    }

    buscarPorNumPlaza(numPlaza){
        let usuarioDevuelto;

        this.listaAbonados.forEach(UsuarioAbonado => {
            if (UsuarioAbonado.numPlaza == numPlaza) {
                usuarioDevuelto = UsuarioAbonado
            }
        });

        return usuarioDevuelto;
    }
}