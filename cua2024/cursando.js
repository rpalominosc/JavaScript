$( document ).ready(function() {
    console.log( "document loaded" );


$("#errors").html('Cambia ahora');

$('#userName').before('<span class="error">Nombre Usuario obligatorio </span>');

$('#changeStyle').click(function(){
    $('body').toggleClass('altStyle')
})
// $('body').css('font-size', '100%');

// $('#changeStyle').css({
//     'background-color':'orange', 
//     'color':'white',
//     'border': '2px solid #FE0037'
// });
// $(document).click(function(evt) {
//     var xPos = evt.pageX;
//     var yPos = evt.pageY;
//     alert('X:' + xPos + ' Y:' + yPos);
//     }); // end click

}); 