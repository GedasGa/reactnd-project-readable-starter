import { POSTS_FETCHED, POST_UPVOTED, POST_DOWNVOTED } from '../actions/types';

const posts = (state = [], {type, payload}) => {
  switch (type) {
    case POSTS_FETCHED:
      return payload;
    case POST_UPVOTED:
      return state.map(post => (
        post.id === payload
          ? {
            ...post,
            voteScore: post.voteScore + 1,
          }
          : post
      ));
    case POST_DOWNVOTED:
      return state.map(post => (
        post.id === payload
          ? {
            ...post,
            voteScore: post.voteScore - 1,
          }
          : post
      ));
    default:
      return state;
  }
}

export default posts;
