(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function validarRegistro() {
    var password = document.getElementById("validationPass").value;
    var password2 = document.getElementById("validationPass2").value;
    if (password2 != password) {
        document.getElementById("resValPass2").innerHTML = "Las contraseñas deben ser iguales";
    }
}

$(document).ready(function() {
    $("#btnLogin").click(function() {
        var Usuario = $("#emailLogin").val();
        var Contraseña = $("#ContrasenaLogin").val();
        var res;
        if (Usuario == "207662305" && Contraseña == "aguas123") {
            res = "Inicio de sesion valido"
            $("#resultadoLoginBien").html(res);
            $("#resultadoLoginMal").html("");
        } else {

            res = "Email/Contraseña incorrecto"
            $("#resultadoLoginMal").html(res);
            $("#resultadoLoginBien").html("");
        }
    });

    $("#ValidarPass").click(function() {
        var password = $("#validationPass").val();
        var password2 = $("#validationPass2").val();
        var res;
        if ((password2 == password) && (password2 != "")) {
            res = "Contraseña valida"
            $("#valPass").html(res);
            $("#valPass2").html("");
        } else {
            res = "Las contraseñas no son iguales"
            $("#valPass2").html(res);
            $("#valPass").html("");
        }
    });

});