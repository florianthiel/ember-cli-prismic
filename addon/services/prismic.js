import Ember from 'ember';
import Service from '@ember/service';
import Api from '../models/Api';

export default Service.extend({

  getApi() {
    const config = Ember.getOwner(this).resolveRegistration('config:environment');
    const url = config.prismic.apiEndpoint;
    const options = { accessToken: config.prismic.accessToken };
    return new Api(url, options).get();
  }

});
