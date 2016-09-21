const connect = require('connect');
const serveStatic = require('serve-static');
const fs = require('fs');
const open = require('open');
const es6pack = require('..');

const template = fs
  .readFileSync('./template.html', 'utf8')
  .replace('/* ES6PACK */', es6pack);

connect()
  .use(serveStatic('./public'))
  .use(serveStatic('./node_modules'))
  .use((request, response) => {
    response.end(template);
  })
  .listen(3000, () => {
    open('http://localhost:3000');
  });
