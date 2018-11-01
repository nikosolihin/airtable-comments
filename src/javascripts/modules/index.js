/**
 * Automatically instantiates modules based on
 * data-attributes specifying module file-names.
 */
document
  .querySelectorAll('[data-module]')
  .forEach(el => import(`./${el.getAttribute('data-module')}`).then(module => new module.default(el)));
