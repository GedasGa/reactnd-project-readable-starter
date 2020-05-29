import { POST_COMMENTS_FETCHED, COMMENT_UPVOTED, COMMENT_DOWNVOTED, COMMENT_ADDED, COMMENT_UPDATED, COMMENT_DELETED } from '../actions/types';

const comments = (state = [], {type, payload}) => {
  switch (type) {
    case POST_COMMENTS_FETCHED:
      return payload;
    case COMMENT_ADDED:
        return [
          ...state,
          {
            ...payload,
          }
        ];
      case COMMENT_UPDATED:
        return state.map(comment => 
          comment.id === payload.id 
            ? {
              ...comment,
              body: payload.body,
              timestamp: payload.timestamp,
            }
            : comment
        );
      case COMMENT_DELETED:
        return state.filter(comment => comment.id !== payload.id);
    case COMMENT_UPVOTED:
      return state.map(comment =>
        comment.id === payload
          ? {
            ...comment,
            voteScore: comment.voteScore + 1,
          }
          : comment
      );
    case COMMENT_DOWNVOTED:
      return state.map(comment => 
        comment.id === payload
          ? {
            ...comment,
            voteScore: comment.voteScore - 1,
          }
          : comment
      );
    default:
      return state;
  }
}

export default comments;
