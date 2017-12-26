import Ember from 'ember';
import Service from '@ember/service';

export default Service.extend({

  getApi() {
    const config = Ember.getOwner(this).resolveRegistration('config:environment');
    const apiEndpoint = config.prismic.apiEndpoint;
    const options = { accessToken: config.prismic.accessToken };
    return PrismicJS.getApi(apiEndpoint, options);
  }

});
