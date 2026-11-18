const EMAIL_CONTACTO = "NicolasDemian.Botbol@alumnos.uai.edu.ar";

function limpiarFormularioContacto()
{
    document.getElementById("nombre-contacto").value = "";
    document.getElementById("asunto-contacto").value = "";
    document.getElementById("mensaje-contacto").value = "";

    limpiarMensajesContacto();
}

function iniciarContacto()
{
    document.getElementById("btn-enviar-contacto").addEventListener("click", prepararCorreo);
     document.getElementById("btn-limpiar-contacto").addEventListener("click", limpiarFormularioContacto);
}

function prepararCorreo()
{
    limpiarMensajesContacto();

    const nombre = document.getElementById("nombre-contacto").value.trim();
    const asunto = document.getElementById("asunto-contacto").value.trim();
    const mensaje = document.getElementById("mensaje-contacto").value.trim();

    let datosValidos = true;


    if (nombre.length < 3)
    {
        document.getElementById("error-nombre-contacto").textContent = "Ingresá un nombre válido.";
        datosValidos = false;
    }


    if (asunto.length === 0)
    {
        document.getElementById("error-asunto-contacto").textContent = "Ingresá el asunto del mensaje.";
        datosValidos = false;
    }


    if (mensaje.length === 0)
    {
        document.getElementById("error-mensaje-contacto").textContent = "Ingresá un mensaje.";
        datosValidos = false;
    }


    if (!datosValidos)
    {
        return;
    }


    const asuntoCorreo = encodeURIComponent(asunto);

    const cuerpoCorreo = encodeURIComponent("Nombre: " + nombre +"\n\nMensaje:\n" + mensaje);


    const enlaceCorreo = "mailto:" + EMAIL_CONTACTO + "?subject=" + asuntoCorreo + "&body=" + cuerpoCorreo;


    document.getElementById("mensaje-contacto-estado").textContent = "Abriendo tu aplicación de correo...";

    window.location.href = enlaceCorreo;
}


function limpiarMensajesContacto()
{
    document.getElementById("error-nombre-contacto").textContent = "";
    document.getElementById("error-asunto-contacto").textContent = "";
    document.getElementById("error-mensaje-contacto").textContent = "";
    document.getElementById("mensaje-contacto-estado").textContent = "";
}


iniciarContacto();