#INFO: como testear automaticamente una app web express

Este es un _estudio_ (una prueba lo más simple posible para entender una necesidad y como resolverla)

Si hago una aplicación web en node.js, por ejemplo la API backend para guardar los usuarios y proyectos de la app miequipo, voy a necesitar tests automáticos tanto para pensar qué necesito como para asegurarme que hace eso (y no es vulnerable a ataques, etc.)

## USO

Una sola vez instalo lo que necesito *también para desarrollar*

```
npm install --dev
```

Para ejecutar los tests uso

```
npm run test
```

## ¿Cómo desarrollo?

### Tests

Agrego tests como el del ejemplo en ```main.test.js```

El *nombre* de archivo es importante: jest busca los archivos que se llamen .test.js o .spec.js o en la carpeta ```__tests__```

### Para testear mi aplicacion web

La herramienta es https://github.com/visionmedia/supertest

Es bien simple, como se ve en main.test.js ...

* cargo supertest
* cargo la app con require
* escribo tests que hacen requests a la app indicando que respuesta esperan, como explica su página

Hay un tutorial más completo en
#SEE: http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/



