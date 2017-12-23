import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function asHtml([field]) {
  return htmlSafe(PrismicDOM.RichText.asHtml(field));
}

export default helper(asHtml);
