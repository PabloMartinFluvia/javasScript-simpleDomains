 # 0 - utils

 ## 1 - Interval
 - Escribir un código en que permita realizar [procesos relacionados con un intérvalo.](./5-units.md#1-interval).

 ### v0 Interval : objects
 - [.0: POP con objetos sin comportamiento (L)](../z-others/0-utils/1-interval/0-objects/v0.0/app.js)
 - 4 maneras de crear objetos con comportamiento (Obs: programación BASADA en objetos)
   - [.1: dar de alta atributos y métodos públicos (en una función generadora) (L)](../z-others/0-utils/1-interval/0-objects/v0.1/app.js)
   - [.2: retornar objeto declarando e inicializando atributos y métodos + empleando <i>this</i> (en una función generadora) (L)](../z-others/0-utils/1-interval/0-objects/v0.2/app.js)
   - [.3: retornar objeto declarando e inicializando únicamente los métodos publicos, y dejando lo privado como variables locales en la función generadora (clousures) (L + ME)](../z-others/0-utils/1-interval/0-objects/v0.3/app.js)
   - [.e4: retornar objeto declarando e inicializando únicamente los métodos publicos, y dejando lo privado dentro de otro objeto <i>that</i> que es local en la función generadora (patrón factoría) (ME)](../z-others/0-utils/1-interval/0-objects/v0.e4/app.js)

### v1 Interval : constructor functions
- [.0: con operador new y función constructora (L)](../z-others/0-utils/1-interval/1-constructor_functions/v1.0/app.js)
- [.1: usando prototipos (L)](../z-others/0-utils/1-interval/1-constructor_functions/v1.1/app.js)

# 1-texts
### 1-palindrome/v.0

- Escribe un código que determine si una cadenas de caracteres es un palíndromo, sin considerar espacios intermedios ni acentos de la cadena. P.e.: "Dábale arroz a la zorra el abad" sí es un palímdromo.

- [.e0: con arrays (ME)](../z-others/1-texts/1-palindrome/v0.e0/app.js)
- [.e1: con arrays (ME)](../z-others/1-texts/1-palindrome/v0.e1/app.js): ejercicio mejorado

# 2-search/find

### 1-bynarySearch/v0

Escribe un código para "adivinar" el número del usuario entre 0 y 1.000.000 inclusive mediante la búsqueda binaria: ¿es igual o mayor que 500.000? Mayor; ¿es igual o mayor que 750.000? ...

- [.e0: con arrays (ME)](../z-others/2-search_find/1-binarySearch/v0.e0/app.js)

### 2-findExample/v0

- Escribe un código que, a partir de un array con valores numéricos, muestre por pantalla el primer valor que cumpla la condición (undefined si no se encuentra):
  1. el primer número que sea par
  2. el primer número que sea impar

- [.0: con funciones nominales (L).](../z-others/2-search_find/2-findExample/v0.0/app.js)
- [.1: con funciones de orden superior y nominales (L).](../z-others/2-search_find/2-findExample/v0.1/app.js)
- [.2: con funciones de orden superior y anónimas (L).](../z-others/2-search_find/2-findExample/v0.2/app.js)
- [.3: con funciones de orden superior y flechas (L).](../z-others/2-search_find/2-findExample/v0.3/app.js)

# 3-filter
### 1-filterExample/v0

- Escribe un código que, a partir de un array con valores numéricos, muestre por pantalla un array con solo los valores que cumplan la condición:
  1. solo los números pares
  2. solo los números impares

- [.0: con funciones nominales (L).](../z-others/3-filter/1-filterExample/v0.0/app.js)
- [.1: con funciones de orden superior y nominales (L).](../z-others/3-filter/1-filterExample/v0.1/app.js)
- [.2: con funciones de orden superior y anónimas (L).](../z-others/3-filter/1-filterExample/v0.2/app.js)
- [.3: con funciones de orden superior y flechas (L).](../z-others/3-filter/1-filterExample/v0.3/app.js)

# 4-reduce
### 1-reduceExample/v0
- Escribe un código que, a partir de un array con valores numéricos, muestre por pantalla las sumas de:
  1. los dobles de todos sus valores
  2. los triples de todos sus valores

- [.0: con funciones nominales (L).](../z-others/4-reduce/1-reduceExample/v0.0/app.js)
- [.1: con funciones de orden superior y nominales (L).](../z-others/4-reduce/1-reduceExample/v0.1/app.js)
- [.2: con funciones de orden superior y anónimas (L).](../z-others/4-reduce/1-reduceExample/v0.2/app.js)
- [.3: con funciones de orden superior y flechas (L).](../z-others/4-reduce/1-reduceExample/v0.3/app.js)

# 5-order
### 1-existOrder/v0

Escribe un código que determine si una serie de números positivos (terminada en 0) está ordenada ascendentemente.

- [.e0: con arrays (ME)](../z-others/5-order/1-existOrder/v1.e0/app.js)
- [.e1: con arrays (ME)](../z-others/5-order/1-existOrder/v1.e1/app.js). Mejora después de corrección

# 6-printFormats
### 1-reticule/v0

- Escribe un código que a partir de un número de filas y columnas muestre por pantalla una retícula correspondiente de cuadrados de 5x5 asteriscos rellenos de puntos.

- [.e0: con arrays (ME).](../z-others/6-printFormats/1-reticule/v0.e0/app.js) Una manera de interpretar el enunciado.
- [.e1: con arrays (ME).](../z-others/6-printFormats/1-reticule/v0.e1/app.js) Otra manera de interpretar el enunciado.

### 2-logs/v0
- [.0: con funciones (L).](../z-others/6-printFormats/2-logs/v0.0/app.js) 
- [.1: con currificación (L).](../z-others/6-printFormats/2-logs/v0.1/app.js) 

### 3-urls/v0
- [.0: con sentencia de salida (L).](../z-others/6-printFormats/3-urls/v0.0/app.js) 
- [.1: con funciones (L).](../z-others/6-printFormats/3-urls/v0.1/app.js) 
- [.2: con currificación (L).](../z-others/6-printFormats/3-urls/v0.2/app.js) 

# 7-converters

### 1-unitConverter/v0
- [.0: con funciones (L).](../z-others/7-converters/1-unitConverter/v0.0/app.js) 
- [.1: con currificación (L).](../z-others/7-converters/1-unitConverter/v0.1/app.js) 