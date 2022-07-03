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
    - [Requerimientos de Interfaces Externas](#requerimientos-de-interfaces-externas)
      - [Interfaces de Usuario](#interfaces-de-usuario)
      - [Interfaces de Software](#interfaces-de-software)
      - [Interfaces de Comunicación](#interfaces-de-comunicación)
    - [Features](#features)
    - [Desempeño](#desempeño)
    - [Lógica de Base de Datos](#lógica-de-base-de-datos)
    - [Limitantes de Diseño](#limitantes-de-diseño)
      - [Reliability](#reliability)
      - [Disponibilidad](#disponibilidad)
      - [Seguridad](#seguridad)
      - [Mantenibilidad](#mantenibilidad)
      - [Portabilidad](#portabilidad)
    - [Comentarios Adicionales](#comentarios-adicionales)
  - [Apéndices](#apéndices)

## Introducción

El presente documento define los requerimientos de la app «Rueda de Consecuencias» (```rdcons```) para quienes estén involucrados en el desarrollo de la primera versión.

La app es una herramienta gráfica de desarrollo de escenarios y consecuencias, donde se parte con un lienzo en blanco, se crean nodos con **Hechos** conocidos, y surgen más nodos con **Consecuencias** a partir de estos y de otras Consecuencias.

El objetivo de esta herramienta es proveer un tablero digital para organizar ideas y desarrollar escenarios. Esta herramienta no contempla ningún tipo de análisis entre los nodos y sus contenidos.

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

### Requerimientos de Interfaces Externas
- Nombre
- Descripción de propósito
- Fuente o destino
- Rango válido, precisión y tolerancia
- Unidades de medida
- Tiempo
- Relación con otros i/o
- Formatos y organización de pantalla y ventana
- Formatos de datos
- Formatos de comandos
- End messages

#### Interfaces de Usuario

#### Interfaces de Software

#### Interfaces de Comunicación

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

1. Nombre del feature
    - Introducción/propósito
    - Estímulo/respuesta
    - Requerimientos funcionales asociados:
        - ...

2. ...

### Desempeño
- Requerimientos estáticos (Capacity, e. g. no. de usuarios simultáneos, cantidad de información) y dinámicos (e. g. no. de transacciones en un período de tiempo para condiciones normales y pico)

### Lógica de Base de Datos
- Tipos de datos
- Frecuencia de uso
- Capacidad de acceso
- Entidades y relaciones
- Integridad y restricciones
- Retención de datos

### Limitantes de Diseño

#### Reliability

#### Disponibilidad

#### Seguridad
- Protección:
    - Técnicas de criptografía
    - Logging
    - Asignación de funciones a distintos módulos
    - Restringir comunicación entre áŕeas
    - Validar integridad de variables críticas

#### Mantenibilidad
- Modularidad, interfaces, complejidad

#### Portabilidad
- Facilidad de portabilidad de software a otros hosts/SOs
    - Porcentaje de componentes y código que son host-dependent
    - Uso de lenguaje portable

### Comentarios Adicionales

## Apéndices