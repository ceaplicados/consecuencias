# Especificación de Requerimientos de Software

*Fecha de última revisión: 2022-07-03*

## Tabla de Contenidos

- [Especificación de Requerimientos de Software](#especificación-de-requerimientos-de-software)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Introducción](#introducción)
    - [Glosario](#glosario)
    - [Referencias](#referencias)
    - [Resumen](#resumen)
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

El presente documento define los requerimientos de la app «Rueda de Consecuencias» (```rdcons```) para quienes estén involucrados en el desarrollo de la primera versión.

La app es una herramienta gráfica de desarrollo de escenarios y consecuencias, donde se parte con un lienzo en blanco, se crean nodos con **Hechos** conocidos, y surgen más nodos con **Consecuencias** a partir de estos y de otras Consecuencias.

El objetivo de esta herramienta es proveer un tablero digital para organizar ideas y desarrollar escenarios en el Laboratorio de Futuros del [Centro de Estudios Aplicados](https://www.centrodeestudiosaplicados.org/). Esta herramienta no contempla ningún tipo de análisis entre los nodos y sus contenidos.

### Glosario

- Consecuencias: tipo de nodo con consecuencias desarrolladas
- Hechos: tipo de nodo con hechos conocidos

### Referencias

Fyrd. (2022). *Can I use ECMAScript 2015 (ES6)?*. Recuperado 2022-07-03: [https://caniuse.com/?search=es6](https://caniuse.com/?search=es6)

### Resumen
- Contenido de SRS
- Organización

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
    - Nombre
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
- Descripción de input y output como mínimo
- Requerimientos únicos

### Features
- Validación de input
- Secuencia de operaciones
- Casos anormales:
    - Overflow
    - Facilities
    - Manejo de errores y recuperación
- Efecto de parámetros
- Relación de output a input
    - Secuencias
    - Fórmulas para conversión

1. Creación de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos
    - Estímulo: clic en botón de creación
    - Respuesta: se direcciona navegador a una pantalla de carga y posteriormente un lienzo en blanco
    - Requerimientos funcionales asociados:
        - ...

2. Eliminación de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos
        - Es dueño de lienzo
    - Estímulo: clic en botón de eliminación en menú contextual del lienzo
    - Respuesta: se despliega diálogo para confirmar, si se se confirma, se elimina y desaparece el lienzo
    - Excepciones:
        - ...
    - Requerimientos funcionales asociados:
        - ...

3. Cambio de nombre de lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos o en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de cambio de nombre en menú contextual del lienzo o en el nombre en la pantalla de edición
    - Respuesta: se despliega diálogo para cambiar y confirmar
    - Excepciones:
        - Si el lienzo ya no existe, se despliega diálogo de error y, al cerrar, se redirecciona a tablero
    - Requerimientos funcionales asociados:
        - ...

4. Tablero de lienzos
    - Requisitos:
        - Usuario con sesión iniciada
    - Estímulo: acceso a URL de tablero
    - Respuesta: página con tableros del usuario
    - Excepciones:
        - Si no existe una sesión, redireccionar a página principal
    - Requerimientos funcionales asociados:
        - ...

5. Guardar lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de guardado o Ctrl+S
    - Respuesta: se guarda archivo y se muestra un mensaje de confirmación con fecha y hora de último guardado en la esquina de la pantalla
    - Excepciones:
        - Si el lienzo ya no existe, se despliega diálogo de error y, al cerrar, se redirecciona a tablero
    - Requerimientos funcionales asociados:
        - ...

6. Compartir lienzo
    - Requisitos:
        - Usuario con sesión iniciada
        - Está en su tablero de lienzos o en la pantalla de edición de lienzo
        - Es dueño o colaborador de lienzo
    - Estímulo: clic en botón de compartición en menú contextual del lienzo o en la pantalla de edición
    - Respuesta: se despliega diálogo con botón para hacer público el lienzo y generar enlace, y cuadro de texto para agregar correo o nombre de usuario y enviar invitación
    - Excepciones:
        - Si el nombre de usuario o correo no existe, se despliega diálogo de error
    - Requerimientos funcionales asociados:
        - ...

7. Remover usuarios con acceso a lienzo
    - Requisitos:
        - ...
    - Estímulo:
    - Respuesta:
    - Excepciones:
        - ...
    - Requerimientos funcionales asociados:
        - ...

7. Feature
    - Requisitos:
        - ...
    - Estímulo:
    - Respuesta:
    - Excepciones:
        - ...
    - Requerimientos funcionales asociados:
        - ...


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
- Servicio como
- Totalidad del código en stack MERN (MongoDB, Express, React, Node)

### Comentarios Adicionales

- Por determinar: compartición por enlace permite contribuciones anonimizadas o funge como invitación a usuarios
- El costo de hospedaje es de 4 USD por mes (2022-07-03)

## Apéndices