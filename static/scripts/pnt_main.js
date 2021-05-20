document.addEventListener("DOMContentLoaded", function() {
    // console.log("Estoy listo DOMContentLoaded!");
    selectFormBuscadorCustom(); //Funcion Inicializar select header buscador
    // scrollTopBtn(".scroll-top-btn");//Funcion para buttonScrollTop
});
window.addEventListener("load", function(event) {
    // console.log("'Todos los recursos terminaron de cargar! load");

});

// logica selet form buscar
function selectFormBuscadorCustom() {
    const d = document;
    /*
     * variables
     */
    const $selected = d.querySelector("._selected");
    const $optionsContainer = d.querySelector(".options-container");
    const $optionsList = d.querySelectorAll(".option");
    const $optionSelectedInput = d.getElementById("optionSelected");
    /*
     *si el elemento clickeado no es el select cerrarlo
     */
    d.addEventListener("click", (e) => {
        if (e.target.matches("._selected") || e.target.matches("._selected *")) {

            $optionsContainer.classList.toggle("active");
            $optionsList.forEach(o => {

                if (o.querySelector("input[type='radio']").getAttribute("data-value") != $optionSelectedInput.getAttribute("data-collection")) {
                    o.classList.remove("active-o");
                } else {
                    o.classList.add("active-o");
                }
            });

        } else {
            if ($optionsContainer.classList.contains("active")) {
                $optionsContainer.classList.remove("active");
            }
        }
    });
    /*
     *recorrer options de select para obtener los valores y mostrarlos en input
     */
    $optionsList.forEach(o => {
        o.addEventListener("click", () => {
            o.classList.add("active-o");
            $optionSelectedInput.value = o.querySelector("label").innerHTML;
            $optionSelectedInput.dataset['collection'] = o.querySelector("input[type='radio']").getAttribute("data-value");
            $optionsContainer.classList.remove("active");
        });
        /*
         *asigar evento hover a option
         */
        o.addEventListener("mouseover", (e) => {
            $optionsList.forEach(o => {
                o.classList.remove("active-o");
            });
            o.classList.add("active-o");
        });
    });
}

var optNavBarSelected = 0;

function changeTitleBar(title, contenido) {
    $('#titulo_menu_bar').html(title);
    $('#contenido_menu_bar').html(contenido);
    $('.menu-option').remove();
}

var divDropDownMenuOpcion = false;

function displayMenuNavBarDropdown() {
    if (divDropDownMenuOpcion) {
        $('#div-dropdown-menu-nav').removeClass('show');
    } else {
        $('#div-dropdown-menu-nav').addClass('show');
    }
    divDropDownMenuOpcion = !divDropDownMenuOpcion;

}

$(document).ready(function() {
    $('#breadcrumbs').hide()
    $('.portlet-topper-toolbar').hide();
    $('.lfr-meta-actions').hide();
    $('.portlet-title').hide();
    $('html').removeClass('aui');
    $('.portlet-dockbar').addClass('aui');
    $('.portlet-boundary').addClass('aui');
    setTimeout(function() {
        $('html').removeClass('aui');
        $('.portlet-dockbar').addClass('aui');
        $('.portlet-boundary').addClass('aui');
    }, 1200);

    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };
                for (var t in animations) {
                    if (el.style[t] !== undefined) { return animations[t]; }
                }
            })(document.createElement('div'));
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (typeof callback === 'function') callback();
            });
            return this;
        },
    });

    setTimeout(function() {
        $('#pnt-img').removeAttr('style');
        $('#transp').removeAttr('style');
        $('#logoh').removeAttr('style');
        $('#pnt-img').addClass('animated fadeInDown');
        $('#transp').addClass('animated fadeIn');
        $('#logoh').addClass('animated fadeInUp');
    }, 500);


});

function closeModals() {
    $('.modal').each(function(index, obj) {
        $(obj).modal('hide');
    });
}
var bandDisplayMenuLateral = false;

function mostrarMenuLateral() {
    $('#div-menu-left').attr('class', 'menu-left-show');
}

