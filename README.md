# Discovery piscine web [ES]

La piscina discovery web se trata de una semana de inmersión en el mundo de la programación web.

Se estructura en 5 unidades principales (cellules):

- [Cellule0](#cellule0): Iniciación a shell y bash.
- [Cellule1](#cellule1): Iniciación a HTML y CSS.
- [Cellule2](#cellule2): Profundizando en HTML y CSS.
- [Cellule3](#cellule3): Iniciación a JavaScript.
- [Cellule4](#cellule4): RUSH.

## Cellule0:
### ex00:
Creación de una carpeta mediante comando en shell
### ex01: z
Creación de un fichero que muestre "Z" Al realizar cat sobre este.
### ex02: midLS
Creación de un fichero que contenga el comando para listar el contenido de un directorio separado por comas.
### ex03: count_files.sh
Creación de un script que cuente los elementos presentes dentro del directorio sobre el que se ejecute.
### ex04: argv.sh
Script que imprimie por pantalla hasta un máximo de 3 argumentos proporcionados en la ejecución de este.
### ex05: build.sh
Script que genera directorios llamados "ex" + el nombre proporcionado como argumento. Sin límite de argumentos.

## Cellule1:
### ex00: helloworld.html
Como su nombre indica, consiste en crear una web que muestre el texto "Hello World" como párrafo.
### ex01: piscineweb.html
Crear una web que contenga el título "Piscine Web" centrado
### ex02: piscineweb.html
Sobre el ejercicio anterior añadir dos imágenes una al lado de la otra y centradas en relación al título.
### ex03: piscineweb.html
Volvemos a partir del ejercicio anterior, en este caso una de las imágenes actuará como un link.
### ex04: basics.html
Empezamos a tocar CSS a un nivel más extenso. Creamos una web que contenga un título en blanco con algún caracter especial. Fondo rosa, dos imágenes una al lado de la otra con un link debajo. Una división de la web y un texto con nuestro nombre de usuario.

> [!TIP]
> Para este ejercicio (y los siguientes) recomiendo encarecidamente buscar información sobre **display: flex;**, un display para la colocación de los elementos en la página que aunque algo complejo de entender, es muy sencillo de manejar y ofrece muy buenos resultados.

<img width="600" alt="basics.html screenshot" src="https://github.com/anfipatica/images/assets/140256308/d934ee5d-f35d-4f62-bddf-8b7bc447994e">

### ex05: tab.html
Consiste en la creación de una web que contiene una tabla centrada con dos columnas y una única línea, es decir, dos celdas.

### ex06: responsibe.html
Partimos del código anterior pero en este caso las dos celdas deben ocupar el 100% de la pantalla, es decir, tenemos que jugar a dar el tamaño de los elementos en %.

## cellule2
### ex00: responsive.html responsive.css
Cogemos el código del último ejercicio y en vez de introducir todo el código en un único archivo html gracias a las etiquetas **<style> </style>** de head, introducimos el código css en un archivo propio y referenciaremos este en el html con **<link>**

### ex01: menu.html menu.css
Debemos realizar un pequeño menú desplegable empleando la etiqueta **<select> </select>**.

<img width="500" alt="select menu screenshot" src="https://github.com/anfipatica/images/assets/140256308/91701c52-b68a-49a2-a437-22322e4e956a">

### ex02: parallax.html parallax.css
Realizaremos una web que aplique el efecto parallax o de paralaje. Cuanto más cercano se encuentra un objeto a nosotros, más movimiento detectamos, y cuanto más lejos, menos. La idea de este proyecto es crear esta sensación de profundidad espacial en un espacio bisimensional, con la intención de mejorar la experiencia de usuario.
Este ejercicio es más complicado de lo que parece a simple vista si se quiere realizar correctamente. La primera vez que lo realicé no investigué adecuadamente sobre el efecto parallax. La segunda vez, vi [este video](https://www.youtube.com/watch?v=rLrLJQBG_qo&ab_channel=DeveloperFilip) que me ayudó bastante a entender la base de cómo realizar el código y luego adaptarlo a mis necesidades.

### ex03: card.css card-html
El último ejercicio de esta unidad consiste en realizar una tarjeta de estudiante a partir de las estructuras de las tablas. Vemos cómo css cambia totalmente el aspecto de una página.

<img width="600" alt="14a40c880a7c61312be3afb59d29d153" src="https://github.com/anfipatica/discovery_piscine_web/assets/140256308/9f3351ca-2db1-4ef2-b955-9e799f2f169e">

## Cellule3
## ex00: backgroound.html background.css background.js
Finalmente empezamos con JavaScript. En este primer ejercicio debemos crear un código donde al presionar un botón se cambie el color de fondo, por lo que tendremos que trabajar con manejadores de eventos, crear nuestro generador de números pseudorandomizados... Considero que es un salto de nivel grande para empezar con js.

<img width="600" alt="background changing gif" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5wZXNubnE0Z2t3ZjNqZGNvdnJyOWpuN2Y5MWUzY2M3ZDNzcnZpeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RjmLePRmRZVztG07gY/giphy.gif">


## ex01: ballon.html
Crearemos un globo de 200px mínimo y 420px de máximo que se hinchará (y modificará su color) cuando presionemos sobre él, y se desinflará al alejar el ratón de él.

<img width="600" alt="balloon gif" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHUxbWFlYjFlYXB2M2Rwbzhhc2NiOTRnM3g1YzRyZjh0dm02cW40ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gEIkszRdJel7FKP2rQ/giphy.gif">

## ex02: calc.html
Este ejercicio consiste en hacer una pequeña calculadora sencilla. Aunque no hay requerimientos en cuanto a la parte estética, sí se establece en el subject qué elementos deben componerla por lo que el resultado final debería seguir una estructura algo similar a esta:

<img width="600" alt="calculator gif" src="https://media.giphy.com/media/GFNsDSYqZDME0FIk0H/giphy.gif">

Además incluye eventos de tiempo ya que cada 30 segundos debe aparecer una alerta.

## ex03: index.html todo.js
Deberemos crear una lista de tareas en un elemento de tipo lista que reciba input del usuario a través de un prompt, y que pueda eliminar las tareas haciendo click sobre ellas. Manejo del DOM y eventos a tope.
Lo que considero que ha resultado verdaderamente complejo es el manejo de las cookies, ya que el subject pone como tarea adicional que los elementos dentro de la lista se mantenga al recargar la página o al salir de esta. Piden emplear cookies, pero no he sido capaz de trabajar con cookies desde el navegador de google Chrome, mirando en la pestaña "Application" al inspeccionar la página simplemente no se llegaban a almacenar las cookies. Con el mismo código en firefox sí funcionaba. Al final opté por usar localStorage ya que en general es recomendable usarlo frente a las cookies salvo que se necesite enviar algo a un servidor.
El resultado es el siguiente:

<img width="600" alt="calculator gif" src="https://media.giphy.com/media/RGqP7bnQpScfRst1Ix/giphy.gif">

> El local storage se compone, al igual que las cookies, de una "clave" y de su contenido. Gracias a la clave podemos acceder al contenido que hemos almacenado. En este caso para poder acceder facilmente a los elementos, he trabajado como si de un array se tratara: las claves serán números consecutivos empezando por el 1 como si de posiciones se tratara (la posición 0 está ocupada almacenando "n", una información vital para el correcto funcionamiento de este planteamiento).
> 
> Cuando se recarga la página se activa un evento que va recorriendo de 1 a "n" el posible contenido de localStorage, y si no es nulo, lo coloca en la lista tal como hizo el usuario. "n" es el número correspondiente a la clave del último elemento almacenado, y lo almacenamos en la *posición* 0 de localStorage, es decir, la clave "0". Según se van borrando elementos, las claves dejan de ser números consetivos, pero lo importante es conocer cual es el último de estos números para asegurarnos que no se sobreescriba ningún elemento.
> 
> Si se detecta que ya no quedan elementos en la lista, *n* se resetea a 0.


<img width="600" alt="calculator gif" src="https://github.com/anfipatica/discovery_piscine_web/assets/140256308/f7b31c6e-928d-4cdb-8bd8-9958a58c1022">
