# Ofertas Alucinantes!

Ofertas Alucinantes es un proyecto realizado en Angular 8, el cual nos permite poder enviar ofertas interesantes que irán clasificandose según los votos que proporcionen los usuarios. En un futuro la app tendrá una división mediante tabs, que irá filtrando las ofertas del siguiente modo:

<ul>
  <li>Ofertas nuevas -> Ofertas recién enviadas</li>
  <li>Ofertas populares -> Más de 50 votos</li>
  <li>Ofertas destacadas -> Más de 100 votos</li>
</ul>

En el estado actual la app tiene los siguientes módulos:

## Módulo User

En el módulo user tenemos un CRUD en el cual podemos crear un nuevo usuario, listarlos y ver el detalle del mismo.
Los componentes utilizados son:

<ul>
  <li>**LOGIN**: formulario de login</li>
  <li>**REGISTER**: formulario de registro</li>
  <li>**USER LIST**: vista del listado de usuarios. Desde el card de cada una de las ofertas podemos emitir un voto positivo o negativo. También podemos editarla o eliminarla.</li>
  <li>**USER**: vista del detalle de usuario</li>
</ul>

## Módulo Ofertas

El módulo de ofertas tenemos otro CRUD que nos permite visualizar las ofertas enviadas por los usuarios.

<ul>
  <li>**OFFER**: vista principal de la app con el listado de ofertas. Tiene un paginado de 9 elementos por página.</li>
  <li>**OFFER ADD**: formulario de envío de oferta. En la vista se puede obtener una vista previa de la oferta que estamos generando.</li>
  <li>**OFFER EDIT**: formulario de edición de la oferta.</li>
</ul>

## Mejoras introducidas

- **Angular Material** (https://material.angular.io/)
- **Bootstrap 4** (https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- **Material Icons** (https://material.angular.io/)
- **Jquery** (https://www.npmjs.com/package/jquery)
- **Paginado de ofertas** (https://material.angular.io/components/paginator/overview)
- **NGX Spinner** (https://napster2210.github.io/ngx-spinner/)
- **Material colors** (https://www.npmjs.com/package/material-colors)
- **Moment.js** (https://www.npmjs.com/package/moment)
- **ng2-truncate** (https://www.npmjs.com/package/ng2-truncate)
- **ngx-pipes** (https://www.npmjs.com/package/ngx-pipes)

## Wireframes

<img src="https://angular.io/assets/images/logos/angular/angular.svg" data-canonical-src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" height="200" />

## Wireframes

### Módulo ofertas

Componente lista de ofertas:

<img src="https://i.imgur.com/BLuPXAI.png" data-canonical-src="https://i.imgur.com/BLuPXAI.png" />

Componente vista de la oferta:

<img src="https://i.imgur.com/WKB4jDi.png" data-canonical-src="https://i.imgur.com/WKB4jDi.png" />

Componente edición de la oferta:

<img src="https://i.imgur.com/60chHnO.png" data-canonical-src="https://i.imgur.com/60chHnO.png" />

Versión mobile:

<img src="https://i.imgur.com/UuTBd9m.png" data-canonical-src="https://i.imgur.com/UuTBd9m.png" />



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
