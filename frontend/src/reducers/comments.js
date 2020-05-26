import { POST_COMMENTS_FETCHED, COMMENT_UPVOTED, COMMENT_DOWNVOTED } from '../actions/types';

const comments = (state = [], {type, payload}) => {
  switch (type) {
    case POST_COMMENTS_FETCHED:
      return payload;
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
