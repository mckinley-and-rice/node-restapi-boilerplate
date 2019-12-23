# Node-Rest-API

[![Build Status](https://api.travis-ci.com/mckinley-and-rice/seers-node-api.svg?token=zpzxpp5sTyrL2Zc9qQ6m&branch=master)](https://travis-ci.org/mckinley-and-rice/Seers-api.)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/mckinley-and-rice/node-restapi-boilerplate.svg?token=8476943f082208e8e6f3ef88569a66aba756837a1d058b3fda9d81e1273e2908&ts=1577115834863)](https://greenkeeper.io/)

## Installation
**With [node](http://nodejs.org) [installed](http://nodejs.org/en/download):**

```sh
# Get the latest stable
$ npm install
$ node server.js
```

or

```sh
$ npm install
$ npm start:dev
```

or

```sh
$ npm install
$ npm start
```

## File Structure

```sh
|   .editorconfig
|   .eslintrc
|   .gitignore
|   .jsbeautifyrc
|   .npmignore
|   .travis.yml
|   CONTRIBUTING.md
|   LICENSE.md
|   MODULES.md
|   package.json
|   README.md
|   ROADMAP.md
|   server.js
|   tree.txt
|
+---.vscode
|       settings.json
|
+---app
|   |   routes.js
|   |   sockets.js
|   |
|   +---controllers
|   |       Admin.js
|   |       App.js
|   |       :
|   |       Auth.js
|   |       Errors.js
|   |       index.js
|   |
|   +---requests
|   |       index.js
|   |       PostAdmin.js
|   |       PostAuthenticate.js
|   |
|   \---services
|           DateService.js
|           EmailService.js
|           ErrorService.js
|
+---config
|       app.json
|       database.json
|
+---database
|   \---models
|       |   Admin.js
|       |   Education.js
|       |   index.js
|       |   User.js
|       |
|       \---schema
|               adminSchema.js
|               appointmentSchema.js
|               database.js
|
\---test
    |   .eslintrc
    |   init.js
    |   mocha.opts
    |   README.md
    |
    +---benchmarks
    |   |   README.md
    |
    +---fixtures
    |       constants.js
    |       middleware.js
    +---integration
    |   |   generate.test.js
    |   \---helpers
    |           appHelper.js
    \---unit
            app.getRouteFor.test.js
            app.getUrlFor.test.js
```
