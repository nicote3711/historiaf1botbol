const carreras =
[
    {
        anio: "1976",
        titulo: "Gran Premio de Alemania",
        subtitulo: "El accidente que marcó un campeonato",
        tipo: "Carrera histórica",
        protagonistas: "Niki Lauda · James Hunt",
        momento: "Accidente y lucha por el campeonato",

        descripcion: "El Gran Premio de Alemania de 1976, disputado en el Nürburgring, quedó marcado por el gravísimo accidente de Niki Lauda. Su Ferrari impactó contra las barreras y se incendió. Guy Edwards, Brett Lunger, Harald Ertl y Arturo Merzario participaron de su rescate, siendo Merzario especialmente importante para liberar al piloto de su automóvil. Lauda sobrevivió y regresó sorprendentemente a competir pocas semanas después. El austríaco llegó a la última carrera del año peleando el campeonato con James Hunt. En Japón, bajo una lluvia intensa, Lauda decidió abandonar por considerar demasiado peligrosas las condiciones, mientras Hunt finalizó tercero y consiguió el campeonato por solamente un punto.",

        etiquetas:
        [
            "Accidente",
            "Niki Lauda",
            "James Hunt",
            "Campeonato"
        ],

        video: "https://www.youtube.com/embed/pstMyw9jrI4",
        youtube: "https://www.youtube.com/watch?v=pstMyw9jrI4"
    },


    {
        anio: "1984",
        titulo: "Gran Premio de Mónaco",
        subtitulo: "La carrera que presentó a Senna ante el mundo",
        tipo: "Carrera bajo lluvia",
        protagonistas: "Ayrton Senna · Alain Prost",
        momento: "Bandera roja en Montecarlo",

        descripcion: "El Gran Premio de Mónaco de 1984 se disputó bajo una intensa lluvia y quedó como una de las primeras grandes exhibiciones de Ayrton Senna. Con un Toleman y largando desde la posición 13, el brasileño avanzó hasta el segundo lugar y comenzó a descontarle rápidamente tiempo al líder Alain Prost, que competía con McLaren. La carrera fue detenida con bandera roja cuando Senna se acercaba al francés, dejando abierta durante décadas la discusión sobre qué podría haber ocurrido si la prueba continuaba. Aunque no consiguió la victoria, aquella actuación en el emblemático circuito de Montecarlo mostró por primera vez ante todo el mundo su extraordinaria capacidad para conducir en condiciones de lluvia.",

        etiquetas:
        [
            "Lluvia",
            "Ayrton Senna",
            "Alain Prost",
            "Mónaco"
        ],

        video: "https://www.youtube.com/embed/EovwrF2_yug",
        youtube: "https://www.youtube.com/watch?v=EovwrF2_yug"
    },


    {
        anio: "1986",
        titulo: "Gran Premio de Australia",
        subtitulo: "Tres pilotos y un campeonato en juego",
        tipo: "Definición de campeonato",
        protagonistas: "Nigel Mansell · Alain Prost · Nelson Piquet",
        momento: "El reventón que cambió el título",

        descripcion: "El Gran Premio de Australia de 1986 decidió uno de los campeonatos más disputados de la historia. Nigel Mansell llegó como líder con 70 puntos, seguido por Alain Prost con 64 y Nelson Piquet con 63. Mansell necesitaba finalizar tercero para asegurarse el campeonato, pero la situación cambió dramáticamente cuando uno de sus neumáticos traseros explotó a alta velocidad y lo obligó a abandonar. Williams llamó posteriormente a Piquet a boxes por precaución, mientras Prost aprovechó la situación para ganar la carrera y conquistar su segundo Campeonato Mundial.",

        etiquetas:
        [
            "Final de temporada",
            "Nigel Mansell",
            "Alain Prost",
            "Neumático"
        ],

        video: "https://www.youtube.com/embed/BWwBfgg6tgg",
        youtube: "https://www.youtube.com/watch?v=BWwBfgg6tgg"
    },


    {
        anio: "1996",
        titulo: "Gran Premio de España",
        subtitulo: "Schumacher bajo la lluvia",
        tipo: "Exhibición bajo lluvia",
        protagonistas: "Michael Schumacher · Ferrari",
        momento: "Primera victoria con Ferrari",

        descripcion: "El Gran Premio de España de 1996 es recordado como una de las grandes actuaciones de Michael Schumacher bajo la lluvia. Después de una mala largada, el alemán comenzó a recuperar posiciones y llegó a girar varios segundos por vuelta más rápido que gran parte de sus rivales en una pista completamente mojada. Schumacher terminó dominando la competencia y consiguió su primera victoria con Ferrari, además de alcanzar el vigésimo triunfo de su carrera en Fórmula 1. La actuación quedó considerada entre las exhibiciones más recordadas de conducción sobre piso mojado.",

        etiquetas:
        [
            "Lluvia",
            "Michael Schumacher",
            "Ferrari",
            "Primera victoria"
        ],

        video: "https://www.youtube.com/embed/a8DvylZN0r8",
        youtube: "https://www.youtube.com/watch?v=a8DvylZN0r8"
    },


    {
        anio: "2021",
        titulo: "Gran Premio de Abu Dabi",
        subtitulo: "Una definición histórica y polémica",
        tipo: "Definición de campeonato",
        protagonistas: "Max Verstappen · Lewis Hamilton",
        momento: "Safety Car y última vuelta",

        descripcion: "El Gran Premio de Abu Dabi de 2021 fue una de las definiciones de campeonato con mayor impacto de la Fórmula 1 moderna. Max Verstappen y Lewis Hamilton llegaron empatados en puntos después de una temporada de enorme tensión, que también había incluido enfrentamientos entre ambos en Silverstone y Monza. Hamilton lideró gran parte de la carrera, pero el accidente de Nicholas Latifi en la vuelta 53 provocó el ingreso del Safety Car. En la vuelta 57, dirección de carrera permitió desdoblarse únicamente a los cinco autos rezagados ubicados entre Hamilton y Verstappen. La prueba se relanzó para una última vuelta y Verstappen, con neumáticos más nuevos, superó a Hamilton para ganar la carrera y el campeonato. La decisión provocó una enorme controversia y convirtió a aquella definición en una de las más discutidas de la historia de la categoría.",

        etiquetas:
        [
            "Campeonato",
            "Max Verstappen",
            "Lewis Hamilton",
            "Polémica"
        ],

        video: "https://www.youtube.com/embed/6EnsnkdNNJo",
        youtube: "https://www.youtube.com/watch?v=6EnsnkdNNJo"
    }
];


