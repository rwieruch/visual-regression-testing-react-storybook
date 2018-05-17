# visual-regression-testing-react-storybook

[![Build Status](https://travis-ci.org/rwieruch/visual-regression-testing-react-storybook.svg?branch=master)](https://travis-ci.org/rwieruch/visual-regression-testing-react-storybook) [![Coverage Status](https://coveralls.io/repos/github/rwieruch/visual-regression-testing-react-storybook/badge.svg?branch=master)](https://coveralls.io/github/rwieruch/visual-regression-testing-react-storybook?branch=master)

A React application which implements visual regression tests by using Jest and React Storybook. Read more about it: [Visual Regression Testing and React Storybook: Test Frameworks & Component Tests](https://www.robinwieruch.de/visual-regression-testing-react-storybook/)

## Features

* React 16
* Webpack 4
* Babel
* Staging ES Next Features
* Hot Module Replacement
* Testing
  * Mocha
  * Chai
  * Enzyme
  * Sinon
  * Jest
  * Unit/Integratio Test (Chai, Enzyme) Watcher
  * Snapshot Test (Jest) Watcher
  * Travis CI
  * Coveralls.io
* Storybook
  * Knobs
  * Actions
  * Storyshots
  * Viewport

## Installation

* `git clone git@github.com:rwieruch/visual-regression-testing-react-storybook.git`
* cd visual-regression-testing-react-storybook
* npm install
* npm start
* visit `http://localhost:8080/`

## Running Storybook

* npm run storybook

## Running Visual Regression Tests

* npm run storybook
* npm run test:snapshot
