const CLAVE_PERFILES_GLOBAL = "perfilesF1";
const CLAVE_PERFIL_SELECCIONADO_GLOBAL = "perfilSeleccionado";


const escuderiasGlobal =
{
    "McLaren":
    {
        clase: "fondo-mclaren",
        logo: "../img/escuderias/mclaren-web.png"
    },

    "Ferrari":
    {
        clase: "fondo-ferrari",
        logo: "../img/escuderias/ferrari-web.png"
    },

    "Red Bull Racing":
    {
        clase: "fondo-redbull",
        logo: "../img/escuderias/red-bull-web.png"
    },

    "Mercedes":
    {
        clase: "fondo-mercedes",
        logo: "../img/escuderias/mercedes-web.png"
    },

    "Aston Martin":
    {
        clase: "fondo-astonmartin",
        logo: "../img/escuderias/aston-martin-web.png"
    },

    "Alpine":
    {
        clase: "fondo-alpine",
        logo: "../img/escuderias/alpine-web.png"
    },

    "Williams":
    {
        clase: "fondo-williams",
        logo: "../img/escuderias/williams-web.png"
    },

    "Haas F1 Team":
    {
        clase: "fondo-haas",
        logo: "../img/escuderias/haas-web.png"
    },

    "Racing Bulls":
    {
        clase: "fondo-racingbulls",
        logo: "../img/escuderias/racing-bulls-web.png"
    },

    "Kick Sauber":
    {
        clase: "fondo-sauber",
        logo: "../img/escuderias/kick-sauber-web.png"
    }
};


function iniciarPerfilGlobal()
{
    const perfilesGuardados = localStorage.getItem(CLAVE_PERFILES_GLOBAL);
    const perfilSeleccionado = localStorage.getItem(CLAVE_PERFIL_SELECCIONADO_GLOBAL);

    if (perfilesGuardados === null || perfilSeleccionado === null)
    {
        return;
    }

    const perfiles = JSON.parse(perfilesGuardados);

    for (let i = 0; i < perfiles.length; i++)
    {
        if (perfiles[i].nombrePerfil === perfilSeleccionado)
        {
            aplicarPerfilGlobal(perfiles[i]);
            return;
        }
    }
}


function aplicarPerfilGlobal(perfil)
{
    if (perfil.escuderiaFavorita !== "" && escuderiasGlobal[perfil.escuderiaFavorita] !== undefined)
    {
        const datosEscuderia = escuderiasGlobal[perfil.escuderiaFavorita];

        document.body.classList.add(datosEscuderia.clase);

        mostrarPerfilGlobal(perfil,datosEscuderia.logo);
    }
}


function mostrarPerfilGlobal(perfil,logo)
{
    const encabezado = document.querySelector("header");

    if (encabezado === null)
    {
        return;
    }

    const panelPerfil = document.createElement("div");

    panelPerfil.className = "perfil-global";


    const imagen = document.createElement("img");

    imagen.src = logo;
    imagen.alt = "Logo de " + perfil.escuderiaFavorita;


    const datos = document.createElement("div");

    datos.className = "perfil-global-datos";


    const nombrePerfil = document.createElement("strong");

    nombrePerfil.textContent = perfil.nombrePerfil;


    const piloto = document.createElement("span");

    piloto.textContent = perfil.pilotoFavorito;


    datos.appendChild(nombrePerfil);
    datos.appendChild(piloto);

    panelPerfil.appendChild(imagen);
    panelPerfil.appendChild(datos);

    encabezado.appendChild(panelPerfil);
}


iniciarPerfilGlobal();