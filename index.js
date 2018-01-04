/* eslint-env node */
'use strict';
const path = require('path');
const map = require('broccoli-stew').map;
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-prismic',

  treeForVendor(defaultTree) {
    let prismicJSLib = new Funnel(path.dirname(require.resolve('prismic-javascript/dist/prismic-javascript.js')), {
      files: ['prismic-javascript.js'],
      destDir: 'prismic'
    });
    prismicJSLib = map(prismicJSLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    let prismicDOMLib = new Funnel(path.dirname(require.resolve('prismic-dom/dist/prismic-dom.js')), {
      files: ['prismic-dom.js'],
      destDir: 'prismic'
    });
    prismicDOMLib = map(prismicDOMLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([defaultTree, prismicJSLib, prismicDOMLib]);
  },

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    const target = (parentAddon || app);

    // import prismic.io orignal libraries
    target.import('vendor/prismic/prismic-javascript.js');
    target.import('vendor/prismic/prismic-dom.js');

    // import prismic.io addon shims
    target.import('vendor/shims/prismic-javascript.js');
    target.import('vendor/shims/prismic-dom.js');
  }

};
