export class AdministradorRepo{
    listadAdmin;

    constructor(listadAdmin){
        this.listadAdmin = listadAdmin;
    }

    addAdmin(admin){
        return this.listadAdmin.push(admin);
    }

    delAdmin(admin){
        return this.listadAdmin.splice(this.listadAdmin.indexOf(this.listadAdmin.buscarPorClave(admin.clave), 1));
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