function iniciarDecadas()
{
    document.getElementById("seleccion-decada").addEventListener("change",filtrarDecadas);

    const checkboxes = document.querySelectorAll(".checkbox-mas-info");

    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].addEventListener("change",mostrarMasInformacion);
    }
}


function filtrarDecadas()
{
    const decadaSeleccionada = document.getElementById("seleccion-decada").value;

    const decadas = document.querySelectorAll(".decada");

    for (let i = 0; i < decadas.length; i++)
    {
        if (decadaSeleccionada === "todas" || decadas[i].dataset.decada === decadaSeleccionada)
        {
            decadas[i].style.display = "block";
        }
        else
        {
            decadas[i].style.display = "none";
        }
    }

    actualizarEstadoDecadas(decadaSeleccionada);
}


function mostrarMasInformacion(evento)
{
    const idInformacion = evento.target.dataset.informacion;

    const informacion = document.getElementById(idInformacion);

    if (evento.target.checked)
    {
        informacion.hidden = false;
    }
    else
    {
        informacion.hidden = true;
    }
}


function actualizarEstadoDecadas(decada)
{
    const estado = document.getElementById("estado-decadas");

    if (decada === "todas")
    {
        estado.textContent = "Mostrando todas las décadas.";
    }
    else if (decada === "2020")
    {
        estado.textContent = "Mostrando el período 2020-2025.";
    }
    else
    {
        estado.textContent = "Mostrando la década de " + decada + ".";
    }
}


iniciarDecadas();