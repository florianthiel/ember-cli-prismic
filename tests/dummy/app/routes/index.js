import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  prismic: service(),

  model() {
    const predicates = '[at(document.type, "blog-post")]';
    const options = {
      orderings: '[document.last_publication_date desc]',
      page: 2,
      pageSize: 2,
      fetchLinks: 'team-member.complete_name'
    };
    return this.get('prismic')
      .getApi()
      .then(api => api.query(predicates, options));
  }
});