function iniciarCarreras()
{
    const botones = document.querySelectorAll(".boton-carrera");

    for (let i = 0; i < botones.length; i++)
    {
        botones[i].addEventListener("click",seleccionarCarrera);
    }

    mostrarCarrera(0);
}


function seleccionarCarrera(evento)
{
    const indice = Number(evento.currentTarget.dataset.indice);

    mostrarCarrera(indice);
    actualizarBotonActivo(indice);
}


function mostrarCarrera(indice)
{
    const carrera = carreras[indice];

    document.getElementById("carrera-anio").textContent = carrera.anio;
    document.getElementById("carrera-titulo").textContent = carrera.titulo;
    document.getElementById("carrera-subtitulo").textContent = carrera.subtitulo;

    document.getElementById("carrera-tipo").textContent = carrera.tipo;
    document.getElementById("carrera-protagonistas").textContent = carrera.protagonistas;
    document.getElementById("carrera-momento").textContent = carrera.momento;

    document.getElementById("carrera-descripcion").textContent = carrera.descripcion;

    document.getElementById("video-carrera").src = carrera.video;
    document.getElementById("video-carrera").title = carrera.titulo + " " + carrera.anio;

    document.getElementById("enlace-video-carrera").href = carrera.youtube;

    cargarEtiquetas(carrera.etiquetas);
}


function cargarEtiquetas(etiquetas)
{
    const contenedor = document.getElementById("carrera-etiquetas");

    contenedor.innerHTML = "";

    for (let i = 0; i < etiquetas.length; i++)
    {
        const etiqueta = document.createElement("span");

        etiqueta.textContent = etiquetas[i];

        contenedor.appendChild(etiqueta);
    }
}


function actualizarBotonActivo(indice)
{
    const botones = document.querySelectorAll(".boton-carrera");

    for (let i = 0; i < botones.length; i++)
    {
        botones[i].classList.remove("activo-carrera");
    }

    botones[indice].classList.add("activo-carrera");
}


iniciarCarreras();