function ocultarMenuLateral() {
    $('#div-menu-left').attr('class', 'menu-left');
}

function displayMenuLateral() {
    if (bandDisplayMenuLateral) {
        $('#div-menu-left').attr('class', 'menu-left');
    } else {
        $('#div-menu-left').attr('class', 'menu-left-show');
    }
    bandDisplayMenuLateral = !bandDisplayMenuLateral;
}

function selectOpcionFooterMenu(opc) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById('div-menu-footer-' + i).setAttribute('class', 'menu-footer');
    }
    document.getElementById('div-menu-footer-' + opc).setAttribute('class', 'menu-footer menu-footer-active');



}

function selectOpcionMenu(opc, logeado) {
    var logeado = false;
    for (var i = 1; i <= 3; i++) {
        if (opc == i) {
            if (document.getElementById('div-menu-' + i)) {
                document.getElementById('div-menu-' + i).setAttribute('class', 'menu-item ');
            }
        } else {
            if (document.getElementById('div-menu-' + i)) {
                document.getElementById('div-menu-' + i).setAttribute('class', 'menu-item menu-item-inactive');
            }

        }
    }
    if (opc == 1) {
        window.open('https://consultapublicamx.inai.org.mx/vut-web/', '_blank');
    } else if (opc == 3) {
        sessionStorage.setItem('filtersSolicitud', '{}');
        location.href = '/group/guest/mis-solicitudes?mis-quejas=true';
    } else if (opc == 2) {
        $('#div-menu-opcion-footer').slideDown();
        $("html, body").animate({ scrollTop: $('#div-menu-opcion-footer').offset().top }, 1000);
    } else {
        $('#div-menu-opcion-footer').slideUp();
    }
}

function activeNavBar(num) {
    $($('.dropdown-item')[num]).addClass('active');

}

var app = {
    start: function() {
        $('#div-footer-aviso').attr('style', '');
        $('#div-footer-aviso').slideUp();
        // $('#div-sitiosinteres').removeAttr('style');
        // $('#div-sitiosinteres').show();
        $('#div-sitiosInfo').removeAttr('style');
        $('#div-sitiosInfo').hide();


        $('#icono-menu-info-arriba').hide();
        $('#icono-menu-sitios-arriba').hide();
        setTimeout(function() {
            $('.close').each(function(i, v) {
                $(v).click(function() {
                    closeModals();
                });
            });
        }, 2300);
        app.moveBg();
        $('#div-title-id').removeAttr('style');
        $('[data-toggle="tooltip"]').tooltip();
        $('#div-title-info-id').removeAttr('style');
        $('#div-title-info-id').slideUp();
    },
    'tiempo': 90,
    'ciclo': 80,
    'porcentaje': 1,
    'titleApp': 40,
    'ciclos': 0,
    'pixelsTop': 43,

    'moveBg': function() {
        $('.header-subtitle-pnt').css('top', '121px');
        if (app.ciclos < app.ciclo) {
            setTimeout(function() {
                $('.header-subtitle-pnt').css('margin-left', app.titleApp + 'px');
                $('.header-title-pnt').css('margin-left', app.porcentaje + '%');
                app.titleApp = app.titleApp - 1;
                app.porcentaje += 0.3;
                app.pixelsTop = app.pixelsTop + 1;
                app.finish();
                app.moveBg();
            }, app.tiempo);
        } else {
            $('.header-subtitle-pnt').css('margin-left', '0px');
            $('.header-subtitle-pnt').css('top', '121px');
            $('.header-title-pnt').css('margin-left', '20%');
        }
    },
    enabledHoverDisplayMessage: function() {
        app.hoverDisplayMessage = true;
    },
    disabledHoverDisplayMessage: function() {
        app.hoverDisplayMessage = false;
        app.leaveBackgroundAlter();
    },

    showBackgroundAlter: function() {
        if (!app.enProceso && document.body.clientWidth > 0.1) {
            app.enProceso = true;
            setTimeout(function() {
                $('#div-title-info-id').slideDown();
                app.enProceso = false;
            }, 1);
        }

    },
    leaveBackgroundAlter: function() {

        if (!app.enProceso && document.body.clientWidth > 0.1) {
            setTimeout(function() {


                if (!app.hoverDisplayMessage) {
                    $('#div-title-info-id').slideUp();
                }

            }, 1);
        }

    },
    'finish': function() {
        app.ciclos += 1;
    },
    showAvisoPrivacidad: function() {
        $('#div-footer-aviso').slideDown();
    },

    hideAvisoPrivacidad: function() {
        $('#div-footer-aviso').slideUp();
    }
};

