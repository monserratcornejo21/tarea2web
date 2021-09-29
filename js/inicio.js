"use strict";
define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    (function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    console.log("abrio");
                    event.preventDefault();
                    var myModal = document.getElementById('myModal');
                    $("#myModal").show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});

function limpiarFormulario(){
    document.getElementById("formulario").reset();
}

function validar_checkbox() {
    // Obtener hijos dentro de etiqueta <div>
    var cont = document.getElementById('checkbox').children;
    var i = 0;
    var al_menos_uno = false;
    //Recorrido de checkbox's
    while (i < cont.length) {
        // Verifica si el elemento es un checkbox
        if (cont[i].tagName == 'INPUT' && cont[i].type == 'checkbox') {
            // Verifica si esta checked
            if (cont[i].checked) {
                al_menos_uno = true;
            }
        }
        i++
    }
    //Valida si al menos un checkbox es checked
    if (!al_menos_uno) {
        alert('Selecciona al menos un checkbox');
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
}

function validar_checkbox2() {
    // Obtener hijos dentro de etiqueta <div>
    var cont = document.getElementById('checkbox2').children;
    var i = 0;
    var al_menos_uno = false;
    //Recorrido de checkbox's
    while (i < cont.length) {
        // Verifica si el elemento es un checkbox
        if (cont[i].tagName == 'INPUT' && cont[i].type == 'checkbox') {
            // Verifica si esta checked
            if (cont[i].checked) {
                al_menos_uno = true;
            }
        }
        i++
    }
    //Valida si al menos un checkbox es checked
    if (!al_menos_uno) {
        alert('Selecciona al menos un checkbox');
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
}