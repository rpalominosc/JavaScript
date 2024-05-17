// datos.json
const datos = `
{
    "id":1,
    "nombre":"Rodrigo Palominos",
    "suscriptor_activo": true,
    "posts":[
        {
            "id":1,
            "titulo":"Titulo 1er.Post",
            "texto":"Texto Post 1"
        },
        {
            "id":1,
            "titulo":"Titulo 2o.Post",
            "texto":"Texto Post 2"
        }
    ]
}`;

//JSON.parse(datos); -> hace trasformacion a objeto Javascript
// console.log(JSON.parse(datos));

/* stringify
    Permite pasar un objeto JS y devuelve una cadena de texto con formato JSON
*/

const usuario ={
    nombre:'Ignacio',
    correo:'rorro@acme.com',
    coloresfavoritos:['rojo', 'negro', 'fucsia']

};
console.log(JSON.stringify(usuario));