$("input[data-toggle='tooltip']").on('focus', function() {
    $(this).tooltip('show');
});

$("input[data-toggle='tooltip']").on('blur', function() {
    $(this).tooltip('show');
});


var INAIModalApp = {
    registroUsuario: function() {
        $('#modal-registro-sesion').modal('hide');
        $('#modal-registro-sesion-existoso').modal('show');
        $('.tooltips').tooltip();
        return false;
    },
    showIniciarSesion: function() {
        $('#modal-inicio-sesion').modal('show');
    },
    showRegistro: function() {
        $('#modal-inicio-sesion').modal('hide');
        $('#modal-registro-sesion').modal('show');
    },
    showRecuperarContrasena: function() {
        $('#modal-inicio-sesion').modal('hide');
        $('#modal-recuperar-contrasena').modal('show');
    },
    cancelarRecuperarContrasena: function() {
        $('#modal-recuperar-contrasena').modal('hide');
        $('#modal-inicio-sesion').modal('show');
    }
};

function showPersonaMoral() {
    $('#divPersonaFisica').hide();
    $('#divPersonaMoral').slideDown();
}

function showPersonaFisica() {
    $('#divPersonaMoral').hide();
    $('#divPersonaFisica').slideDown();
}

function showSolicitudExitosa() {
    $('#modal-solicitud-exitosa').modal('show');
}

function checkLenguaIndigena() {
    document.getElementsByName('radiolengua')[0].checked = !document.getElementsByName('radiolengua')[0].checked;
    if (document.getElementsByName('radiolengua')[0].checked) {
        $('#checklengua2').slideDown();
    } else {
        $('#checklengua2').slideUp();
    }
}

function showDomicilio() {
    $('#domicilio').show('fade');
}

function hideDomicilio() {
    $('#domicilio').hide('fast');
}


function hidelengua2() {
    $('#checklengua2').slideUp();
}

function showlengua2() {
    $('#checklengua2').show('fade');
}

var modalDestino = "";

function modalHistorialShowError(modalDestinoParam) {
    modalDestino = modalDestinoParam;
    $('#' + modalDestino).modal('hide');
    $('#modal-error-archivo').modal('show');
}

function showlengua3() {
    $('#checklengua3').show('fade');
}

function showEnviar() {
    $('#modal-gestioon-medios').modal('hide');
    $('#modal-enviar').modal('show');

}

function hideOtras() {
    $('#inputOtrasCuales').slideUp();
}

function showOtras() {
    $('#inputOtrasCuales').slideDown();
}

function showDomicilio() {
    $('#domicilio').slideDown();
}

function hideDomicilio() {
    $('#domicilio').slideUp();
}

function showGuardarConfiguracionPerfil() {
    $('#modal-guardar-perfil').modal('show');
}

function showlengua2ConfiguracionPerfil() {
    $('#checklengua2ConfiguracionPerfil').show('fade');
}

function showlengua3ConfiguracionPerfil() {
    $('#checklengua3ConfiguracionPerfil').show('fade');
}


function hidelengua2ConfiguracionPerfil() {
    $('#checklengua2ConfiguracionPerfil').slideUp();
}

function hidelengua3ConfiguracionPerfil() {
    $('#checklengua3ConfiguracionPerfil').slideUp();
}

function showOculto() {
    $('#idOculto').show('show');
}

function showlengua2() {
    $('#checklengua2').show('show');
}

function showlengua3() {
    $('#checklengua3').show('show');
}

function showTableHistorial() {
    $('#idOcultoPrimero').hide();
    $('#tabla-historial-quejas-tabla').hide();
    $('#tabla-historial').show();
}

