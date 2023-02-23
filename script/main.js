/*Variables*/
let formas_contacto = document.getElementById('formas-contacto');
formas_contacto = [...formas_contacto.children];
let dato_contacto = document.getElementById('dato-contacto');
let detalles = [...document.getElementsByClassName('detalle-dato')];
let navegacion_datos = document.getElementById('datos').children[0];
let botones_detalles = [...navegacion_datos.getElementsByTagName("button")];

/*Funciones*/
function mostrarContacto(contacto) {
    dato_contacto.innerText = contacto;
}

formas_contacto.forEach(forma => {
    let contacto;
    switch (forma.getAttribute('data-tipo')) {
        case "mail": contacto = "gavin.pena@example.com"; break;
        case "telefono": contacto = "(218) 438-4198"; break;
        case "domicilio": contacto = "9174 Dogwood Ave"; break;
        default: contacto = "error"; break;
    }
    forma.onmouseover = () => mostrarContacto(contacto);
    forma.onmouseout = () => mostrarContacto("...");
});


function mostrarDetalleDe(boton) {
    let tipo_detalle = boton.getAttribute('data-dato');
    let detalle_a_mostrar = detalles.find(detalle => detalle.getAttribute("data-dato") == tipo_detalle);
    verDeGrupo(detalle_a_mostrar, detalles);
}

function verDeGrupo(divAVer, grupo) {
    grupo.forEach(elemento => {
        if (elemento !== divAVer) {
            elemento.classList.add("oculto");
        } else {
            divAVer.classList.remove("oculto");
        }
    })
}

botones_detalles.forEach(boton => {
    boton.onclick = () => {
        boton.classList.add("presionado");
        let hermano = boton.previousElementSibling;
        while (hermano) {
            hermano.classList.remove("presionado");
            hermano = hermano.previousElementSibling;
        }
        hermano = boton.nextElementSibling;
        while (hermano) {
            hermano.classList.remove("presionado");
            hermano = hermano.nextElementSibling;
        }
        mostrarDetalleDe(boton);
    }
});

