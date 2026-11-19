const carreras2026 =
[
    {
        nombre: "Gran Premio de Australia",
        fecha: "2026-03-08T01:00:00-03:00"
    },

    {
        nombre: "Gran Premio de China",
        fecha: "2026-03-15T04:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Japón",
        fecha: "2026-03-29T02:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Baréin",
        fecha: "2026-04-12T12:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Arabia Saudita",
        fecha: "2026-04-19T14:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Miami",
        fecha: "2026-05-03T17:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Canadá",
        fecha: "2026-05-24T17:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Mónaco",
        fecha: "2026-06-07T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Barcelona-Catalunya",
        fecha: "2026-06-14T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Austria",
        fecha: "2026-06-28T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Gran Bretaña",
        fecha: "2026-07-05T11:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Bélgica",
        fecha: "2026-07-19T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Hungría",
        fecha: "2026-07-26T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Países Bajos",
        fecha: "2026-08-23T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Italia",
        fecha: "2026-09-06T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de España",
        fecha: "2026-09-13T10:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Azerbaiyán",
        fecha: "2026-09-26T08:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Singapur",
        fecha: "2026-10-11T09:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Estados Unidos",
        fecha: "2026-10-25T17:00:00-03:00"
    },

    {
        nombre: "Gran Premio de México",
        fecha: "2026-11-01T17:00:00-03:00"
    },

    {
        nombre: "Gran Premio de São Paulo",
        fecha: "2026-11-08T14:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Las Vegas",
        fecha: "2026-11-22T01:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Qatar",
        fecha: "2026-11-29T13:00:00-03:00"
    },

    {
        nombre: "Gran Premio de Abu Dhabi",
        fecha: "2026-12-06T10:00:00-03:00"
    }
];


const carrerasOrdenadas = Array.from(carreras2026);


carrerasOrdenadas.sort(function(a,b)
{
    return new Date(a.fecha) - new Date(b.fecha);
});


let intervaloCarrera;


function iniciarContadorCarrera()
{
    const boton = document.getElementById("btn-proxima-carrera");

    boton.addEventListener("click",mostrarContadorCarrera);
}


function mostrarContadorCarrera()
{
    const contador = document.getElementById("contador-carrera");

    contador.hidden = false;


    actualizarContadorCarrera();


    if (intervaloCarrera === undefined)
    {
        intervaloCarrera = setInterval(actualizarContadorCarrera,1000);
    }
}


function obtenerProximaCarrera()
{
    const ahora = new Date();


    for (let i = 0; i < carrerasOrdenadas.length; i++)
    {
        const fechaCarrera = new Date(carrerasOrdenadas[i].fecha);

        if (fechaCarrera > ahora)
        {
            return carrerasOrdenadas[i];
        }
    }


    return null;
}


function actualizarContadorCarrera()
{
    const proximaCarrera = obtenerProximaCarrera();


    if (proximaCarrera === null)
    {
        mostrarFinTemporada();
        return;
    }


    const ahora = new Date();

    const fechaCarrera = new Date(proximaCarrera.fecha);

    const diferencia = fechaCarrera - ahora;


    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    const segundos = Math.floor((diferencia / 1000) % 60);


    document.getElementById("nombre-proxima-carrera").textContent =
        proximaCarrera.nombre;


    document.getElementById("fecha-proxima-carrera").textContent =
        obtenerFechaCarrera(fechaCarrera);


    document.getElementById("dias-carrera").textContent =
        completarNumero(dias);

    document.getElementById("horas-carrera").textContent =
        completarNumero(horas);

    document.getElementById("minutos-carrera").textContent =
        completarNumero(minutos);

    document.getElementById("segundos-carrera").textContent =
        completarNumero(segundos);


    document.getElementById("mensaje-proxima-carrera").textContent =
        "Tiempo restante hasta la largada.";
}


function completarNumero(numero)
{
    if (numero < 10)
    {
        return "0" + numero;
    }


    return numero;
}


function obtenerFechaCarrera(fecha)
{
    const diasSemana =
    [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];


    const meses =
    [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];


    const diaSemana = diasSemana[fecha.getDay()];

    const dia = fecha.getDate();

    const mes = meses[fecha.getMonth()];

    const horas = completarNumero(fecha.getHours());

    const minutos = completarNumero(fecha.getMinutes());


    return diaSemana + " " + dia + " de " + mes + " - " +
           horas + ":" + minutos + " hs - Argentina";
}


function mostrarFinTemporada()
{
    document.getElementById("nombre-proxima-carrera").textContent =
        "Temporada 2026 finalizada";


    document.getElementById("fecha-proxima-carrera").textContent = "";


    document.getElementById("dias-carrera").textContent = "00";

    document.getElementById("horas-carrera").textContent = "00";

    document.getElementById("minutos-carrera").textContent = "00";

    document.getElementById("segundos-carrera").textContent = "00";


    document.getElementById("mensaje-proxima-carrera").textContent =
        "Preparándose para el año 2027.";


    if (intervaloCarrera !== undefined)
    {
        clearInterval(intervaloCarrera);

        intervaloCarrera = undefined;
    }
}


iniciarContadorCarrera();