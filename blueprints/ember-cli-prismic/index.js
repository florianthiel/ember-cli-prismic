/* eslint-env node */
module.exports = {
  description: 'Addon installation',

  afterInstall(options) {
    return this.addPackagesToProject([
      { name: 'prismic-javascript' },
      { name: 'prismic-dom' }
    ]);
  }
};
