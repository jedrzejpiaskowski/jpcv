# jpcv

Personal CV / resume site for Jędrzej Piaskowski — a software developer Poland,
working mainly with .NET, frontend technologies and AI-assisted tooling.

A bilingual (English / Polish) single-page app with Welcome, About me, Skills,
Experience and Contact sections, built with [Angular](https://angular.dev) 22 and
Angular Material.

## Prerequisites

Node.js **22.23.2** (pinned in `.node-version`). Angular 22 requires
`^22.22.3 || ^24.15.0 || >=26.0.0`.

With [fnm](https://github.com/Schniz/fnm):

```sh
fnm use          # picks up .node-version
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Production is the default configuration; use `ng build --configuration development` for an unoptimized build.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev).

## Linting

Run `ng lint` to lint TypeScript and templates via [ESLint](https://eslint.org) and [angular-eslint](https://github.com/angular-eslint/angular-eslint).

## Deploying

The site is published from the `gh-pages` branch via
[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages), and is
live at <https://jedrzejpiaskowski.github.io/jpcv/> (lowercase — the uppercase path
404s).

```sh
ng deploy --base-href=/jpcv/
```

`--base-href` is required on every deploy. This is a GitHub Pages *project* site, so
it is served from a subpath rather than the domain root. Without the flag the build
ships `<base href="/">` and every asset request resolves against the domain root,
404s, and the page renders blank. angular-cli-ghpages v3 does not infer the value —
older 0.6.x releases derived it from the repo name, which is why this project ran for
years on a bare `ng deploy`.

If GitHub Pages serves this repo's `README.md` instead of the app, the publishing
source has been switched away from `gh-pages`. Check Settings → Pages → Build and
deployment: Source `Deploy from a branch`, Branch `gh-pages` / `(root)`. Pointing it
at `main` cannot work — `main` holds the Angular source, and nothing there builds it.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/main/README.md).
