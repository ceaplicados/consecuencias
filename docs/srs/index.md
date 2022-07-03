# Especificación de Requerimientos de Software

*Fecha de última revisión: 2022-07-03*

## Tabla de Contenidos

- [Introducción](#introducción)
    - [Glosario](#glosario)
    - [Resumen](#resumen)

## Introducción

El presente documento define los requerimientos de la app «Rueda de Consecuencias» (```rdcons```) para quienes estén involucrados en el desarrollo de la primera versión.

La app es una herramienta gráfica de desarrollo de escenarios y consecuencias, donde se parte con un lienzo en blanco, se crean nodos con **Hechos** conocidos, y surgen más nodos con **Consecuencias** a partir de estos y de otras Consecuencias.

El objetivo de esta herramienta es proveer un tablero digital para organizar ideas y desarrollar escenarios. Esta herramienta no contempla ningún tipo de análisis entre los nodos y sus contenidos.

### Glosario

- Consecuencias: tipo de nodo con consecuencias desarrolladas
- Hechos: tipo de nodo con hechos conocidos

### Resumen
- Contenido de SRS
- Organización

## Descripción General

### Perspectiva de Producto
- ¿El producto es independiente o es parte de un sistema mayor? ¿qué interacciones hay?
- Interfaces con restricciones:

#### Usuario
- Características lógicas de interfaces entre producto y usuario (e. g. formatos de pantalla/ventana, menús, function keys)
- Optimización de interfaz para usuarios (do's and don't's)

#### Comunicación
- Interfaces de red, protocolos, etc.

#### Memoria
- Límites en memoria primaria y secundaria

#### Operaciones
- Operaciones requeridas por usuario: modo de operación, períodos de inactividad, operaciones asíncronas, procesamiento de datos, respaldos y recuperación

### Funciones de Producto
- Funciones principales del producto
- Diagramas para mostrar relaciones lógicas entre funciones y variables

### Características de Usuario
- Nivel educativo
- Experiencia
- Dominio técnico

### Restricciones
- Regulaciones legales
- Hardware
- Interfaces con otras aplicaciones
- Operaciones paralelas
- Funciones de auditoría
- Reliability
- Seguridad

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