# Historia F1 Botbol

Este es un proyecto académico desarrollado para la materia **Introducción a la Programación Web** de la UAI.

El sitio presenta un recorrido por la historia de la Fórmula 1 mediante distintas cumpliendo con el tota de 10 secciones dedicadas. Entre estas se encuentra  sus décadas, campeones, escuderías, carreras destacadas, pilotos argentinos y curiosidades. Además, incorpora funcionalidades interactivas desarrolladas con JavaScript y almacenamiento local mediante `localStorage`.

## Autor

**Nicolas Botbol**

Universidad Abierta Interamericana  
Materia: Introducción a la Programación Web

## Tecnologías utilizadas

El proyecto fue desarrollado utilizando:

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git y GitHub
- GitHub Pages

No se utilizaron frameworks ni librerías externas para la construcción principal del sitio.

## Estructura del sitio

El proyecto está compuesto por las siguientes secciones:

1. Inicio
2. Historia
3. Décadas
4. Campeones
5. Escuderías
6. Carreras destacadas
7. Pilotos argentinos
8. Mi perfil
9. Curiosidades
10. Contacto

Cada sección desarrolla diferentes aspectos históricos o interactivos relacionados con la Fórmula 1.

## Principales funcionalidades

Entre las funcionalidades desarrolladas se encuentran:

- Navegación entre las diferentes páginas del sitio.
- Filtrado de información por décadas.
- Visualización dinámica de carreras destacadas.
- Visualización dinámica de curiosidades.
- Selección interactiva de escuderías históricas.
- Tabla ordenable de pilotos argentinos.
- Creación y eliminación de perfiles.
- Selección de piloto, circuito y escudería favorita.
- Personalización visual del sitio según la escudería seleccionada.
- Persistencia de perfiles y preferencias mediante `localStorage`.
- Recuperación automática del perfil seleccionado.
- Formulario de contacto.
- Diseño responsive para distintas resoluciones de pantalla.

## Organización de archivos

La estructura principal del proyecto se organiza de la siguiente manera:

```text
historiaf1botbol/
│
├── index.html
│
├── css/
│   └── estilos.css
│
├── js/
│   ├── perfil-global.js
│   ├── script.js
│   ├── contacto.js
│   ├── decadas.js
│   ├── carreras.js
│   ├── curiosidades.js
│   ├── escuderias.js
│   └── pilotos-argentinos.js
│
├── img/
│   ├── favicon.png
│   ├── banderas/
│   ├── curiosidades/
│   ├── decadas/
│   ├── escuderias/
│   ├── escuderias-historicas/
│   └── pilotos-argentinos/
│
└── paginas/
    ├── historia.html
    ├── decadas.html
    ├── campeones.html
    ├── escuderias.html
    ├── carrerasdestacadas.html
    ├── pilotosargentinos.html
    ├── miperfil.html
    ├── curiosidades.html
    └── contacto.html
```

## Uso de LocalStorage

La sección **Mi perfil** utiliza `localStorage` para conservar la información del usuario en el navegador.

Se almacenan principalmente:

- perfiles creados;
- perfil seleccionado;
- piloto favorito;
- circuito favorito;
- escudería favorita.

Los objetos y arrays son convertidos a texto mediante `JSON.stringify()` antes de almacenarse y recuperados mediante `JSON.parse()`.


## Personalización por escudería

Cuando un usuario selecciona una escudería favorita, el sitio modifica determinados elementos visuales utilizando los colores asociados al equipo.

La personalización se aplica mediante clases CSS agregadas dinámicamente al documento con JavaScript.

Entre las escuderías disponibles se encuentran:

- McLaren
- Ferrari
- Red Bull Racing
- Mercedes
- Aston Martin
- Alpine
- Williams
- Haas F1 Team
- Racing Bulls
- Kick Sauber

## Fuentes y créditos

El contenido del sitio fue elaborado con fines exclusivamente educativos y académicos utilizando material disponible en internet.

Para la investigación histórica, estadística y contextual de la Fórmula 1 se consultaron principalmente fuentes especializadas y sitios de referencia, entre ellos:

- **Formula 1 – Sitio oficial**  
  Información histórica, estadísticas, pilotos, equipos, campeonatos y acontecimientos destacados.

- **FIA – Fédération Internationale de l'Automobile**  
  Información institucional, reglamentaria e histórica relacionada con las competencias internacionales de automovilismo.

- **Wikimedia Commons**  
  Utilizado como referencia y fuente complementaria para determinados recursos gráficos e imágenes históricas.

- **Wikipedia**  
  Utilizada como fuente complementaria para verificar fechas, temporadas, resultados y datos históricos.

- **YouTube**  
  Los videos incluidos en la sección de carreras destacadas son reproducidos mediante enlaces o reproductores embebidos y pertenecen a sus respectivos autores y canales.
-**Motorsport - Sitio oficial**
 Informancion,notas y videos relacionados a diferentes secciones.

También se consultaron diferentes publicaciones y recursos especializados en automovilismo para contrastar determinados datos históricos, fuentes desarrolladas por autores particulares, posteos en foros como Reddit con información verificada y curada.

### Imágenes y logotipos

Los logotipos de equipos, fotografías históricas, banderas y demás recursos gráficos utilizados en el sitio se incorporan únicamente con finalidad educativa dentro de este trabajo académico.

El sitio no tiene fines comerciales ni pretende atribuirse la autoría de estos recursos.

## Finalidad académica

Este sitio fue desarrollado como trabajo académico para aplicar los contenidos aprendidos durante la cursada de **Introducción a la Programación Web**.

El objetivo principal fue integrar en un único proyecto conceptos de:

- estructura y semántica HTML;
- estilos CSS;
- diseño responsive;
- manipulación del DOM;
- eventos JavaScript;
- formularios;
- almacenamiento local;
- arrays y objetos;
- funciones;
- interacción con el usuario;
- organización y navegación de un sitio web.

Para el diseño de estilos de CSS se uso asistencia en determinadas configuraciones de herramientas como Copilot a fin de generar estilos  visuales mas completos.
El archivo CSS podría haber sido refactorizando, generando una mayor reutilización de clases pero quedo de forma incremental en la cual fue desarrollando las distintas secciones a medida que avanzaba el curso.