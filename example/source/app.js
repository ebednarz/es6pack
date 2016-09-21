'use strict';
require('./ready')
  .then(() => {
    const heading = document.createElement('H1');
    const status = window.d3 ? window.d3.version : 'not loaded';
    const textNode = document.createTextNode(`D3: ${status}`);

    heading.appendChild(textNode);
    document.body.insertBefore(heading, document.body.firstChild);
  });
