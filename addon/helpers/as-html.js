import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { RichText } from 'prismic-dom';

export function asHtml([field]) {
  return htmlSafe(RichText.asHtml(field));
}

export default helper(asHtml);
