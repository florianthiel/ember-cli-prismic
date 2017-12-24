import fetch from 'ember-fetch/ajax';
import ApiData from './ApiData';

class ResolvedApi {

  constructor(data, apiEndpoint, options) {
    const apiData = new ApiData(data);
    this.data = apiData;
    this.apiEndpoint = apiEndpoint;
    this.options = options;
    this.masterRef = apiData.refs.find(ref => ref.isMasterRef);
    this.bookmarks = apiData.bookmarks;
    this.refs = apiData.refs;
    this.types = apiData.types;
  }

  bookmarks() {

  }

  master() {
    return this.masterRef.ref;
  }

  ref(label) {
    const ref = this.data.refs.find(ref => ref.label === label);
    return ref ? ref.ref : null;
  }

  query(predicates, options = {}) {
    let url = this.apiEndpoint + '/documents/search';

    if (options.accessToken) {
      url += `?access_token=${options.accessToken}`;
    }

    const ref = options.ref || this.master();
    url += (url.indexOf('?') > -1 ? '&' : '?') + `ref=${ref}`;

    let q = '&q=';
    if (Array.isArray(predicates)) {
      q += predicates.map((predicate) => `[${predicate}]`).join('&');
    } else {
      q += `[${predicates}]`;
    }
    url += q;

    if (options.page) {
      url += `&page=${options.page}`;
    }

    if (options.pageSize) {
      url += `&pageSize=${options.pageSize}`;
    }

    if (options.fetchLinks) {
      url += '&fetchLinks=';
      if (Array.isArray(options.fetchLinks)) {
        url += options.fetchLinks.join(',');
      } else {
        url += options.fetchLinks;
      }
    }

    if (options.orderings) {
      url += `&orderings=${options.orderings}`;
    }

    return fetch(url);
  }

/*
  queryFirst() {
  }

  getByID(id) {
  }

  getByIDs(ids) {
  }

  getByUID(type, uid) {
  }

  getSingle(type) {
  }

  getBookmark(bookmark) {
  }
*/

}

export default ResolvedApi;
