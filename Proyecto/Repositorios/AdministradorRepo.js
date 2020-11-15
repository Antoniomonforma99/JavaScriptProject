export class AdministradorRepo{
    listadAdmin;

    constructor(listadAdmin){
        this.listadAdmin = listadAdmin;
    }

    addAdmin(admin){
        return this.listadAdmin.push(admin);
    }

    buscarPorClave(clave){
        let devuelto;

        this.listadAdmin.forEach(Administrador => {
            if (Administrador.clave == clave) {
                devuelto = Administrador;
            }
        });
        return devuelto;
    }
}