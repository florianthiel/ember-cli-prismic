/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-prismic',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    const target = (parentAddon || app);

    target.import('node_modules/prismic-javascript/dist/prismic-javascript.min.js');
    target.import('node_modules/prismic-dom/dist/prismic-dom.min.js');
    target.import('vendor/shims/prismic-javascript.js');
    target.import('vendor/shims/prismic-dom.js');
  },

};