function showTableHistorialQuejas() {
    $('#tabla-historial').hide();
    $('#tabla-historial-quejas-tabla').show();
}

function showModalGestion() {
    $('#modal-gestioon-medios').modal('show');
}

function showModalGestionQuejas() {
    $('#modal-gestioon-medios-quejas').modal('show');
}

function enviarPrevencion() {
    $('#modal-gestioon-medios-prevencion').modal('show');
    $('#modal-gestioon-medios-quejas').modal('hide');
}

function showModalGestionQuejasAdmision() {
    $('#modal-gestioon-medios-quejas-admision').modal('show');
}

function enviarAdmision() {
    $('#modal-gestioon-medios-admision').modal('show');
    $('#modal-gestioon-medios-quejas-admision').modal('hide');
}

function showModalGestionQuejasResolucion() {
    $('#modal-gestioon-medios-quejas-resolucion').modal('show');
}

function showModalGestionQuejasComunicaciones() {
    $('#modal-gestioon-medios-quejas-comunicaciones').modal('show');
}

function enviarComunicaciones() {
    $('#modal-gestioon-medios-comunicaciones').modal('show');
    $('#modal-gestioon-medios-quejas-comunicaciones').modal('hide');
}

function enviarComunicacionesGuardar() {
    $('#modal-gestioon-medios-comunicaciones-guardar').modal('show');
    $('#modal-gestioon-medios-quejas-comunicaciones').modal('hide');
}

var index = {
    display: false,
    displayInfo: false,
    showSolicitudAccesoInformacion: function() {
        sessionStorage.setItem('filtersSolicitud', '{}');
        location.href = "/group/guest/crear-solicitud";

    },
    showSolicitudDatos: function() {
        sessionStorage.setItem('filtersSolicitud', '{}');
        location.href = "/group/guest/crear-solicitud?datos=true";
    },
    showHistorial: function() {
        sessionStorage.setItem('filtersSolicitud', '{}');
        location.href = "/group/guest/mis-solicitudes";

    },
    start: function() {
        $('#div-options').attr('style', '');
        $('#div-options').show('fast');
        if ($('.menu-container').animateCss) {
            $('.menu-container').animateCss('fadeInUp');
        } else {
            $('.menu-container').show('fadeInUp');
        }

        $('#div-menu-opcion-footer').hide();
    },
    displayInfoMenu: function() {
        if (index.displayInfo) {
            $('#icono-menu-info-abajo').show();
            $('#icono-menu-info-arriba').hide();
            $('#div-sitiosInfo').slideUp();
        } else {
            $('#icono-menu-info-abajo').hide();
            $('#icono-menu-info-arriba').show();
            $('#div-sitiosInfo').slideDown();
        }
        index.displayInfo = !index.displayInfo;
    },
    displaySitiosInteres: function() {
        if (index.display) {
            $('#icono-menu-sitios-abajo').hide();
            $('#icono-menu-sitios-arriba').show();
            // $('#div-sitiosinteres-content').attr('style','display:none;');

            // $('#div-sitiosinteres').slideUp();
        } else {
            $('#icono-menu-sitios-abajo').hide();
            $('#icono-menu-sitios-arriba').show();

            $('#div-sitiosinteres').slideDown('fast', function() {
                $('#div-sitiosinteres-content').attr('style', 'display: block;');
                $('html, body').animate({ scrollTop: $(document).height() - $('#div-footer').height() }, 'slow');
            });
        }
        index.display = !index.display;
    }
};

function faCollapse(id) {

}






