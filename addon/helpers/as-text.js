import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { RichText } from 'prismic-dom';

export function asText([field]) {
  return htmlSafe(RichText.asText(field));
}

export default helper(asText);
