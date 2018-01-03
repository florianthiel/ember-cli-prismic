/* eslint-env node */
module.exports = {
  description: 'Addon installation',

  normalizeEntityName() {},

  beforeInstall(options) {
    return this.addPackagesToProject([
      { name: 'prismic-javascript' },
      { name: 'prismic-dom' }
    ]);
  }
};
