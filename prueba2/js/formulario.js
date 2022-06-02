$("#enviar").click(
    function() {
        alerta = 0
        validarrut();
        validartelefono();
        validacionatributos();
        if ($("#rut").val().length != 0 && $("#nombre").val().length != 0 &&  $("#apellido").val().length != 0 &&  $("#username").val().length != 0 &&  $("#telefono").val().length != 0 &&  $("#correo").val().length != 0  && alerta == 0) {
            mostrardatos();
        }
        alerta = 0

        
    }
)
$("#limpiar").click(
    function() {
        $("#rut").val("")
        $("#telefono").val("")
        $("#correo").val("")
        $("#nombre").val("")
        $("#apellido").val("")
        $("#username").val("")       
    }
)


function validarrut() {
            // validacion de tamaño de rut
            if ($("#rut").val().length < 9 || $("#rut").val().length > 10 && alerta == 0)  {
                alert("el rut debe contener entre 9 y 10 caracteres")
                alerta += 1
                console.log(alerta)
            };
            //validacion de si tiene guion
            if ($("#rut").val().includes("-")) {
                return true
            }   else {
                alert("el rut debe incluir un guion")
                alerta += 1
            };
            //validacion de no poner puntos
            if ($("#rut").val().includes(".") && alerta == 0) {
                alert("el rut no debe incluir puntos")
                alerta += 1
            };

}

function validartelefono() {
    if ($("#telefono").val().substr(0,1) != 9 && alerta == 0) {
        alert("su numero de telefono debe empezar por 9")
        alerta += 1
    }

    if ($("#telefono").val().length != 9 && alerta == 0)  {
        alert("el telefono debe tener 9 caracteres")
        alerta += 1
    };
}

function validacionatributos() {
    if ($("#nombre").val().length < 3 && alerta == 0)  {
        alert("el nombre debe tener minimo 3 caracteres")
        alerta += 1
    };
    if ($("#username").val().length < 3 && alerta == 0)  {
        alert("el nombre de pila debe tener minimo 3 caracteres")
        alerta += 1
    };
    if ($("#apellido").val().length < 3 && alerta == 0)  {
        alert("el apellido debe tener minimo 3 caracteres")
        alerta += 1
    };
}

function mostrardatos() {
    alert('rut; ' + $("#rut").val() + '\n'+
    'telefono; ' + $("#telefono").val() + '\n'+
    'correo; ' + $("#correo").val() + '\n' +
    'nombre; ' + $("#nombre").val() + '\n' +
    'apellido; ' + $("#apellido").val() + '\n' +
    'nombre de pila; ' + $("#username").val() + '\n'
    )
}