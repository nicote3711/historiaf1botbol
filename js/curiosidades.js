const curiosidades =
[
    {
        tema: "Récords",

        titulo: "¿Sabías que Fangio mantuvo durante décadas el récord de títulos mundiales?",

        texto: "Juan Manuel Fangio conquistó cinco campeonatos mundiales de Fórmula 1 en 1951, 1954, 1955, 1956 y 1957. Logró esos títulos con cuatro escuderías diferentes: Alfa Romeo, Mercedes-Benz, Ferrari y Maserati. Su récord de cinco campeonatos permaneció vigente durante casi medio siglo y todavía hoy es considerado por muchos especialistas y protagonistas como uno de los mejores pilotos de la historia.",

        datoExtra: "Fangio ganó 24 de los 51 Grandes Premios que disputó, una proporción de victorias extraordinaria dentro de la historia de la categoría.",

        imagen: "../img/curiosidades/fangio-record.png",

        alt: "Infografía sobre Juan Manuel Fangio y sus cinco campeonatos mundiales"
    },


    {
        tema: "Circuitos",

        titulo: "¿Sabías que Monza es el circuito con más presencias en la Fórmula 1?",

        texto: "El Autodromo Nazionale Monza forma parte de la historia de la Fórmula 1 desde el nacimiento del Campeonato Mundial en 1950. El circuito italiano ha superado ampliamente las 70 ediciones y es el escenario que más veces recibió una carrera válida por el campeonato. Desde 1950 solamente estuvo ausente del calendario en 1980, cuando el Gran Premio de Italia se disputó en Imola.",

        datoExtra: "Spa-Francorchamps también forma parte del grupo de circuitos históricos originales de la Fórmula 1. Sus primeras competencias se remontan a comienzos de la década de 1920 y continúa siendo uno de los trazados más antiguos todavía utilizados por la categoría.",

        imagen: "../img/curiosidades/monza-record.png",

        alt: "Autodromo Nazionale Monza durante un Gran Premio de Fórmula 1"
    },


    {
        tema: "Seguridad",

        titulo: "¿Sabías que el Halo pasó de ser cuestionado a convertirse en un elemento fundamental de seguridad?",

        texto: "El Halo fue incorporado obligatoriamente a la Fórmula 1 en 2018 para proteger la cabeza del piloto frente a impactos y objetos que puedan ingresar al habitáculo. Aunque inicialmente fue criticado por modificar considerablemente la apariencia de los monoplazas, distintos accidentes demostraron rápidamente su importancia.",

        datoExtra: "El Halo fue fundamental en accidentes como el de Romain Grosjean en Bahréin 2020, el choque entre Lewis Hamilton y Max Verstappen en Monza 2021 y el espectacular accidente de Guanyu Zhou en Silverstone 2022.",

        imagen: "../img/curiosidades/halo-monza-2021.png",

        alt: "Accidente entre Lewis Hamilton y Max Verstappen en Monza 2021"
    },


    {
        tema: "Safety Car",

        titulo: "¿Sabías que el Safety Car también tiene un piloto oficial?",

        texto: "El piloto alemán Bernd Mayländer es el conductor oficial del Safety Car de la Fórmula 1 desde el año 2000. Su función consiste en ingresar a pista cuando dirección de carrera considera que las condiciones no permiten competir normalmente, controlar la velocidad del grupo y mantener a los monoplazas agrupados hasta que la carrera pueda continuar con seguridad.",

        datoExtra: "En el Gran Premio de Australia de 2026, Mayländer alcanzó los 500 Grandes Premios desempeñándose como piloto del Safety Car de Fórmula 1.",

        imagen: "../img/curiosidades/bernd-maylander-safety-car.png",

        alt: "Bernd Mayländer, piloto oficial del Safety Car de Fórmula 1"
    },


    {
        tema: "Pilotos",

        titulo: "¿Sabías que Ayrton Senna sigue siendo el piloto con más victorias en Mónaco?",

        texto: "Ayrton Senna desarrolló una relación especial con el circuito urbano de Montecarlo. El brasileño consiguió seis victorias en el Gran Premio de Mónaco y estableció un récord que todavía permanece vigente. Cinco de esos triunfos llegaron además de manera consecutiva entre 1989 y 1993.",

        datoExtra: "La victoria de 1992 fue una de las más recordadas: Senna resistió durante las últimas vueltas la presión de Nigel Mansell, que tenía un Williams considerablemente más rápido y neumáticos nuevos.",

        imagen: "../img/curiosidades/senna-monaco-1992.png",

        alt: "Ayrton Senna celebrando su victoria en el Gran Premio de Mónaco"
    }
];


function iniciarCuriosidades()
{
    const botones = document.querySelectorAll(".boton-curiosidad");

    for (let i = 0; i < botones.length; i++)
    {
        botones[i].addEventListener("click",seleccionarCuriosidad);
    }

    mostrarCuriosidad(0);
}


function seleccionarCuriosidad(evento)
{
    const indice = Number(evento.currentTarget.dataset.indice);

    mostrarCuriosidad(indice);
    actualizarBotonCuriosidad(indice);
}


function mostrarCuriosidad(indice)
{
    const curiosidad = curiosidades[indice];

    document.getElementById("tema-curiosidad").textContent = curiosidad.tema;

    document.getElementById("titulo-curiosidad").textContent = curiosidad.titulo;

    document.getElementById("texto-curiosidad").textContent = curiosidad.texto;

    document.getElementById("dato-extra-curiosidad").textContent = curiosidad.datoExtra;

    document.getElementById("imagen-curiosidad").src = curiosidad.imagen;

    document.getElementById("imagen-curiosidad").alt = curiosidad.alt;
}


function actualizarBotonCuriosidad(indice)
{
    const botones = document.querySelectorAll(".boton-curiosidad");

    for (let i = 0; i < botones.length; i++)
    {
        botones[i].classList.remove("activo-curiosidad");
    }

    botones[indice].classList.add("activo-curiosidad");
}


iniciarCuriosidades();