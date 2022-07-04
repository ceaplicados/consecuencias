# Especificación de Requerimientos de Software

*Fecha de última revisión: 2022-07-04*

## Tabla de Contenidos

- [Especificación de Requerimientos de Software](#especificación-de-requerimientos-de-software)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Introducción](#introducción)
    - [Glosario](#glosario)
    - [Referencias](#referencias)
  - [Descripción General](#descripción-general)
    - [Perspectiva de Producto](#perspectiva-de-producto)
      - [Usuario](#usuario)
      - [Comunicación](#comunicación)
      - [Memoria](#memoria)
    - [Funciones de Producto](#funciones-de-producto)
    - [Características de Usuario](#características-de-usuario)
    - [Restricciones](#restricciones)
    - [Dependencias](#dependencias)
  - [Requerimientos Específicos](#requerimientos-específicos)
    - [Features](#features)
    - [Desempeño](#desempeño)
    - [Limitantes de Diseño](#limitantes-de-diseño)
      - [Disponibilidad](#disponibilidad)
      - [Seguridad](#seguridad)
      - [Mantenibilidad](#mantenibilidad)
      - [Portabilidad](#portabilidad)
    - [Comentarios Adicionales](#comentarios-adicionales)
  - [Apéndices](#apéndices)

## Introducción

El presente documento define los requerimientos de la app «Rueda de Consecuencias» (```rdcons```) para quienes estén involucrados en el desarrollo de la primera versión. El documento sigue el esquema descrito por el estándar 830 de [IEEE (1998)](#referencias).

La app es una herramienta gráfica de desarrollo de escenarios y consecuencias, donde se parte con un lienzo en blanco, se crean nodos con **Hechos** conocidos, y surgen más nodos con **Consecuencias** a partir de estos y de otras Consecuencias.

El objetivo de esta herramienta es proveer un tablero digital para organizar ideas y desarrollar escenarios en el Laboratorio de Futuros del [Centro de Estudios Aplicados](https://www.centrodeestudiosaplicados.org/). Esta herramienta no contempla ningún tipo de análisis entre los nodos y sus contenidos.

### Glosario

- Consecuencias: tipo de nodo con consecuencias desarrolladas
- Hechos: tipo de nodo con hechos conocidos
- Diágogo: ventana dentro de la app, no se refiere a los diálogos del navegador

### Referencias

Fyrd. (2022). *Can I use ECMAScript 2015 (ES6)?*. Recuperado 2022-07-03: [https://caniuse.com/?search=es6](https://caniuse.com/?search=es6)

IEEE. (1998). *IEEE Recommended Practice for Software Requirements Specifications*. Recuperado 2022-07-03: [http://www.cse.msu.edu/~cse870/IEEEXplore-SRS-template.pdf](http://www.cse.msu.edu/~cse870/IEEEXplore-SRS-template.pdf)

## Descripción General

### Perspectiva de Producto

«Rueda de Consecuencias» es un producto independiente de otros sistemas. A continuación se describen las interfaces que deben considerarse y sus restricciones.

#### Usuario

- Uso a través de un navegador
- El lienzo de trabajo es el enfoque principal de la pantalla
- Formato horizontal para uso desde una computadora
- Teclas de función para cortar, copiar, pegar y funciones adicionales

#### Comunicación

- Control de acceso por usuarios
- Diseño de API de lectura y escritura
- Protocolo de trabajo concurrente
- Seguridad e integridad de datos

#### Memoria

- Uso de 512 MB de RAM como máximo
- Uso de 10 GB de almacenamiento SSD como máximo

Nota: estas restricciones se plantean de acuerdo con el plan mínimo de DigitalOcean Droplets para su uso durante desarrollo y pruebas, pero se espera que los requerimientos sean mayores cuando la app se encuentre en producción.

### Funciones de Producto

- Creación de lienzos
- Compartición de lienzos (a usuarios o por enlace)
- Gestión de permisos de usuarios por lienzo
- Eliminación de lienzos
- Creación de nodos con:
    - Título
    - Archivos adjuntos
    - Cuerpo (e. g. imágenes, texto con formato)
    - Tipo (i. e. Hecho, Consecuencia)
    - Nodos de donde se origina
    - Nodos a los que da origen
- Modificación de propiedades de los nodos
- Eliminación de nodos
- Desplazamiento de nodos en el lienzo
- Exportación de lienzo a imagen o documento
- Almacenamiento de texto considerando caracteres no latinos (e. g. emojis)
- Autoguardado
- Almacenamiento de versiones pasadas para respaldo

### Características de Usuario

- Nivel educativo: al menos, estudiantes de preparatoria
- Nivel de dominio: conocimiento y trabajo previo con tecnologías digitales

### Restricciones

- Ley Federal de Protección de Datos Personales en Posesión de los Particulares
- Concurrencia:
    - Edición simultánea de lienzo
    - Edición simultánea de propiedades de nodo
- Seguridad e integridad de datos de usuario
- Desarrollo basado en pruebas para asegurar mantenibilidad a largo plazo

### Dependencias

- Navegador  con soporte de ES6 (e. g. Edge 79+, Firefox 54+, Chrome 51+, Safari 10+ y Opera 38+; [Fyrd, 2022](#referencias))

## Requerimientos Específicos

### Features

1. Crear lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos
    - Estímulo: clic en botón de creación
    - Respuesta: se direcciona navegador a una pantalla de carga y posteriormente un lienzo en blanco

2. Eliminar lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos
        - Es dueño de lienzo
    - Estímulo: clic en botón de eliminación en menú contextual del lienzo
    - Respuesta: se despliega diálogo para confirmar, si se se confirma, se elimina y desaparece el lienzo
    - Excepciones:
        - Si el lienzo ya no existe, se despliega diálogo de notificación

3. Cambiar nombre de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos o en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de cambio de nombre en menú contextual del lienzo o en el nombre en la pantalla de edición
    - Respuesta: se despliega diálogo para cambiar y confirmar
    - Excepciones:
        - Si el lienzo ya no existe, se despliega diálogo de error y, al cerrar, se redirecciona a tablero

4. Tablero de lienzos propios
    - Requisitos:
        - Usuario con sesión iniciada
    - Estímulo: acceso a URL de tablero o clic en botón de Tablero de menú lateral
    - Respuesta:
        - Página con tableros del usuario
        - Barra de navegación con enlaces a página principal, tablero, centro de ayuda y gestión de perfil
        - Menú lateral con botones Tablero y Lienzos compartidos conmigo
        - Barra horizontal con miniaturas de lienzos compartidos conmigo
        - Cuadrícula con miniaturas de lienzos propios donde la primera miniatura es el botón de creación de lienzo
    - Excepciones:
        - Si no existe una sesión, redireccionar a página principal

5. Tablero de lienzos compartidos conmigo
    - Requisitos:
        - Usuario con sesión iniciada
    - Estímulo: acceso a URL de tablero o clic en botón de Tablero de menú lateral
    - Respuesta:
        - Página con tableros compartidos conmigo
        - Barra de navegación con enlaces a página principal, tablero, centro de ayuda y gestión de perfil
        - Menú lateral con botones Tablero y Lienzos compartidos conmigo
        - Cuadrícula con miniaturas de lienzos compartidos conmigo
    - Excepciones:
        - Si no existe una sesión, redireccionar a página principal

6. Guardar de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de guardado o Ctrl+S
    - Respuesta: se guarda archivo y se muestra un mensaje de confirmación con fecha y hora de último guardado en la esquina de la pantalla
    - Excepciones:
        - Si el lienzo ya no existe, se despliega diálogo de error y, al cerrar, se redirecciona a tablero

7. Compartir de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos o en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de compartición en menú contextual del lienzo o en la pantalla de edición
    - Respuesta: se despliega diálogo con botón para hacer público el lienzo y generar enlace, cuadro de texto para agregar correo o nombre de usuario y enviar invitación, y lista de usuarios con acceso y botón de eliminación
    - Excepciones:
        - Si el nombre de usuario o correo no existe, se despliega mensaje de error junto al nombre del campo

8. Eliminar acceso a lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Es dueño o colaborador de lienzo
        - Está en el diálogo de compartición
    - Estímulo: clic en el botón de eliminación de un usuario
    - Respuesta: se despliega diálogo de confirmación
    - Excepciones:
        - El usuario dueño no tiene un botón de eliminación de acceso

9. Página de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: acceso a URL de lienzo
    - Respuesta:
        - Página de edición de lienzo
        - Barra con nombre de lienzo, botones de guardado, exportación, organización automática, y compartición, y herramientas de eliminación, relación, y cursor normal
        - Lienzo cuadriculado
        - Miniatura del lienzo completo en la esquina
    - Excepciones:
        - Si no existe el lienzo, redireccionar a página principal

10. Crear nodo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de creación o clic en lienzo
    - Respuesta: se despliega diálogo para agregar información (i. e. título, archivos adjuntos, cuerpo, tipo) y confirmar creación de nodo, y el nodo se coloca en la primera posición disponible (criterios: 1. superior, 2. izquierda) o en la posición del clic
    - Excepciones:
        - Si el título está vacío, se despliega mensaje de error al costado del botón de confirmación
        - Considerar edición simultánea por varios usuarios
        - Si una imagen o archivo adjunto no han terminado de cargarse, se despliega mensaje de espera al costado del botón de confirmación

11. Mover nodo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
        - Existe un nodo
    - Estímulo: clic y arraste en nodo
    - Respuesta: el nodo sigue la ubicación del cursor y se queda donde se levanta el clic
    - Excepciones:
        - Si el nodo ya está siendo movido por otro usuario, no se permite a un segundo hacerlo al mismo tiempo

12. Editar nodo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de edición en menú contextual de nodo
    - Respuesta: se despliega el mismo diálogo que para crear nodo con la información del nodo
    - Excepciones:
        - Si el título está vacío, se despliega mensaje de error al costado del botón de confirmación
        - Considerar edición simultánea por varios usuarios

13. Adjuntar archivo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en diálogo de creación o edición de nodo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de adjunción de archivos
    - Respuesta: se despliega ventana de selección de archivos para seleccionar archivo no mayor a 2 MB y se despliega miniatura según tipo de archivo con una barra de carga
    - Excepciones:
        - Si el archivo pesa más de 2 MB, se aborta carga y se despliega mensaje de error junto al botón de adjunción

14. Agregar imagen al cuerpo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en diálogo de creación o edición de nodo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en el botón de adición de imagen
    - Respuesta: se despliega ventana de selección de archivos para seleccionar imagen no mayor a 2 MB y se despliega en el cuerpo con una altura máxima predefinida
    - Excepciones:
        - Si el formato de la imagen es distinto de JPG, JPEG, PNG o GIF, se despliega mensaje de error junto al botón de adición

15. Pegar imagen en el cuerpo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en diálogo de creación o edición de nodo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en Pegar en menú contextual de clic derecho o Ctrl+V
    - Respuesta: se carga la imagen y se despliega en el cuerpo con una altura máxima predefinida
    - Excepciones:
        - Si la imagen pesa más de 2 MB, se despliega mensaje de error sobre el campo

16. Crear relación entre nodos
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
        - Existen dos nodos
    - Estímulo: con herramienta de relación seleccionada; clic y arrastre de un nodo a otro, o clic en uno y después clic en otro
    - Respuesta: se crea una línea entre el primer nodo y el ratón hasta alcanzar el segundo nodo, y se establece una relación unidireccional
    - Excepciones:
        - Si se presiona Esc antes de alcanzar el segundo nodo, se elimina la línea y no se crea la relación

17. Eliminar relación entre nodos
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
        - Existen dos nodos con una relación entre ellos
    - Estímulo: clic sobre la línea de relación con herramienta de eliminación seleccionada
    - Respuesta: se elimina línea de relación unidireccional

18. Eliminar nodo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
        - Existe un nodo
    - Estímulo: clic en botón de eliminación en menú contextual o sobre nodo con herramienta de eliminación seleccionada
    - Respuesta: se despliega diálogo de confirmación

19. Organizar nodos automáticamente
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en el botón de organización automática en la pantalla de edición
    - Respuesta: organización de nodos en cuadrícula de acuerdo con tamaño A4 expandiéndose hacia abajo

20. Exportar lienzo como imagen o PDF
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos o en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de exportación en la pantalla de edición
    - Respuesta: despliegue de diálogo para seleccionar formato, transparencia, dimensiones, opción de organización de nodos automática sin modificar documento, y botón de descarga

### Desempeño

- Trabajo simultáneo en hasta 5 lienzos
- Trabajo simultáneo de hasta 45 personas por lienzo (30 personas en un grupo de clase + 50%)
- 90% de operaciones de creación, modificación, y eliminación de nodos son procesadas en menos de 1 segundo
- 90% de operaciones de creación, y eliminación de lienzo son procesadas en menos de 5 segundos
- 90% de operaciones de compartición son procesadas en menos de 1 segundo

### Limitantes de Diseño

#### Disponibilidad

- 90% de arranques y reinicios de servidor se completan en menos de 15 segundos

#### Seguridad

- Uso de protocolo HTTPS
- Autenticación basada en tokens
- Protección contra Cross-Site Requests y Cross-Site Scripts

#### Mantenibilidad

- Las funcionalidades de la app se distribuyen jerárquicamente en distintos archivos que corresponden a los URL de API
- Todos los endpoints se encuentran comentados con descripción, formato de input y formato de output

#### Portabilidad

- Acceso a través de una URL determinada por el Centro de Estudios Aplicados
- Hospedaje en un DigitalOcean Droplet de 512 MB de RAM y 10 GB de SSD
- Ejecución como servicio de Linux
- Totalidad del código en stack MERN (MongoDB, Express, React, Node)

### Comentarios Adicionales

- Por determinar: compartición por enlace permite contribuciones anonimizadas o funge como invitación a usuarios
- El costo de hospedaje es de 4 USD por mes (2022-07-03)

## Apéndices
