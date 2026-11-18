const CLAVE_PERFILES = "perfilesF1";
const CLAVE_PERFIL_SELECCIONADO = "perfilSeleccionado";

let perfiles = [];
let indicePerfilSeleccionado = -1;


/* ===== DATOS DE FORMULA 1 ===== */

const pilotos2025 =
[
    "Lando Norris","Max Verstappen","Oscar Piastri","George Russell","Charles Leclerc","Lewis Hamilton","Kimi Antonelli","Alexander Albon",
    "Carlos Sainz","Fernando Alonso","Nico Hülkenberg","Isack Hadjar","Oliver Bearman","Liam Lawson","Esteban Ocon","Lance Stroll",
    "Yuki Tsunoda","Pierre Gasly","Gabriel Bortoleto","Franco Colapinto"
];


const pilotosHistoricos =
[
    "Juan Manuel Fangio","Ayrton Senna","Niki Lauda","Stirling Moss","James Hunt","Alain Prost","Michael Schumacher","Jim Clark",
    "Jackie Stewart","Nelson Piquet","Nigel Mansell","Mika Häkkinen","Gilles Villeneuve","Sebastian Vettel"
];


const circuitos =
[
    "Albert Park - Australia",
    "Shanghai - China",
    "Suzuka - Japón",
    "Sakhir - Bahréin",
    "Jeddah - Arabia Saudita",
    "Miami - Estados Unidos",
    "Imola - Italia",
    "Mónaco",
    "Barcelona-Catalunya - España",
    "Gilles Villeneuve - Canadá",
    "Red Bull Ring - Austria",
    "Silverstone - Reino Unido",
    "Spa-Francorchamps - Bélgica",
    "Hungaroring - Hungría",
    "Zandvoort - Países Bajos",
    "Monza - Italia",
    "Bakú - Azerbaiyán",
    "Marina Bay - Singapur",
    "Circuit of the Americas - Estados Unidos",
    "Hermanos Rodríguez - México",
    "Interlagos - Brasil",
    "Las Vegas - Estados Unidos",
    "Lusail - Qatar",
    "Yas Marina - Abu Dhabi"
];


const escuderias =
[
    "McLaren",
    "Ferrari",
    "Red Bull Racing",
    "Mercedes",
    "Aston Martin",
    "Alpine",
    "Williams",
    "Haas F1 Team",
    "Racing Bulls",
    "Kick Sauber"
];


const datosEscuderias =
{
  "McLaren":
    {
        clase: "tema-mclaren",
        fondo: "fondo-mclaren",
        logo: "../img/escuderias/mclaren-web.png"
    },

    "Ferrari":
    {
        clase: "tema-ferrari",
        fondo: "fondo-ferrari",
        logo: "../img/escuderias/ferrari-web.png"
    },

    "Red Bull Racing":
    {
        clase: "tema-redbull",
        fondo: "fondo-redbull",
        logo: "../img/escuderias/red-bull-web.png"
    },

    "Mercedes":
    {
        clase: "tema-mercedes",
        fondo: "fondo-mercedes",
        logo: "../img/escuderias/mercedes-web.png"
    },

    "Aston Martin":
    {
        clase: "tema-astonmartin",
        fondo: "fondo-astonmartin",
        logo: "../img/escuderias/aston-martin-web.png"
    },

    "Alpine":
    {
        clase: "tema-alpine",
        fondo: "fondo-alpine",
        logo: "../img/escuderias/alpine-web.png"
    },

    "Williams":
    {
        clase: "tema-williams",
        fondo: "fondo-williams",
        logo: "../img/escuderias/williams-web.png"
    },

    "Haas F1 Team":
    {
        clase: "tema-haas",
        fondo: "fondo-haas",
        logo: "../img/escuderias/haas-web.png"
    },

    "Racing Bulls":
    {
        clase: "tema-racingbulls",
        fondo: "fondo-racingbulls",
        logo: "../img/escuderias/racing-bulls-web.png"
    },

    "Kick Sauber":
    {
        clase: "tema-sauber",
        fondo: "fondo-sauber",
        logo: "../img/escuderias/kick-sauber-web.png"
    }
};


