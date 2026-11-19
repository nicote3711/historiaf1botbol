let ultimaColumnaOrdenada = -1;
let ordenAscendente = true;


function iniciarTablaPilotos()
{
    const encabezados = document.querySelectorAll("#tabla-pilotos-argentinos th");

    for (let i = 0; i < encabezados.length; i++)
    {
        encabezados[i].addEventListener("click",ordenarTabla);
    }
}


function ordenarTabla(evento)
{
    const encabezado = evento.currentTarget;

    const columna = Number(encabezado.dataset.columna);
    const tipo = encabezado.dataset.tipo;

    if (ultimaColumnaOrdenada === columna)
    {
        ordenAscendente = !ordenAscendente;
    }
    else
    {
        ordenAscendente = true;
    }

    ultimaColumnaOrdenada = columna;

    const cuerpoTabla = document.querySelector("#tabla-pilotos-argentinos tbody");

    const filas = Array.from(cuerpoTabla.querySelectorAll("tr"));

    filas.sort(function(filaA,filaB)
    {
        const valorA = filaA.children[columna].textContent.trim();
        const valorB = filaB.children[columna].textContent.trim();

        if (tipo === "numero")
        {
            return compararNumeros(valorA,valorB);
        }
        else
        {
            return compararTexto(valorA,valorB);
        }
    });


    for (let i = 0; i < filas.length; i++)
    {
        cuerpoTabla.appendChild(filas[i]);
    }
}


function compararNumeros(valorA,valorB)
{
    const numeroA = Number(valorA);
    const numeroB = Number(valorB);

    if (ordenAscendente)
    {
        return numeroA - numeroB;
    }
    else
    {
        return numeroB - numeroA;
    }
}


function compararTexto(valorA,valorB)
{
    if (ordenAscendente)
    {
        return valorA.localeCompare(valorB);
    }
    else
    {
        return valorB.localeCompare(valorA);
    }
}


iniciarTablaPilotos();