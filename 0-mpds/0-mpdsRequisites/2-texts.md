# 2-texts

## 0-regards

### 0-regards/v0
~~~
Hola, Mundo!!!
~~~
- [.0: Con sentencia de salida (L)](../2-texts/0-regards/v0.0/app.js)
### 0-regards/v1
~~~
Hola, Mundo!!!
Disculpa, no me despedí!!!
Hasta luego!!!
~~~
- 4 opciones diferentes, para poder comparar legibilidad:
  - [.0: Con sentencia de salida (L)](../2-texts/0-regards/v1.0/app.js)
  - [.1: Con sentencia de salida (L)](../2-texts/0-regards/v1.1/app.js)
  - [.2: Con sentencia de salida (L)](../2-texts/0-regards/v1.2/app.js)
  - [.3: Con sentencia de salida (L)](../2-texts/0-regards/v1.3/app.js)

### 0-regards/v2
~~~
Hola, Mundo!!! Disculpa, no me despedí!!! Hasta luego!!!
~~~
- 2 opciones diferentes:
  - [.0: Con sentencia de salida (L)](../2-texts/0-regards/v2.0/app.js)
  - [.1: Con sentencia de salida (L)](../2-texts/0-regards/v2.1/app.js)
### 0-regards/v3
~~~
Como te llamas? Tecla
Hola, Tecla!!! :-)
~~~
- [.0: Con expresión de entrada (L)](../2-texts/0-regards/v3.0/app.js)
- [.1: Con sentencia declaración de variables (L)](../2-texts/0-regards/v3.1/app.js)
### 0-regards/v4
~~~
Como te llamas? Tecla
Hola, Tecla!!! :-)
Adios, Tecla!!! :-)
~~~
- [.0: Con sentencia declaración de variables (L)](../2-texts/0-regards/v4.0/app.js)
## 1-echo

### 1-echo/v0
~~~
Hay eco!!! Di algo:  me llamo Luis
me llamo Luis!!!
~~~
- [.0: Con expresión de entrada (L)](../2-texts/1-echo/v0.0/app.js)
- [.1: Con sentencia declaración de variables (L)](../2-texts/1-echo/v0.1/app.js)
- [.2: Con sentencia declaración de constantes (L)](../2-texts/1-echo/v0.2/app.js)
### 1-echo/v1
~~~
Hay eco!!! Escribe algo: me llamo Lucy
me llamo Lucy, me llamo Lucy, me llamo Lucy!!!
me llamo Lucy, me llamo Lucy!!
me llamo Lucy!
~~~
- 2 soluciones, para comparar legibilidad:
  - [.0: Con sentencia declaración de constantes (L)](../2-texts/1-echo/v1.0/app.js)
  - [.1: Con sentencia declaración de constantes (L)](../2-texts/1-echo/v1.1/app.js)
- [.2: con sentencia secuencial (L+me)](../2-texts/1-echo/v1.2/app.js)
## 2-morseTranlator

### 2-morseTranlator/v0
~~~
Dime algo:  que
La frase:"que"
se traduce a:"--.- ..- . "
~~~

- [.0: con arrays (L)](../2-texts/2-morseTranlator/v0.0/app.js). Hay error con las mayúsculas
  - [.e0: con arrays. Corrigiendo solución anterior (me)](../2-texts/2-morseTranlator/v0.e0/app.js). Por la discusión de for vs while
- [.1: con funciones (L + ME)](../2-texts/2-morseTranlator/v0.1/app.js). Corrección mia tema for y el tema de las mayúsculas.
- [.e1: con funciones (ME)](../2-texts/2-morseTranlator/v0.1/app.js). Corrección de errores:
  - el índice del primer for iba de 0 : LETTERS.length - 1, entones no permitía sentencias mayores que el tamaño del abecedario.
  - la lógica para convertir mayusculas a minúsculas no funcionaba
  - el último for recorría todo el array de LETTERS/MORSE sin necesidad (cuando se encuentra el caráctoer no hace falta mirar más).

### 3-initials/v.0
~~~
Introduce 3 palabras separadas por varios espacios:  Universo   Santa   Tecla  
.Universo Santa Tecla.
~~~
- 3 versiones iniciales pera comparar (sin emplear la sentencia secuencial)
  - [.0: con sentencias iterativas (L)](../2-texts/3-initials/v0.0/app.js)
  - [.e0: mi variación, siguiendo la idea propuesta por Luís (ME)](../2-texts/3-initials/v0.e0/app.js)
  - [.e1: mi versión (ME)](../2-texts/3-initials/v0.e1/app.js)
- [.1: con sentencia secuencial (L)](../2-texts/3-initials/v1.0/app.js)

### 5-vowels/v.0
~~~
¿Dame un mensaje terminado en "."?:  Vale.
Tu mensaje "Vale." tiene 4 caracteres significativos, sin contar el punto final!
~~~

- Solución .0 en programación estructurada se ha eliminado de la documentación porque no le gustaba(L)
  - [.e0: con sentencias iterativas (ME corretgint L)](../2-texts/5-vowels/v0.e0/app.js)

## 3-curriculum

### 3-curriculum/v0

- Modela con un lenguaje de datos:

![](./images/curriculum.png)



