# AngularLazyLoading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

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

Project development:
First we create modules with routing using following command
    ng generate module home --route homepage --module app.module
    ng generate module profile --route profile --module app.module
    ng generate module settings --route settings --module app.module

The command above will generate a new module called home and homepage as the route path to load the home component. In addition, it will add the homepage route inside the Routes array inside this module as the --module options. Same will be the case for second command for user.

To add another component in a specific module execute a command similar to this:
    ng g c homedetails --module=home
The command above will generate a new component in home module and then you can use it in your app. You can also set a route for this component in home-routing.module.ts
