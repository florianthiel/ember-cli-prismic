import fetch from 'ember-fetch/ajax';
import ResolvedApi from './ResolvedApi';

class Api {

  constructor(url, options = {}) {
    this.options = options;
    this.apiEndpoint = url;
    this.url = url;

    if (this.options.accessToken) {
      const accessTokenParam = `access_token=${this.options.accessToken}`;
      this.url += (url.indexOf('?') > -1 ? '&' : '?') + accessTokenParam;
    }
  }

  get() {
    return fetch(this.url).then(data => {
      return new ResolvedApi(data, this.apiEndpoint, this.options);
    });
  }
}

export default Api;
