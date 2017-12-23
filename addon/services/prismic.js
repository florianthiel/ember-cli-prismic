import Ember from 'ember';
import Service from '@ember/service';
import fetch from 'ember-fetch/ajax';
import RSVP from 'rsvp';

export default Service.extend({

  _getPrismicApi() {
    return new RSVP.Promise((resolve) => {
      const config = Ember.getOwner(this).resolveRegistration('config:environment');
      const _prismicApi = this.get('prismicApi');
      if (_prismicApi) {
        resolve(_prismicApi);
      }
      fetch(config.prismic.apiEndpoint).then(response => {
        this.set('prismicApi', response);
        resolve(response);
      });
    });
  },

  masterRef() {
    return new RSVP.Promise((resolve) => {
      this._getPrismicApi().then(api => {
        const masterRef = api.refs.find(ref => ref.isMasterRef).ref;
        resolve(masterRef);
      });
    });
  },

});
