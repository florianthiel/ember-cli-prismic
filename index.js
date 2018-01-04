/* eslint-env node */
'use strict';
const path = require('path');
const map = require('broccoli-stew').map;
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const stringReplace = require('broccoli-string-replace');

module.exports = {
  name: 'ember-cli-prismic',

  treeForVendor(defaultTree) {
    let prismicJSTree = new Funnel(path.dirname(require.resolve('prismic-javascript/dist/prismic-javascript.js')), {
      files: ['prismic-javascript.js'],
      destDir: 'prismic'
    });
    //prismicJSTree = map(prismicJSTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    let prismicDOMTree = new Funnel(path.dirname(require.resolve('prismic-dom/dist/prismic-dom.js')), {
      files: ['prismic-dom.js'],
      destDir: 'prismic'
    });
    //prismicDOMTree = map(prismicDOMTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([prismicJSTree, prismicDOMTree, defaultTree]);
  },

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    const target = (parentAddon || app);

    // prismic-javascript
    target.import('vendor/prismic/prismic-javascript.js');
    target.import('vendor/shims/prismic-javascript.js');

    // prismic-dom
    target.import('vendor/prismic/prismic-dom.js');
    target.import('vendor/shims/prismic-dom.js');
  }

};
