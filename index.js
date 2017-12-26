/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-prismic',

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/lru_cache/core.js');
    app.import('vendor/lru_cache/index.js');
    app.import('node_modules/prismic-dom/dist/prismic-dom.js');
    app.import('node_modules/prismic-javascript/dist/prismic-javascript.js');
  }
};
