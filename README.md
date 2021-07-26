# Mobiquity F1 Championship

FE assessment for Mobiquity

Mobiquity F1 [Ergast](https://ergast.com/mrd/) project it is a single page (SPA) that presents a list of F1 World Champions starting from 2005 untill present.
The project make use of [Ergast](https://ergast.com/mrd/) API to get data that is necessary to complete this project.
In this case this would be the list of World Champions from  2005 till present and using the season year obtained from the clicked seaon(item) to get all the winners of that season.

UI/UX principles such as website accesability, legibility and reponsiveness was seriously taken into consideration during development process to offer slick and eye catching final product
The project gives the user the same quality look and feel when transition between small, medium, large and extra large screens. Thanks to bootstrap grid system that was used.

[Angular](https://angular.io/) is the chosen platform /framework to task out the delivery of the project.
[Karma](https://karma-runner.github.io) was used to write our test which comes by default with Angular CLI

The project lists World champions in a card form with dynamically populated data from the [Ergast](https://ergast.com/mrd/) service.
Constructor logos for each season winner is displayed dynamically by giving the correct image/asset the name of the constructorId from the API,
in this case the app will know which correct image to present based on the API response.
When clicking on the card we pass the season year of the selected card to get race winners of the season, and I highlight the season winner.
I'm listing as much important data and list race winners avatars next to them(Everything happens dynamically)

## Download and install node

Follow instruction from here [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

If you already have node skip this step

## Download and install git

Follow instruction from here [https://git-scm.com/downloads](https://git-scm.com/downloads)

If you already have git skip this step


## Installing Node modules

Within the project folder structure go to 'mobiquity-f1-championship-app' directory and and open git bash.
Run `npm install` this is to install node modules.

## Installing angular CLI

open git bash and run `npm i -g @angular/cli`
If you already have angular CLI installed globally skip this step

## Checkout project
**To check out the project open git bash or terminal and run the following command**

`git clone https://github.com/Moshe-1/mobiquity-F1-championship.git
`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --open` this will automatically open your browser

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## A big thanks to:

`Angular CLI`

`NPM`

`Karma`

`Bootstrap`

`Ergast API`
