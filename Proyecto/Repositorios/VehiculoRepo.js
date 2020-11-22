export class VehiculoRepo {

    constructor(listadoVehiculos){
        this.listadoVehiculos = listadoVehiculos;
    }

    addVehiculo(vehiculo){
        return this.listadoVehiculos.push(vehiculo);
    }

    delVehiculo(vehiculo){
        return this.listadoVehiculos.splice(this.listadoVehiculos.indexOf(this.buscarPorMAtricula(matricula)), 1);
    }

    buscarPorId(id){
        for (let i = 0; i < this.listadoVehiculos.length; i++) {
            if (this.listadoVehiculos[i].id == id)  {
                return this.listadoVehiculos[i];
                
            }
            
        }
    }

    buscarPorMAtricula(matricula){
        for (let i = 0; i < this.listadoVehiculos.length; i++) {
            if (this.listadoVehiculos[i].matricula == matricula)  {
                return this.listadoVehiculos[i];
                
            }
            
        }
    }
}