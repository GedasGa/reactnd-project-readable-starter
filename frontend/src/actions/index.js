import {
  getCategoriesAPI,
  getPostsAPI,
  upvotePostAPI,
  downvotePostAPI,
  getPostAPI,
  getPostCommentsAPI,
  upvoteCommentAPI,
  downvoteCommentAPI,
} from '../utils/api.js';
import {
  CATEGORIES_FETCHED,
  POSTS_FETCHED,
  POST_UPVOTED,
  POST_DOWNVOTED,
  POST_FETCHED,
  POST_COMMENTS_FETCHED,
  COMMENT_UPVOTED,
  COMMENT_DOWNVOTED
} from './types';

const getCategoriesFulfiled  = (categories) => ({
  type: CATEGORIES_FETCHED,
  payload: categories
});

export const getCategories = () => (dispatch) =>
  getCategoriesAPI()
  .then(response => dispatch(getCategoriesFulfiled(response.categories)))
  .catch(err => console.error("Could not fetch categories:", err));

const getPostsFulfiled = (posts) => ({
  type: POSTS_FETCHED,
  payload: posts
});

export const getPosts = () => (dispatch) =>
  getPostsAPI()
  .then(response => dispatch(getPostsFulfiled(response)))
  .catch(err => console.error("Could not fetch post:", err));

export const upvotePostFulfiled  = (postId) => ({
    type: POST_UPVOTED,
    payload: postId
});

export const upvotePost = (postId) => (dispatch) =>
  upvotePostAPI(postId)
  .then(response => dispatch(upvotePostFulfiled(response.id)))
  .catch(err => console.error("Could not upvote post:", err));

export const downvotePostFulfiled = (postId) => ({
    type: POST_DOWNVOTED,
    payload: postId
});

export const downvotePost = (postId) => (dispatch) =>
  downvotePostAPI(postId)
  .then(response => dispatch(downvotePostFulfiled(response.id)))
  .catch(err => console.error("Could not downvote post:", err));


export const getPostFulfiled = (post) => ({
    type: POST_FETCHED,
    payload: post
});

export const getPost = (postId) => (dispatch) =>
  getPostAPI(postId)
  .then(response => dispatch(getPostFulfiled(response)))
  .catch(err => console.error("Could not get post:", err));


export const getPostCommentsFulfiled = (comments) => ({
    type: POST_COMMENTS_FETCHED,
    payload: comments
});

export const getPostComments = (postId) => (dispatch) =>
  getPostCommentsAPI(postId)
  .then(response => dispatch(getPostCommentsFulfiled(response)))
  .catch(err => console.error("Could not get post comments:", err));

export const upvoteCommentFulfiled  = (postId) => ({
    type: COMMENT_UPVOTED,
    payload: postId
});

export const upvoteComment = (commentId) => (dispatch) =>
  upvoteCommentAPI(commentId)
  .then(response => dispatch(upvotePostFulfiled(response.id)))
  .catch(err => console.error("Could not upvote comment:", err));

export const downvoteCommentFulfiled = (postId) => ({
    type: COMMENT_DOWNVOTED,
    payload: postId
});

export const downvoteComment = (commentId) => (dispatch) =>
  downvoteCommentAPI(commentId)
  .then(response => dispatch(downvotePostFulfiled(response.id)))
  .catch(err => console.error("Could not downvote comment:", err));