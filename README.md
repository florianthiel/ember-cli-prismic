
# ember-cli-prismic

This README outlines the details of collaborating on this Ember addon.

## What it does

This addon does:

* Provide `prismic` service in order to query a prismic.io repository
* Provide `as-text` and `as-html` template helpers

This addon does **not**:

* Provide a prismic.io API endpoint for testing 

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
    }
  }
}
``` 

In your route, controller or component, inject `prismic` service:

```
// routes/articles.js

// ... imports
import { inject as service } from '@ember/service';

export default Route.extend({

  prismic: service(),

  // ... route configuration

});
``` 

Call the `prismic` service:

```
// routes/articles.js

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'ember-fetch/ajax';
import config from '../config/environment';

export default Route.extend({
  prismic: service(),

  model() {
    return this.get('prismic').masterRef().then(ref => {
      const apiEndpoint = config.prismic.apiEndpoint;
      const r = `ref=${ref}`;
      const q = 'q=[[at(document.type, "article")]]';
      const o = 'orderings=[document.last_publication_date desc]';
      const url = `${apiEndpoint}/documents/search?${r}&${q}&${o}`;
      return fetch(url).then(response => {
        return response;
      });
    });
  }
});
``` 

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
