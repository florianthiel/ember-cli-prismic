# ember-cli-prismic

An ember-cli addon for using [prismic.io](https://prismic.io) in Ember.js applications.

This addon provides :

* `prismic` service to query a prismic.io repository
* `as-text` and `as-html` template helpers to display prismic.io documents fields
* `PrismicJS` and `PrismicDOM` global variables (imported from the [prismic.io Javascript development kit](https://github.com/prismicio/prismic-javascript))

## Usage

Install the addon:

```
ember install ember-cli-prismic
```

Configure your prismic repository API endpoint:

```
// config/environment.js

module.exports = function(environment) {
  var ENV = {

    /* config */

    prismic: {
      apiEndpoint: 'https://<your_repository>.prismic.io/api/v2'
      // accessToken: '<your_private_repository_access_token_if_needed>'
    }
  }
}
``` 

In your route, controller or component, inject and call the `prismic` service:

```
// routes/articles.js

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  prismic: service(),

  model() {
    return this.get('prismic')
      .getApi()
      .then(api => api.query(
        PrismicJS.Predicates.at('document.type', 'blog-post'),
        {
          fetchLinks: 'team-member.complete_name',
          orderings: '[document.last_publication_date desc]',
          page: 2,
          pageSize: 2
        }));
  }
});
```

See the [prismic.io Javascript development kit documentation](https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project) for more usage. 

## Contribution

### Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-prismic`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
