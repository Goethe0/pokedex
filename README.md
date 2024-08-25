# Pokedex

Pokedex is a SPA done that fetches data from the PokeAPI, 
and then list of availables Pokemons, it has a search feature and a view page.

It contains a server-side REST API built using [NestJS](https://nestjs.com) and a client-side single-page in Angular
application built in [Angular](https://angular.dev).
It also contains some basic tests in [JEST](https://jestjs.io/).

## Prerequisites

- [Node.js v22](https://nodejs.org/en)

## Setup

- Install dependencies:
  ```shell
  cd /path/to/cloned/pokedex/
  cd ../api/
  npm install
  cd ../app/
  npm install
  ```

## Run

In two separate shells, start the API and app:

1. Run the NestJS backend
   ```shell
   cd api/
   npm start
   ```
2. Run the Angular frontend
   ```shell
   cd app/
   npm start
   ```
3. Run testing (frontend)
   ```shell
   cd app/
   npm test
   ```
