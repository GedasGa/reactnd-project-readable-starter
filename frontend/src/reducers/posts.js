import { POSTS_FETCHED, POST_UPVOTED, POST_DOWNVOTED, POST_ADDED, POST_DELETED, POST_UPDATED } from '../actions/types';

const posts = (state = [], {type, payload}) => {
  switch (type) {
    case POSTS_FETCHED:
      return payload;
    case POST_ADDED:
      return [
        ...state,
        {
          ...payload,
        }
      ];
    case POST_UPDATED:
      return state.map(post => 
        post.id === payload.id 
          ? {
            ...post,
            title: payload.title,
            body: payload.body,
            timestamp: payload.timestamp,
          }
          : post
      );
    case POST_DELETED:
      return state.filter(post => post.id !== payload.id);
    case POST_UPVOTED:
      return state.map(post =>
        post.id === payload
          ? {
            ...post,
            voteScore: post.voteScore + 1,
          }
          : post
      );
    case POST_DOWNVOTED:
      return state.map(post => 
        post.id === payload
          ? {
            ...post,
            voteScore: post.voteScore - 1,
          }
          : post
      );
    default:
      return state;
  }
}

export default posts;
