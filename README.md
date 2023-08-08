# @searchunify/Easy-Linter: Simplified JavaScript Style Guide with Enhanced Rules

[![Version npm](https://img.shields.io/npm/v/easy-linter.svg?style=flat-square)](https://www.npmjs.com/package/@searchunify/easy-linter)

[![NPM](https://nodei.co/npm/easy-linter.png?downloads=true&downloadRank=true)](https://nodei.co/npm/easy-linter/)

Easy-Linter is a comprehensive extension of the renowned Airbnb JavaScript style guide, enriched with refined rule modifications. The Airbnb style guide, built upon the robust foundation of ESLint, has inspired the development of Easy-Linter. This package streamlines the configuration process, offering a meticulously crafted set of ESLint rules right out of the box.

## Overview

### Enhanced Rules: 
Building upon the foundation of the Airbnb style guide, Easy-Linter integrates handpicked rule adjustments tailored for modern development environments.

### Ready-to-Use Package: 
Designed to minimize the effort required to establish a consistent coding style, Easy-Linter comes preconfigured with meticulously curated ESLint rules.

###  Team-Centric Approach:
Perfect for teams engaged in multiple projects, Easy-Linter facilitates a centralized repository of ESLint rules, ensuring consistency across all endeavors.

easy-linter uses a number of open source projects to work properly:

* [eslint-config-airbnb-base](github.com/airbnb/javascript)
* [eslint](github.com/eslint/eslint)
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
* [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
* [eslint-restricted-globals](https://github.com/doshisid/eslint-restricted-globals)

And of course easy-linter itself is open source with a public [repository](https://github.com/searchunify/easy-linter) on GitHub.

### Installation

easy-linter requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm i @searchunify/easy-linter --save-dev
```
## Usage

Create a file named ```.eslintrc.json``` file project in root directory of the project
add the following json object.
```
{
  "extends": "./node_modules/@searchunify/easy-linter/index.js"
}
```

You can create ```.eslintignore``` file in root directory of the project to ignore directory/files from linting rules.
