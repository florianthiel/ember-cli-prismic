/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-prismic',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    const target = (parentAddon || app);

    target.import('node_modules/prismic-javascript/dist/prismic-javascript.min.js');
    target.import('node_modules/prismic-helpers/dist/prismic-helpers.js');
    target.import('node_modules/prismic-richtext/dist/prismic-richtext.js');
    target.import('node_modules/prismic-dom/dist/prismic-dom.js');
    target.import('vendor/shims/prismic-javascript.js');
    target.import('vendor/shims/prismic-dom.js');
  },

};
