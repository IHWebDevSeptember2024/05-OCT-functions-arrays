# Functions advanced

En esta clase hemos visto tres formas de declarar funciones en JavaScript. La primera es la forma tradicional de declarar funciones, la segunda es la forma de declarar funciones anónimas y la tercera es la forma de declarar funciones flecha.

## Funciones tradicionales

```javascript
function suma(a, b) {
    return a + b;
}
```

## Funciones anónimas

```javascript
const suma = function(a, b) {
    return a + b;
}
```

## Funciones flecha

```javascript
const suma = (a, b) => a + b;
```

## Diferencias entre funciones tradicionales y funciones flecha

Las funciones flecha no tienen su propio `this`, `arguments`, `super`.
Esto nos indica que quizás no deberíamos usar funciones flecha en métodos de objetos, ya que no podríamos acceder a las propiedades del objeto.

Aún así, las funciones flecha son muy útiles para funciones que no necesiten acceder a las propiedades y son utilizadas muy frecuentemente.

# Métodos de arrays

Los métodos de arrays están presentes en todos los arrays de JavaScript.
El comportamiento habitual de estos métodos puede ser realizar un loop sobre el array, modificar los elementos del array, filtrar elementos, etc.

Recuerda que hay métodos que modifican el array original y otros que crean un nuevo array.

