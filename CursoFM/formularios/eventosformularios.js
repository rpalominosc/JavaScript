const formulario = document.forms['formulario-donacion'];

// Evento submit

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
});

// Evento Change

formulario.pais.addEventListener('change', (e)=>{
    console.log('el pais cambió');
    console.log('el nuevo valor es '+e.target.value);
});

formulario['cantidad-5'].addEventListener('change', ()=>{
    console.log('la cantidad cambió');
});

formulario['cantidad-10'].addEventListener('change', ()=>{
    console.log('la cantidad cambió');
});

// Evento Focus

formulario.correo.addEventListener('focus', ()=>{
    console.log('este es el foco ahora');
})

// Evento Keydown
formulario.correo.addEventListener('keydown', (e)=>{
    console.log(e);
})

//  Evento Keyup
formulario.correo.addEventListener('keyup', (e)=>{
    console.log(e);
})