/* ===== INICIO DE LA APLICACION ===== */

function iniciarAplicacion()
{
    cargarListas();
    recuperarPerfiles();
    actualizarSelectorPerfiles();
    recuperarPerfilSeleccionado();
    suscribirEventos();
}


function suscribirEventos()
{
    document.getElementById("btn-crear-perfil").addEventListener("click", crearPerfil);

    document.getElementById("selector-perfiles").addEventListener("change", seleccionarPerfil);

    document.getElementById("btn-eliminar-perfil").addEventListener("click", eliminarPerfil);

    document.getElementById("btn-guardar-preferencias").addEventListener("click", guardarPreferencias);

    document.getElementById("escuderia-favorita").addEventListener("change", previsualizarEscuderia);
}


/* ===== CARGA DE LISTAS ===== */

function cargarListas()
{
    agregarOpciones(document.getElementById("grupo-pilotos-actuales"),pilotos2025);

    agregarOpciones(document.getElementById("grupo-pilotos-historicos"),pilotosHistoricos);

    agregarOpciones(document.getElementById("circuito-favorito"),circuitos);

    agregarOpciones(document.getElementById("escuderia-favorita"),escuderias);
}


function agregarOpciones(elemento, lista)
{
    lista.forEach(function(valor)
    {
        const opcion = document.createElement("option");

        opcion.value = valor;
        opcion.textContent = valor;

        elemento.appendChild(opcion);
    });
}


/* ===== LOCAL STORAGE ===== */

function recuperarPerfiles()
{
    const perfilesGuardados =localStorage.getItem(CLAVE_PERFILES);

    if (perfilesGuardados !== null)
    {
        perfiles = JSON.parse(perfilesGuardados);
    }
}


function guardarPerfiles()
{
    localStorage.setItem(CLAVE_PERFILES,JSON.stringify(perfiles));
}

function recuperarPerfilSeleccionado()
{
    const nombrePerfilGuardado = localStorage.getItem(CLAVE_PERFIL_SELECCIONADO);

    if (nombrePerfilGuardado === null)
    {
        return;
    }

    for (let i = 0; i < perfiles.length; i++)
    {
        if (perfiles[i].nombrePerfil === nombrePerfilGuardado)
        {
            document.getElementById("selector-perfiles").value = i;
            seleccionarPerfil();
            return;
        }
    }

    localStorage.removeItem(CLAVE_PERFIL_SELECCIONADO);
}

/* ===== CREACION DE PERFIL ===== */

function crearPerfil()
{
    limpiarMensajes();

    if (perfiles.length >= 5)
    {
        mostrarMensajePerfil("Ya se alcanzó el máximo de cinco perfiles.");
        return;
    }


    const nombrePerfil = document.getElementById("nombre-perfil").value.trim();

    const nombreCompleto = document.getElementById("nombre-completo").value.trim();

    const email = document.getElementById("email-perfil").value.trim();


    let datosValidos = true;


    if (nombrePerfil.length < 3)
    {
        document.getElementById("error-nombre-perfil").textContent = "El nombre del perfil debe tener al menos 3 caracteres.";
        datosValidos = false;
    }


    if (nombrePerfilExiste(nombrePerfil))
    {
        document.getElementById("error-nombre-perfil").textContent ="Ya existe un perfil con ese nombre.";
        datosValidos = false;
    }


    if (!esNombreCompletoValido(nombreCompleto))
    {
        document.getElementById("error-nombre-completo").textContent ="Ingresá un nombre utilizando solamente letras y espacios.";
        datosValidos = false;
    }


    if (!esEmailValido(email))
    {
        document.getElementById("error-email").textContent ="Ingresá un correo electrónico válido.";
        datosValidos = false;
    }


    if (!datosValidos)
    {
        return;
    }


    const nuevoPerfil =
    {
        nombrePerfil: nombrePerfil,
        nombreCompleto: nombreCompleto,
        email: email,
        pilotoFavorito: "",
        circuitoFavorito: "",
        escuderiaFavorita: ""
    };


    perfiles.push(nuevoPerfil);

    guardarPerfiles();
    actualizarSelectorPerfiles();

    document.getElementById("selector-perfiles").value =perfiles.length - 1;

    seleccionarPerfil();
    limpiarFormularioPerfil();

    mostrarMensajePerfil("Perfil creado correctamente.");
}


