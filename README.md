# Actividad 1 - Ejercicios Prácticos de Programación Web

## Descripción de la Actividad
Este repositorio contiene la recopilación de 18 ejercicios prácticos desarrollados durante la unidad 2. Cada ejercicio aborda conceptos fundamentales de maquetación con HTML5, hojas de estilo CSS3 y scripts dinámicos con JavaScript.

## Estructura del Repositorio
- `index.html`: Página principal que funciona como menú de navegación hacia todos los ejercicios.
- `ejercicio1.html` a `ejercicio10.html` funcional (momentaneamente, hasta que se suban los otros 8 ejercicios): Archivos individuales de cada práctica.
- `/css`: Hojas de estilo utilizadas en las prácticas.
- `/js`: Scripts de interacción y lógica en JavaScript.
- `/img`: Recursos multimedia e imágenes empleadas.

## Publicación
El proyecto se encuentra desplegado y accesible públicamente a través de GitHub Pages.

## Descripción de los Ejercicios
* **Ejercicio 1 - Hola Mundo:** Estructura básica e inicial de un documento HTML5, uso de encabezados (`<h1>`), párrafos (`<p>`) y enlace de navegación hacia el menú principal.
* **Ejercicio 2 - Formato de Texto:** Aplicación de etiquetas de formato y estilo en línea dentro de párrafos, empleando `<strong>` para texto en negrita, `<em>` para énfasis/cursiva y `<br>` para saltos de línea.
* **Ejercicio 3 - Enlaces y Navegación:** Manejo de hipervínculos con la etiqueta `<a>`, explorando aperturas en nuevas pestañas (`target="_blank"`), en la misma ventana (`target="_self"`) y enlaces relativos internos.
* **Ejercicio 4 - Manejo de Imágenes:** Inserción y dimensionamiento de recursos gráficos locales mediante la etiqueta `<img>`, atributos `src`, `alt` y control de anchura (`width`) desde la carpeta `img/`.
* **Ejercicio 5 - Integración Multimedia y Perfil:** Maquetación de un blog personal integrando texto con formato, imágenes de viajes y enlaces salientes hacia perfiles externos (GitHub).
* **Ejercicio 6 - Estructura Semántica:** Uso de etiquetas semánticas fundamentales de HTML5 (`<header>`, `<section>`, `<footer>`) para segmentar correctamente la cabecera, contenido central y pie de página de un sitio.
* **Ejercicio 7 - Listas Ordenadas y Desordenadas:** Creación y anidación de listas con viñetas (`<ul>`) y listas numeradas (`<ol>`) estructurando una receta de cocina paso a paso con sus ingredientes.
* **Ejercicio 8 - Tablas Complejas y Horarios:** Construcción de una tabla académica avanzada con `<table>`, `<thead>`, `<tbody>`, celdas de encabezado (`<th>`) y combinación de filas y columnas mediante `rowspan` y `colspan`, vinculada a estilos CSS externos.
* **Ejercicio 9 - Formulario de Contacto:** Diseño de un formulario web estructurado (`<form>`) con campos de captura para texto, correo electrónico (`type="email"`), teléfono (`type="tel"`), área de texto (`<textarea>`) y botón de envío, enlazado a estilos externos y Google Fonts.
* **Ejercicio 10 - Interactividad con JavaScript (Conversor de Temperatura):** Integración de lógica del lado del cliente mediante un archivo externo `.js`, capturando la entrada de grados Celsius desde un `input`, procesando la conversión con una función al pulsar un botón y mostrando el resultado en un campo de solo lectura (`readonly`).
* **Ejercicio 11 - Conversión de Kilómetros a Millas: Implementación de una calculadora de conversión métrica a imperial, capturando distancias en kilómetros, validando entradas numéricas con isNaN() y parseFloat(), y proyectando el resultado calculado con decimales formateados en una caja de texto bloqueada (readonly).
* **Ejercicio 12 - Conversor de Divisas (MXN a USD): Formulario interactivo que procesa la equivalencia de pesos mexicanos a dólares estadounidenses según un tipo de cambio fijo, controlando la validación de campos vacíos mediante JavaScript y desplegando el monto resultante en un campo de solo lectura (readonly).
* **Ejercicio 13 - Verificación de Edad para Votación: Sistema de validación condicional que evalúa si un usuario cuenta con la mayoría de edad (>= 18 años) para ejercer el voto, verificando que la entrada sea un número positivo y mostrando los mensajes "Puedes votar" o "No puedes votar" dentro de un input con el atributo readonly.  
* **Ejercicio 14 - Operaciones Numéricas con Arreglos: Captura y procesamiento de una serie de números delimitados por comas ingresados en un campo de texto. Utiliza métodos funcionales de arreglos como split(), map(), el operador spread (...) con Math.max() y Math.min(), y reduce() para calcular dinámicamente el valor máximo, el mínimo y el promedio general en tres cajas de texto readonly.  
* **Ejercicio 15 - Registro de Calificaciones con Objetos: Aplicación web que modela entidades de estudiantes mediante objetos {nombre, calificacion} almacenados dinámicamente en un arreglo. Incluye funciones para calcular el promedio del grupo usando reduce() e identificar los nombres de los alumnos con la calificación más alta y más baja mediante Math.max(), Math.min() y búsquedas de propiedades.  
* **Ejercicio 16 - Calculadora Básica con Funciones Flecha: Implementación de operaciones aritméticas elementales (suma, resta, multiplicación y división) mediante sintaxis concisa de funciones flecha (=>) de ES6. Integra validación contra división entre cero y la librería externa SweetAlert2 para el despliegue de alertas modales interactivas ante errores de entrada.  
* **Ejercicio 17 - Gestor de Tareas Persistente con Closures y LocalStorage: Aplicación de lista de tareas pendientes que implementa el patrón closure y funciones autoejecutables para proteger el estado interno y el ámbito (scope) de las variables. Utiliza la API de localStorage junto con JSON.stringify() y JSON.parse() para mantener la persistencia de datos en el navegador, incorporando confirmaciones de borrado con SweetAlert2.  
* **Ejercicio 18 - Manipulación Dinámica del DOM con Bootstrap: Lista interactiva desarrollada mediante manipulación directa del Document Object Model a través de métodos como createElement(), appendChild() y remove(). Incorpora el framework Bootstrap 5 para proporcionar una interfaz responsiva, moderna y estilizada para agregar y eliminar elementos en tiempo real. 