function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validteEmailRegistro(input) {
    if (validateEmail(document.getElementById('registroEmail').value)) {
        $('#registroEmail').removeClass('inp-error');
        $('#registroEmail').addClass('inp-valido');
    } else {
        $('#registroEmail').removeClass('inp-error');
        $('#registroEmail').addClass('inp-valido');

    }


    if (input.value != document.getElementById('registroEmail').value) {
        input.setCustomValidity('Los correos electronicos deben de coincidir.');
        $(input).removeClass('inp-valido');
        $('#registroEmail').removeClass('inp-valido');
        $(input).addClass('inp-error');
        $('#registroEmailMensaje').removeClass('text-valido');
        $('#registroEmailMensaje').addClass('texto-error');
        $('#registroEmailMensaje').html('Los correos electrónicos no coinciden');

    } else {
        /* input is valid -- reset the error message */
        input.setCustomValidity('');
        $(input).removeClass('inp-error');
        $(input).addClass('inp-valido');
        $('#registroEmail').addClass('inp-valido');
        $('#registroEmailMensaje').html('Los correos electrónicos coinciden');
    }
}




function validateConfirmPassword(input) {
    if (input.value != document.getElementById('registroPassword').value) {
        input.setCustomValidity('Las contraseñas deben de coincidir.');
        $(input).removeClass('inp-valido');
        $('#registroPassword').removeClass('inp-valido');
        $('#registroConfirmPasswordMensaje').removeClass('text-valido');
        $('#registroConfirmPasswordMensaje').addClass('texto-error');
        $('#registroConfirmPasswordMensaje').html('Las contraseñas no coinciden');
        $(input).addClass('inp-error');

    } else {
        /* input is valid -- reset the error message*/



        input.setCustomValidity('');
        $(input).removeClass('inp-error');
        $(input).addClass('inp-valido');

        $('#registroConfirmPasswordMensaje').removeClass('text-valido');
        $('#registroConfirmPasswordMensaje').addClass('text-aprobado');
        $('#registroConfirmPasswordMensaje').html("Las contraseñas coinciden");


        $('#registroPassword').addClass('inp-valido');
    }
}


var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("inai-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    if (selElmnt.options[selElmnt.selectedIndex]) {
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);


function mostrarTablaInfoHU6(numeroMostrar) {
    var mostrar = !$('#tabla-info-' + numeroMostrar).is(':visible');
    for (var x = 1; x <= 10; x++) {
        $('#tabla-info-' + x).hide();
    }
    if (mostrar)
        $('#tabla-info-' + numeroMostrar).show();
}

function changeTipoPersona() {
    $('#div_datos_representante').hide();
    $('#div_datos_solicitante').hide();
    if ($('#select-datos-persona').val() == 1) $('#div_datos_solicitante').show();
    else if ($('#select-datos-persona').val() == 2) {
        $('#div_datos_representante').show();
        $('#div_datos_solicitante').show();
    }
}



function misSolicitudes() {
    $('#tabla-historial-quejas-tabla').hide();
    $('#tabla-historial').hide();
    $('#mostrarMsjSolicitud').show();
    $('#mostrarMsjQuejas').hide();
};

function misQuejas() {
    $('#tabla-historial-quejas-tabla').hide();
    $('#tabla-historial').hide();
    $('#mostrarMsjQuejas').show();
    $('#mostrarMsjSolicitud').hide();
};

function tabquejas() {
    location.href = "historial.html#menu2"
}

function ConfirmPasswordPerfil(input) {
    if (input.value != document.getElementById('passwor').value) {
        input.setCustomValidity('Las contraseñas deben de coincidir.');
        $(input).removeClass('inp-valido1');
        $('#passwor').removeClass('inp-valido1');
        $('#passcomment').removeClass('text-valido1');
        $('#passcomment').addClass('texto-error1');
        $('#passcomment').html('Las contraseñas no coinciden');
        $(input).addClass('inp-error1');

    } else {
        /* input is valid -- reset the error message*/
        input.setCustomValidity('');
        $(input).removeClass('inp-error1');
        $(input).addClass('inp-valido1');

        $('#passcomment').removeClass('text-valido1');
        $('#passcomment').addClass('text-aprobado1');
        $('#passcomment').html("Las contraseñas coinciden");


        $('#passwor').addClass('inp-valido1');
    }
}


