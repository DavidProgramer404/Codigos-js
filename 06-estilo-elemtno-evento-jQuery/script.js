$(document).ready(function(){
    // Cambiar el color a rojo a Tomar foco
    $("#input1").focus(function(){
        $(this).css("color", "red");
    });

    // Volver al color original al perder foco
    $("input1").blur(function(){
        $(this).css("color", '');
    });
});