function nombrePerfilExiste(nombrePerfil)
{
    for (let i = 0; i < perfiles.length; i++)
    {
        if (perfiles[i].nombrePerfil.toLowerCase() ===nombrePerfil.toLowerCase())
        {
            return true;
        }
    }
    return false;
}


/* ===== VALIDACIONES ===== */

function esNombreCompletoValido(nombre)
{
    if (nombre.length === 0)
    {
        return false;
    }


    const caracteresPermitidos =" abcdefghijklmnñopqrstuvwxyzáéíóúü";
    const nombreMinuscula = nombre.toLowerCase();


    for (let i = 0; i < nombreMinuscula.length; i++)
    {
        if (caracteresPermitidos.indexOf(nombreMinuscula[i]) === -1)
        {
            return false;
        }
    }
    return true;
}


function esEmailValido(email)
{
    const posicionArroba = email.indexOf("@");
    const ultimaArroba = email.lastIndexOf("@");
    const posicionPunto = email.lastIndexOf(".");

    if (email.length === 0)
    {
        return false;
    }
    if (posicionArroba <= 0)
    {
        return false;
    }
    if (posicionArroba !== ultimaArroba)
    {
        return false;
    }
    if (posicionPunto <= posicionArroba + 1)
    {
        return false;
    }
    if (posicionPunto === email.length - 1)
    {
        return false;
    }
    return true;
}


/* ===== SELECTOR DE PERFILES ===== */

function actualizarSelectorPerfiles()
{
    const selector =document.getElementById("selector-perfiles");


    selector.innerHTML ='<option value="">-- Seleccionar --</option>';


    for (let i = 0; i < perfiles.length; i++)
    {
        const opcion =document.createElement("option");

        opcion.value = i;
        opcion.textContent =perfiles[i].nombrePerfil;
        selector.appendChild(opcion);
    }
}


function seleccionarPerfil()
{
    const selector =document.getElementById("selector-perfiles");


    if (selector.value === "")
    {
        indicePerfilSeleccionado = -1;

        localStorage.removeItem(CLAVE_PERFIL_SELECCIONADO);

        desactivarPreferencias();
        return;
    }


    indicePerfilSeleccionado =Number(selector.value);


    const perfil = perfiles[indicePerfilSeleccionado];
    localStorage.setItem(CLAVE_PERFIL_SELECCIONADO,perfil.nombrePerfil);

    mostrarDatosPerfil(perfil);
    activarPreferencias();


    document.getElementById("piloto-favorito").value = perfil.pilotoFavorito;

    document.getElementById("circuito-favorito").value = perfil.circuitoFavorito;

    document.getElementById("escuderia-favorita").value = perfil.escuderiaFavorita;


    aplicarEstiloEscuderia(perfil.escuderiaFavorita);
}


function mostrarDatosPerfil(perfil)
{
    const datos =document.getElementById("datos-perfil-seleccionado");


    datos.innerHTML =
        `<p><strong>Perfil:</strong> ${perfil.nombrePerfil}</p>
         <p><strong>Nombre:</strong> ${perfil.nombreCompleto}</p>
         <p><strong>Email:</strong> ${perfil.email}</p>`;
}


/* ===== ELIMINACION ===== */

function eliminarPerfil()
{
    if (indicePerfilSeleccionado === -1)
    {
        return;
    }


    perfiles.splice(indicePerfilSeleccionado,1);


    guardarPerfiles();
    localStorage.removeItem(CLAVE_PERFIL_SELECCIONADO);
    indicePerfilSeleccionado = -1;

    actualizarSelectorPerfiles();
    desactivarPreferencias();

    mostrarMensajePerfil("Perfil eliminado correctamente.");
}


/* ===== PREFERENCIAS ===== */

function activarPreferencias()
{
    document.getElementById("piloto-favorito").disabled = false;

    document.getElementById("circuito-favorito").disabled = false;

    document.getElementById("escuderia-favorita").disabled = false;

    document.getElementById("btn-guardar-preferencias").disabled = false;

    document.getElementById("btn-eliminar-perfil").disabled = false;
}


