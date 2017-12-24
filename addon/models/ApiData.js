import Ref from './Ref';

class ApiData {

  constructor(data) {
    this.refs = data.refs.map(ref => new Ref(ref));
    this.bookmarks = data.bookmarks;
    this.types = data.types;
    this.tags = data.tags;
    this.oauth_initiate = data.oauth_initiate;
    this.oauth_token = data.oauth_token;
    this.version = data.version;
    this.licence = data.licence;
    this.forms = data.forms;
    this.experiments = data.experiments;
  }

}

export default ApiData;
