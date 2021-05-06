# linting

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

<!-- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) -->

[![npm version](https://img.shields.io/npm/v/@m4thieulavoie/linting)](https://www.npmjs.com/package/@m4thieulavoie/linting)
[![Downloads](https://img.shields.io/npm/dm/@m4thieulavoie/linting.svg)](https://www.npmjs.com/package/@m4thieulavoie/linting)

My opiniated set of linting rules

## Installation

```bash
npm i -D @m4thieulavoie/linting
```

## Usage

### eslint

```js
// .eslintrc.js

module.exports = {
  extends: require.resolve("@m4thieulavoie/linting"),
};
```

### stylelint

```json
// .stylelintrc.json
{
  "extends": ["@m4thieulavoie/linting/stylelint"]
}
```
