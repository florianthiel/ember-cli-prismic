import Ember from 'ember';
import Service from '@ember/service';
import fetch from 'ember-fetch/ajax';
import RSVP from 'rsvp';

export default Service.extend({

  api() {
    return new RSVP.Promise((resolve) => {
      const config = Ember.getOwner(this).resolveRegistration('config:environment');
      const { apiEndpoint, accessToken } = config.prismic;

      let url = `${apiEndpoint}`;
      if (accessToken) {
        url += `?access_token=${accessToken}`;
      }

      fetch(url).then(response => {
        this.set('prismicApi', response);
        resolve(response);
      });
    });
  },

  master() {
    return new RSVP.Promise((resolve) => {
      this.api().then(api => {
        const masterRef = api.refs.find(ref => ref.isMasterRef).ref;
        resolve(masterRef);
      });
    });
  },

});
