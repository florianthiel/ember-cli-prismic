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