function desactivarPreferencias()
{
    document.getElementById("piloto-favorito").disabled = true;

    document.getElementById("circuito-favorito").disabled = true;

    document.getElementById("escuderia-favorita").disabled = true;

    document.getElementById("btn-guardar-preferencias").disabled = true;

    document.getElementById("btn-eliminar-perfil").disabled = true;


    document.getElementById("piloto-favorito").value = "";
    document.getElementById("circuito-favorito").value = "";
    document.getElementById("escuderia-favorita").value = "";


    document.getElementById("datos-perfil-seleccionado").innerHTML ="<p>Seleccioná un perfil para ver sus datos.</p>";
    aplicarEstiloEscuderia("");
}


function guardarPreferencias()
{
    if (indicePerfilSeleccionado === -1)
    {
        return;
    }


    const piloto = document.getElementById("piloto-favorito").value;

    const circuito = document.getElementById("circuito-favorito").value;

    const escuderia = document.getElementById("escuderia-favorita").value;


    if (piloto === "" || circuito === "" || escuderia === "")
    {
        document.getElementById("mensaje-preferencias").textContent = "Seleccioná las tres preferencias antes de guardar.";
        return;
    }


    perfiles[indicePerfilSeleccionado].pilotoFavorito = piloto;

    perfiles[indicePerfilSeleccionado].circuitoFavorito = circuito;

    perfiles[indicePerfilSeleccionado].escuderiaFavorita = escuderia;
    guardarPerfiles();
    aplicarEstiloEscuderia(escuderia);


    document.getElementById("mensaje-preferencias").textContent ="Preferencias guardadas correctamente.";
}


function previsualizarEscuderia()
{
    const escuderia =document.getElementById("escuderia-favorita").value;
    aplicarEstiloEscuderia(escuderia);
}


/* ===== ESTILO DE ESCUDERIA ===== */

function aplicarEstiloEscuderia(escuderia)
{
 const panel = document.getElementById("panel-preferencias");

    const logo =document.getElementById("logo-escuderia");
    const cuerpo = document.body;


    const clasesFondos =
    [
        "fondo-mclaren",
        "fondo-ferrari",
        "fondo-redbull",
        "fondo-mercedes",
        "fondo-astonmartin",
        "fondo-alpine",
        "fondo-williams",
        "fondo-haas",
        "fondo-racingbulls",
        "fondo-sauber"
    ];


    /* Restablece el estilo del panel */

    panel.className = "perfil-seccion panel-preferencias";


    /* Quita el fondo de la escuderia anterior */

    for (let i = 0; i < clasesFondos.length; i++)
    {
        cuerpo.classList.remove(clasesFondos[i]);
    }


    /* Si no hay escuderia seleccionada */

    if (escuderia === "" ||datosEscuderias[escuderia] === undefined)
    {
        logo.src = "";
        logo.alt = "";
        logo.classList.remove("visible");
        return;
    }

    const datos = datosEscuderias[escuderia];

    /* Aplica color al panel */

    panel.classList.add(datos.clase);


    /* Aplica color suave al fondo general */

    cuerpo.classList.add(datos.fondo);


    /* Muestra el logo */

    logo.src = datos.logo;
    logo.alt = "Logo de " + escuderia;
    logo.classList.add("visible");
}


/* ===== FUNCIONES AUXILIARES ===== */

function limpiarFormularioPerfil()
{
    document.getElementById("nombre-perfil").value = "";
    document.getElementById("nombre-completo").value = "";
    document.getElementById("email-perfil").value = "";
}


function limpiarMensajes()
{
    document.getElementById("error-nombre-perfil").textContent = "";

    document.getElementById("error-nombre-completo").textContent = "";

    document.getElementById("error-email").textContent = "";

    document.getElementById("mensaje-perfil").textContent = "";

    document.getElementById("mensaje-preferencias").textContent = "";
}


function mostrarMensajePerfil(mensaje)
{
    document.getElementById("mensaje-perfil").textContent = mensaje;
}


iniciarAplicacion();