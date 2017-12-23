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
      const q = 'q=[[at(document.type, "blog-post")]]';
      const o = 'orderings=[document.last_publication_date desc]';
      const url = `${apiEndpoint}/documents/search?${r}&${q}&${o}`;
      return fetch(url).then(response => {
        return response;
      });
    });
  }
});
