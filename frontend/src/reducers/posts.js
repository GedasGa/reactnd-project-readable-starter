import { POSTS_FETCHED } from '../actions/types';

const posts = (state = [], {type, payload}) => {
  switch (type) {
    case POSTS_FETCHED:
      return payload;
    default:
      return state;
  }
}

export default posts;
