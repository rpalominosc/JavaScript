class Usuario {
    constructor(nombre, correo){
        this.nombre=nombre;
        this.correo=correo;

    }
    static borrar(id_usuario){
        console.log(`El ususario id: ${id_usuario} ha sido borrado de la BD`)
    }
}

//const usuario=new Usuario('rodrigo','rpc@acme.com');
//usuario.borrar(1);

Usuario.borrar(6);