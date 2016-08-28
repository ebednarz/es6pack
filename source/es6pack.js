(function (answer, window, document, resourceAttribute, FUNCTION) {
  if (
    (answer == 42)
    && (FUNCTION == typeof Map)
    && (FUNCTION == typeof Promise)
    && (FUNCTION == typeof Proxy)
    && ('object' == typeof Reflect)
    && (FUNCTION == typeof Set)
    && (FUNCTION == typeof Symbol)
    && (FUNCTION == typeof WeakMap)
    && (FUNCTION == typeof WeakSet)
    // Here be host objects
    && (FUNCTION == typeof MutationObserver)
    && (FUNCTION == typeof WebSocket)
    && (FUNCTION == typeof Worker)
    && (FUNCTION == typeof fetch)
    && (FUNCTION == typeof matchMedia)
    && (FUNCTION == typeof requestAnimationFrame)
    && (FUNCTION == typeof document.getElementsByClassName)
    && (FUNCTION == typeof document.querySelectorAll)
    && ('boolean' == typeof document.scripts[0].async)
    && ('object' == typeof document.documentElement.classList)
    && (function () {
      var dummy = document.createElement('DIV');
      dummy.innerHTML = '<svg/>';
      return dummy.firstChild && (dummy.firstChild.namespaceURI == 'http://www.w3.org/2000/svg');
    }())
  ) {
    var resources = document.querySelectorAll('link[' + resourceAttribute + ']');
    var length = resources.length;
    var index = 0;
    var link;
    var script;

    while (index < length) {
      link = resources[index++];

      if (!link.media || matchMedia(link.media).matches) {
        switch (link.getAttribute(resourceAttribute)) {
          case 'script-resource':
            script = document.createElement('SCRIPT');
            script.async = false;
            link.parentNode.replaceChild(script, link);
            script.src = link.getAttribute('href');
            continue;
          case 'style-resource':
            link.rel = 'stylesheet';
            link.removeAttribute(resourceAttribute);
            continue;
        }
      }

      link.parentNode.removeChild(link);
    }
  }
}(
  (function () {
    try {
      return -eval(
        'const f=(n=2)=>[`${n}`],{PI}=Math;' +
        'function*g(a){for(let i of a){yield i}}' +
        'class A{m(p,v){return p+v}}' +
        'class B extends A{}' +
        'new B().m(...[~PI, g(f()).next().value])'
      );
    } catch (ignore) {
    }
  }()),
  window,
  document,
  'itemprop',
  'function'
));
