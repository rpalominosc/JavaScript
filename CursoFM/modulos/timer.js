//    ****TIMEOUT****

//window.setTimeout(()=>{
//    console.log('Hello');
//},5000);

// Otra forma 

//const saludo = () => {
//    console.log('Buen dia');
//};
//
//
//let id;
//const iniciar= () => {
//    console.log('Iniciando timer');
//    id=setTimeout(saludo,5000);
//};
//
//const parar= () => {
//    console.log('Parando timer');
//    clearTimeout(id);
//}

//  **** setInterval ***** 


let cuenta=0;
let id;
const iniciar= () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000)
};

const parar = () => {
    console.log('Parando contador');
    clearInterval(id);
};