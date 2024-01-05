# Analizador de texto

## Índice

* [1. Introducción](#1-introducción)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Diseño](#5-diseño)
* [6. Pruebas](#6-pruebas)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)

***

## 1. Introducción

* Este proyecto lo resolví de manera **individual**.
* Me tomó 3 Sprints para completarlo.
* Utilicé HTML, CSS y JavaScript para realizar el proyecto.
* No usé ninguna librería ni framework, sino Vanilla Javascript.
* Fue un gran reto terminarlo. Aprendí mucho no solo de código, sino también sobre mí y mis habilidades para la vida.

## 2. Preámbulo

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

En este proyecto cree una aplicación web que serve para que una usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y
métricas específicas sobre caracteres, letras, números, etc,  Que hayan sido
enviadas como _input_ por ella.

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: la aplicación cuenta el número de
    palabras en el texto de entrada y muestra este recuento a la usuaria.
    - **Recuento de caracteres**: la aplicación cuenta el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación cuenta el número de caracteres en el texto de
    entrada, excluye espacios y signos de puntuación y muestra este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación detecta cúantos números hay en
    el texto de entrada y muestra este recuento a la usuaria.
    - **Suma total de números**: la aplicación suma los números que
    hay en el texto de entrada y muestra el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación calcula la
    longitud media de las palabras en el texto de entrada y la muestra a la usuaria.

3. La aplicación permite limpiar el contenido de la caja de texto haciendo
clic en un botón.


## 5. Diseño

Para el diseño de la aplicación se consideraron los siguientes aspectos:
  - **Un público meta adulto y profesional
  - **Complejidad baja en el uso de la aplicación
  - **Visualmente amena y que invite a usarla, sin ser aburrida o muy formal.
  - **La paleta de color se basó en una gama cromática de colores fríos: azul, blanco, negro y verde;
  para darle un toque de formalidad, elegancia y seriedad, pues es una herramienta de trabajo. 
  Esta paleta también busca transmitir seriedad y calma a la usuaria.

Además, basado en los principios de diseño, tomé en cuenta lo siguiente: 
 - **Generar constraste para que sea legible la información.
 - **Usé el color #333333 en lugar de #000000 porque se lee mejor.
 - **Busqué que hubiera una jerarquía de la información: las métricas tienen un mayor tamaño con respecto al footer.
 - **La alineación centrada de los elementos, sobre todo que esté bien alineado para no generar ruido visual.
 - **Cuidé el tamaño del texto y el espacio entre líneas.

A continuación, muestro un prototipo de baja fidelidad de cómo se pensé la estructura de la aplicación:

![Prototipo de baja fidelidad](/Users/mariavillalobos/code/DEV013-text-analyzer/prototipo.jpg)

_Credito: Foto de María Villalobos Chaves


## 6. Pruebas

Para este proyecto, se realizaron 3 conjuntos de pruebas para conocer si la aplicación
cumplía los criterios mínimos de aceptación. Estas pruebas fueron pruebas unitarias, e2e y pruebas de criterios mínimos de aceptación.

## 7. Objetivos de aprendizaje


Los siguientes aspectos fueron los que aprendí a utilizar en mi proyecto.

### HTML

- **Uso de HTML semántico**

### CSS

- **Uso de selectores de CSS**

- **Modelo de caja (box model): borde, margen, padding**

### Web APIs

- **Uso de selectores del DOM**

- **Manejo de eventos del DOM (listeners, propagación, delegación)**

- **Manipulación dinámica del DOM**

### JavaScript

- **Tipos de datos primitivos**

- **Strings (cadenas de caracteres)**

- **Variables (declaración, asignación, ámbito)**

- **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- **Uso de bucles/ciclos (while, for, for..of)**

- **Funciones (params, args, return)**

- **Pruebas unitarias (unit tests)**

- **Módulos de ECMAScript (ES Modules)**

- **Uso de linter (ESLINT)**

- **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- **Git: Instalación y configuración**

- **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- **GitHub: Despliegue con GitHub Pages**

### Centrado en el usuario

- **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- **Diseñar en distintos niveles de fidelidad**

- **Seguir los principios básicos de diseño visual**