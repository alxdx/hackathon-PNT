## Título del aplicativo

Explorador web de Instituciones por estado y categoría, con motor de búsqueda inteligente y procesamiento de lenguaje natural para interpretar las consultas del usuario.

### Objetivo

Incentivar la exploración de la información disponible en la plataforma de transparencia, partiendo de los Sujetos obligados que proporcionan información por estado y categoría.

### Usuarios objetivo

Público en general, especialmente personas que no conocen el tipo de información que ofrece la PNT.

### Motivación

La PNT actualmente no ofrece una búsqueda lo suficientemente amigable para el usuario. Creemos que es más importante enfocarse en la información que las instituciones ofrecen. Es por eso que clasificamos los más de 8000 sujetos obligados que están registrados en todo el país y los clasificamos por categorías. Además sintetizamos toda esa información en un mapa interactivo que ofrezca un componente de &quot;gamification&quot;, genere interés e incentive al usuario promedio a explorar las instituciones con datos abiertos. En la imagen siguiente se muestra la interfaz de búsqueda de la información pública actual que ofrece la PNT:

![](1.jpg)

### Propuesta

Considerando que las soluciones propuestas sean fáciles de implementar o anexar a la plataforma actual, proponemos dos cosas que faciliten e incentiven al usuario a explorar la información en la PNT.

- Una capa sobre el buscador que interprete preguntas del lenguaje natural al método de búsqueda que la PNT ya implementa
- Mapa interactivo que sustituye la interfaz de &quot;Información Pública&quot; y permite explorar la información de cada una de las instituciones por estado y por tipo (sindicatos, universidades, de salud etc.)

Las dos propuestas contenidas en una página web que respete y se apegue a la identidad de la plataforma actual.

Línk a la aplicación : [hackathon-pnp.herokuapp.com/](https://hackathon-pnp.herokuapp.com/)

LInk del codigo:[https://github.com/alxdx/hackathon-PNT](https://github.com/alxdx/hackathon-PNT)

# Trabajo realizado

## **Buscador con procesamiento del lenguaje natural**

Implementamos una capa sobre el buscador que ya utiliza la PNT y está dirigido por la función: headerTextSearch(event,&#39;[https://buscador.plataformadetransparencia.org.mx/web/guest/buscadornacional?buscador=](https://buscador.plataformadetransparencia.org.mx/web/guest/buscadornacional?buscador=)&#39;);

Actualmente el buscador no es capaz de interpretar queries de la forma:

- ¿Cuales son los sindicatos de Puebla ?
- sueldos de universidades de Coahuila
- Cuales son los tribunales de la federacion?
- trabajadores de la sep
- dif en amozoc

Estas queries son muy comunes pues la eficacia de los motores de búsqueda como google nos tienen acostumbrados a esto.

Se muestra como ejemplo que el número de resultado es mínimo o ninguno para queries &quot;más humanas&quot; e intuitivas:

![](2.jpg)

Con esta nueva capa los resultados que se devuelven bajo la misma consulta son significativamente más pues pasan de **39** a **59925** en esta consulta.

Consulta en nuestra aplicación:

![](3.png)

Resultados de la búsqueda:

![](4.png)

Debido a la forma en la que está implementada la búsqueda en la PNT esta capa se agregó del lado de nuestro servidor de aplicación.

Sin embargo, sería extremadamente fácil de implementar en el servidor de la PNT ofreciendo mejores resultados y permitiendo búsquedas más cercanas al lenguaje de la población.

## **Explorador interactivo**

Descargamos y clasificamos la información de todos los sujetos obligados por estado,establecimos las siguientes categorías:

- &quot;Sindicatos&quot;,
- &quot;Agua y Medio Ambiente&quot;,
- &quot;Candidatos&quot;,
- &quot;Comisiones Electorales&quot;,
- &quot;Comisiones de Derechos Humanos&quot;,
- &quot;Educación Media Superior&quot;,
- &quot;Familia&quot;,
- &quot;Instituciones de Salud&quot;,
- &quot;Otras Secretarías&quot;,
- &quot;Partidos Políticos&quot;,
- &quot;Sindicatos&quot;,
- &quot;Sujetos&quot;,
- &quot;Tribunales&quot;,
- &quot;Universidades&quot;

Sintetizamos toda la información en un mapa interactivo que muestra la cantidad de instituciones que ofrecen datos abiertos en cada entidad.

El archivo json resultante de dicho procesamiento de datos se encuentra en el endpoint: [https://hackathon-pnp.herokuapp.com/static/sujetos\_por\_estado.json](https://hackathon-pnp.herokuapp.com/static/sujetos_por_estado.json)

Los tiempos de respuesta mejoran considerablemente al consultar la lista de instituciones.

![](5.png)

Al hacer click se muestran la lista de instituciones a detalle por categoría, lo que facilita considerablemente la exploración en la información, A diferencia de la lista por orden alfabético que la PNT ofrece actualmente

![](6.png)

Al hacer click en alguna de las instituciones se debería poder acceder a la ventana del sujeto obligado que que ya ofrece la PNT.

**Aspectos a mejorar**: Si se obtiene la dirección de cada una de las instituciones se podrían dibujar una a una en el mapa. No lo implementamos por falta de tiempo

_Nota: Omitimos las información de las alcaldías, los ayuntamientos y los municipios porque estos pueden mostrarse en un mapa diferente._
