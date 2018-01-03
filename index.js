/* eslint-env node */
'use strict';
const map = require('broccoli-stew').map;
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

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

  treeForVendor(defaultTree) {
    let prismicJSLib = new Funnel('node_modules/prismic-javascript/dist/prismic-javascript.min.js');
    prismicJSLib = map(prismicJSLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    let prismicDOMLib = new Funnel('node_modules/prismic-dom/dist/prismic-dom.min.js');
    prismicDOMLib = map(prismicDOMLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([defaultTree, prismicJSLib, prismicDOMLib]);
  }
};
