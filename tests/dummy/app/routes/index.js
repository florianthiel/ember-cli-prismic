import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Prismic from 'prismic-javascript';

export default Route.extend({

  prismic: service(),

  model() {
    return this.get('prismic')
      .getApi()
      .then(api => api.query(
        Prismic.Predicates.at('document.type', 'book'), { orderings: '[document.last_publication_date desc]' })
      );
  }
});
