# Reto #1: 🐑 Contando ovejas para dormir.

##  🎉 Introduction.
Con la emoción de que llega la navidad, nos está costando dormir bastante últimamente. 
Vamos a intentar usar este pequeño truco que nos ayudará a dormir más rápido 🐑.

🔗[Reto original en Adventjs](https://adventjs.dev/challenges/01)

### ✏️ Detalles del reto.

Considera una lista/array de ovejas. 
Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color `rojo` 
**y que además** su nombre contenga tanto las letras `n` y `a`, sin importar el orden,
las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```Javascript
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
];
```

Al ejecutar el método debería devolver lo siguiente:

```Javascript
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

👉 Recuerda, debe contener las dos letras `'a'` y `'n'` en el nombre. 
No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

## 🚀 Empezando.

Para la solución de este reto podrás encontrar toda la solución en el directorio donde 
encuentras este readme `reto01-contando-ovejas-para-dormir`.

### 🛠️ Instalación. 

Para instalar las dependencias que encontramos en `./reto01-contando-ovejas-para-dormir/package.json`
tenemos que ejecutar:

```shell
cd reto01-contando-ovejas-para-dormir
yarn install 
```

### ✈️ Ejecutando el reto.

Una vez instaladas las dependecias podemos ejecutar la batería de tests. 

```shell
yarn test
```

si queremos añadir nuevos test o funcionalidades podemos ejecutar los test modo observables.


```shell
yarn test:watch
```

---
Hecho con ❤️ y ☕ por [Iván Santos](https://github.com/IvanSantosGonz) and [Alexandra Rivero](https://github.com/Alelit4).

Readme creado a partir de la template [The Good Documentation](https://github.com/IvanSantosGonz/the-good-documentation).
