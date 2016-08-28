<h1 text-aling="center">
  <img src="https://cdn.rawgit.com/ebednarz/es6pack/master/assets/es6pack.svg" width="400">
</h1>

[![NPM version][npm-image]][npm-url]

> Safe and performant ECMAScript 2015 script loading for the browser.

## Installation

    $ npm install es6pack

## Purpose

- Use ECMAScript 2015 (sans "transpilation") and contemporary 
  browser APIs as progressive enhancement without bothering 
  [the little guy](https://www.flickr.com/photos/ebednarz/13934016013/in/dateposted-public/lightbox/).
- Expose the conditional script resource URLs to the preload scanner.
- Load the script resources in parallel without blocking page rendering.
- Execute the loaded script resources in source order.

## Declarative API

- the `HEAD` element must have an `itemscope` attribute
- resources are declared with `LINK` elements that have
    - a required `itemprop` attribute with one of the following values
        - `style-resource`
        - `script-resource`
    - a required `href` attribute with the resource URL
    - an optional `media` attribute with a media query
        - for script resources, the media query is only 
          evaluated once, when the bootload script is executed; 
          use it with caution and common sense
    - an optional `rel` attribute with a resource hint value of sorts
- the bootload script itself succeeds those `LINK` elements

Since the bootload script should always be included inline,
the module exports the script as a string that can directly 
be used with a template engine.

Normal style sheets links should be placed **after** this 
inline script because the CSSOM blocks script execution:
[https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/)

### React example

    const es6pack = require('es6pack');

[...]

    <head itemscope>
      [...]
      <link itemprop="style-resource" href="beep.css" />
      <link itemprop="script-resource" href="beep.js" />
      <link itemprop="script-resource" href="boop.js" />
      <script
        dangerouslySetInnerHTML={{__html: es6pack}}
        ></script>
      <link href="mobile-first.css" rel="stylesheet" />
    </head>

## ECMAScript 2015 feature tests

### `eval`ed

- const declaration
- let declaration
- arrow function
- default parameter
- template string
- object destructuring
- generator function
- for/of loop
- yield
- spread
- class/extends

### Global objects

- `Map`
- `Promise`
- `Proxy`
- `Reflect`
- `Set`
- `Symbol`
- `WeakMap`
- `WeakSet`

## Host objects feature tests

- `MutationObserver`
- `WebSocket`
- `Worker`
- `fetch`
- `matchMedia`
- `requestAnimationFrame`
- `document` has the methods 
    - `getElementsByClassName`
    - `querySelectorAll`
- `HTMLElement` instances have a `classList` object
- `HTMLScriptElement` has boolean IDL attribute `async`
- SVG can be used in HTML

## Example

    $ npm run prepublish
    $ cd example
    $ npm start

## License

MIT

[npm-url]: https://www.npmjs.com/package/es6pack
[npm-image]: https://img.shields.io/npm/v/es6pack.svg?style=flat-square
