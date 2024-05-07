class Usuario {
    constructor(nombre, password){
        this.nombre = nombre;
        this.password = password;

    }
    obtenerPost(){
        const posts =["post1",'post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(usuario,password,permisos){
        super(usuario,password);
        this.permisos= permisos;
    }

}
const usuario = new Usuario('Rodrigo','123');
console.log(usuario.obtenerPost());

const usuario2 = new Moderador('arturo','456', ['borrar','escritura']);
console.log(usuario2.permisos);