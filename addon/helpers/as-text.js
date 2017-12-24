import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function asText([field]) {
  return htmlSafe(PrismicDOM.RichText.asText(field));
}

export default helper(asText);
