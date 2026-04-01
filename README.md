# @gzkdev/emoticons

A simple and fun npm library for ASCII emoticons! Inspired by [`cool-ascii-faces`](https://www.npmjs.com/package/cool-ascii-faces), but supercharged with **TypeScript**, **zero dependencies**, and meaningful **categorization**.

## Installation

```sh
npm install @gzkdev/emoticons
# or
pnpm add @gzkdev/emoticons
# or
yarn add @gzkdev/emoticons
```

## Usage

This library is packed with native ESM/CJS support and exported Typescript types. It doesn't fetch any data at runtime, everything is bundled securely with `0` dependencies.

```typescript
import {
  random,
  randomObject,
  getByTag,
  search,
  getAll,
  count,
} from '@gzkdev/emoticons';

// 1. Get a random emoticon string
console.log(random()); // "( ͡° ͜ʖ ͡°)"

// 2. Get a random emoticon object with meaning & tags
console.log(randomObject());
/*
{
  value: "( ͡° ͜ʖ ͡°)",
  meaning: "Lenny Face",
  tags: ["lenny", "face"]
}
*/

// 3. Get total count
console.log(`There are ${count} emoticons available!`);

// 4. Search by meaning or tags
const faces = search('shrug');
console.log(faces[0]);
// { value: "¯\\_(ツ)_/¯", meaning: "Shrug", tags: ["shrugging"] }

// 5. Get strictly by tag
const coolFaces = getByTag('cool');
console.log(coolFaces);

// 6. Get all emoticons
const allData = getAll();
```

## Features

- **TypeScript native**: Built and tested in TS. Rich typings out of the box.
- **Isomorphic**: Runs everywhere (Node, Bun, Deno, Browser edge) since it has zero dependencies.
- **Scalable Dataset**: Combines Wikipedia datasets and popular ASCII faces with categorizations.
- **Features**: A robust, staticly exported structure.

## Credits

This project was highly inspired by the legendary [**cool-ascii-faces**](https://github.com/maxogden/cool-ascii-faces). A big shoutout to the contributors of `cool-ascii-faces` for providing a delightful initial dataset of text faces that we natively integrated!

## Contribution & Commits

This project follows conventional commit conventions. Your commit messages will be verified via git hooks:

```
feat: add new CLI interface
fix: resolve duplicate meaning
```
