const promesa = new Promise((resolve,reject) => {
    //Acción que se ejecutara
    setTimeout(() => {
        const exito = true;

        if (exito){
            resolve('La operacion tuvo exito');
        }else {
            reject('La operación no tuvo exito');
        }

    },4000);

});

promesa.then((mensaje) => {
    alert(mensaje);

})

promesa.catch((mensaje) => {
    alert(mensaje);
})