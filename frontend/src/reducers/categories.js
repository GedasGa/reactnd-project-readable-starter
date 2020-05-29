import { CATEGORIES_FETCHED} from '../actions/types';

function categories (state = [], {type, payload}) {
  switch (type) {
    case CATEGORIES_FETCHED:
      return payload;
    default:
      return state;
  }
}

export default categories;