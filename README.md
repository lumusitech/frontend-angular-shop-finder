# ShopFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Dependencies

### Dev dependencies

[Git commit msg linter](https://www.npmjs.com/package/git-commit-msg-linter): A lightweight, independent, 0 configurations and joyful git commit message linter.👀 Watching your every git commit message INSTANTLY 🚀.
![help git linter](https://raw.githubusercontent.com/legend80s/commit-msg-linter/master/assets/demo-7-compressed.png)

[Prettier](https://www.npmjs.com/package/prettier): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Prod dependencies

## Note for deploy in Netlify

Solucionar Error Page not Found (404) en despliegue a Netlify
(en redirect o al recargar)

- In folder src of project, create the file \_redirects with the next content:

  ```txt
  /*  /index.html 200
  ```

- Into angular.json, add into projects.architect.build.assets:

  ```txt
  "src/_redirects"
  ```

- Commit into GitHub for Netlify re deploy
  git add .
  git commit -m "message commit"
  git push origin main

- try (reload caché)
