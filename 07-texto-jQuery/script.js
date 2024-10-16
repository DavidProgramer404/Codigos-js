$(document).ready(function(){
    // Seleccionar todos los párrafos
    $("p").each(function(){
        // Obtener el contenido del párrafo
        const contenido = $(this).text();

        //Verificar la longitud del texto
        if(contenido.length > 100){
            //Resaltar el parrafo si tiene mas de 100 caracteres
            $(this).css("background-color", "blue");
        }
    });
});