function setScrollSizeNavbar() {
    if ($(window).height() > $('body').height()) {
        $('#header-navbar').addClass('bg-white');
        $('#header-navbar').removeClass('d-none');
    } else {
        var diffSizePage = $(window).height() - $('body').height();
        if (diffSizePage > 100) {
            diffSizePage = 80;
        } else if (diffSizePage > 50) {
            diffSizePage = 20;
        } else {
            diffSizePage = 5;
        }
        if (window.pageYOffset > diffSizePage) {
            $('#header-navbar').addClass('bg-white');
            $('#header-navbar').removeClass('d-none');
        } else {
            $('#header-navbar').addClass('d-none');
            $('#header-navbar').removeClass('bg-white');
        }
    }
}

$(document).ready(function() {
    setScrollSizeNavbar();
    $(document).scroll(function() {
        setScrollSizeNavbar();
    });

    setTimeout(function() {
        setScrollSizeNavbar();
    }, 2000);
    setTimeout(function() {
        setScrollSizeNavbar();
    }, 6000);
    changeTipoPersona();
    misSolicitudes();
    mostrarTablaInfoHU6(0);
    app.start();
    index.start();
    $('#checklengua2ConfiguracionPerfil').hide();
    $('#checklengua3ConfiguracionPerfil').hide();
    $('#domicilio').hide();
    $('#skip-to-content').hide();

    $('#checklengua2').hide();
    $('#checklengua3').hide();
    $('#inputOtrasCuales').hide();
    $('#domicilio').hide();
    $('#checklengua2').hide();
    $('#divPersonaMoral').hide();
    $('#divPersonaFisica').hide();
    $('#tabla-historial').hide();
    $('#tabla-tr-info').hide();
    $('#checklengua2').hide();
    $('#checklengua3').hide();
    $('#idOculto').hide();
    var arrayElements = [];
    $('div[lenguas=true]').each(function(i, v) {
        v['abierto'] = false;
        arrayElements.push($(v));
    });
    $.each(arrayElements, function(index, e) {
        e.click(function() {
            if (!e.abierto) {
                $(e.find('[lengua-target=true]')[0]).attr('class', 'fas fa-chevron-circle-up');
            } else {
                $(e.find('[lengua-target=true]')[0]).attr('class', 'fas fa-chevron-circle-down');
            }
            e.abierto = !e.abierto;
        });
    });
});

function dinamycSelectElement(divSelect) {
    var j, selElmnt, a, b, c;
    if ($('#' + divSelect).find('.select-selected')) {
        $('#' + divSelect).find('.select-selected').remove();
    }
    if (document.getElementById(divSelect) && document.getElementById(divSelect) != null) {
        selElmnt = document.getElementById(divSelect).getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        if (selElmnt.options[selElmnt.selectedIndex]) {
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            document.getElementById(divSelect).appendChild(a);
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 0; j < selElmnt.length; j++) {
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            $(s).change();
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            document.getElementById(divSelect).appendChild(b);
            a.addEventListener("click", function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
    }

}

function selectName(newName, newTitle) {
    $('#btn_tabla_solicitud').html(newName);
    $('#btn_button_principal').html(newName);
    $('#strong-title-page-historial').html(newTitle);
}




$(document).ready(function() {
    try {
        $('.passAjalSel').each(function(i, v) {
            $(v).after('<span id="eye-element_' + i + '" class="eye-ajal"><i class="fas fa-eye-slash"></i></span>');
            $('#eye-element_' + i).click(function() {
                var iElement = $('#eye-element_' + i).find('i');
                if ($(iElement).attr('class') == 'fas fa-eye-slash') {
                    $(iElement).attr('class', 'far fa-eye');
                    $(v).attr('type', 'text');
                } else {
                    $(iElement).attr('class', 'fas fa-eye-slash');
                    $(v).attr('type', 'password');
                }
            });
        });
    } catch (error) {

    }
    try {
        $('.site-add-controls a').click(function(i, v) {
            $('.lfr-add-panel').addClass('aui');
            $('.add-content-item').each(function(i, v) {
                $(v).attr('class', 'btn');
                $(v).attr('style', 'width: 100%;text-align: right');
            });
            setTimeout(function() {
                $('.add-content-item').each(function(i, v) {
                    $(v).attr('class', 'btn');
                    $(v).attr('style', 'width: 100%;text-align: right');
                });
            }, 2500);
        });

    } catch (error) {

    }

    $('.add-content-item').each(function(i, v) {
        $(v).attr('class', 'btn');
        $(v).attr('style', 'width: 100%;text-align: right');
    });

    $('.site-add-controls a').click(function(i, v) {
        $('.lfr-add-panel').addClass('aui');
    });

    setTimeout(function() {
        scrollCorrectNavExceute();

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        if (!isMobile.any()) {
            $("#div-menu-left").show();
        }

    }, 100);




});

function scrollCorrectNavExceute() {
    if ($('.site-add-controls').length > 0) {
        $('.lfr-add-panel').addClass('aui');
        $('.add-content-item').each(function(i, v) {
            $(v).attr('class', 'btn');
            $(v).attr('style', 'width: 100%;text-align: right');
        });

        $('.site-add-controls a').click(function(i, v) {
            $('.lfr-add-panel').addClass('aui');
        });
        setTimeout(function() {
            scrollCorrectNavExceute();
        }, 5000);
    }
}

function headerTextSearch(e, url) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        searchInBuscadorPnt(url);
    }
}

