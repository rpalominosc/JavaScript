const agregaCaja = () => {
    /* Se Crea el elemento
       createElement - Recibe como parámetro una cadema de texto con 
       la etiqueta que queremos crear */
    
    const nuevacaja = document.createElement('div');

    /*  Agregar texto y atributos

     */

    nuevacaja.innerText= 'Nueva Caja!';
    //nuevacaja.setAttribute('id', 'nuevo-id');
    nuevacaja.setAttribute('class', 'caja activa');

    /*  Agregar el elemento al DOM 

        */

    const contenedor= document.getElementById('contenedor1');

    /* appendchild agrega un elemento al final

    */
    //contenedor.appendChild(nuevacaja);

    /*  .insertAdjacentElement  Permite agregar un elemento
    Valores:
        afterbegin
        beforebegin (antes del elemento padre)
        beforeend ultimo elemento
        afterend (despues del elemeno padre)
       
    */

    // contenedor.insertAdjacentElement('beforeend', nuevacaja);

    /* 
       .replacewith() - Permite reemplazar un elemento por otro
    */

    document.querySelector('#contenedor1 .caja').replaceWith(nuevacaja);
    



};
