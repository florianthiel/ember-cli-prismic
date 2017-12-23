/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-prismic',

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('node_modules/prismic-dom/dist/prismic-dom.js');
  }
};