function searchInBuscadorPnt(urlRecived) { //Get input and select value to search in search engine

    const $inputSearchBuscador = document.getElementById("cadenaBusqueda");
    // const valueSelectCollection = document.getElementById("selectColection");
    const $optionSelectedInput = document.getElementById("optionSelected");
    const urlBuscador = urlRecived + $inputSearchBuscador.value + '&coleccion=' + parseInt($optionSelectedInput.getAttribute("data-collection"));


    if ($inputSearchBuscador.value.length >= 3 && parseInt($optionSelectedInput.getAttribute("data-collection")) > 0) {
        $inputSearchBuscador.value = "";
        // $inputSearchBuscador.selectedIndex = 0;
        $optionSelectedInput.value = "Toda la plataforma";
        $optionSelectedInput.dataset['collection'] = "5";
        // console.log("urlBuscador=>",urlBuscador);
        window.open(urlBuscador, '_blank');
    }
}

function toogleIconHeader() { //Change class button fa-chevron header


    const __div_sitiosInfo = document.querySelector("#div-sitiosInfo");
    const __iconCollapse = document.querySelector("#icon-collapse-header");

    if (__div_sitiosInfo.style.display === "none") {

        __iconCollapse.classList.remove("fa-chevron-down");
        __iconCollapse.classList.add("fa-chevron-up");
        __div_sitiosInfo.classList.add("animated", "fadeInDown");
    } else {
        __iconCollapse.classList.remove("fa-chevron-up");
        __iconCollapse.classList.add("fa-chevron-down");
        __div_sitiosInfo.classList.remove("animated", "fadeInDown");
    }
    __div_sitiosInfo.style.display = __div_sitiosInfo.style.display === "none" ? "block" : "none";

}

function toogleIconFocalizada() { //Change class button fa-chevron transparencia focalizada

    const __iconCollapse = document.querySelector("#icon-collapse");
    const __div_sitiosinteres_content = document.querySelector("#div-sitiosinteres-content");

    if (__div_sitiosinteres_content.style.display === "block") {
        __iconCollapse.classList.remove("fa-chevron-up");
        __iconCollapse.classList.add("fa-chevron-down");
        __div_sitiosinteres_content.classList.remove("animated", "fadeInDown");
        __div_sitiosinteres_content.classList.add("animated", "fadeOutUp");
    } else {
        __iconCollapse.classList.remove("fa-chevron-down");
        __iconCollapse.classList.add("fa-chevron-up");
        __div_sitiosinteres_content.classList.remove("animated", "fadeOutUp");
        __div_sitiosinteres_content.classList.add("animated", "fadeInDown");
        __div_sitiosinteres_content.style.display === "none"
    }
    __div_sitiosinteres_content.style.display = __div_sitiosinteres_content.style.display === "none" ? "block" : "none";
}


/*
 *Show button ScrollTop
 */
function scrollTopBtn(btn) {

    const d = document,
        w = window;

    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 300) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        }
    });
}