import {
  getCategoriesAPI,
  getPostsAPI,
  upvotePostAPI,
  downvotePostAPI,
  getPostAPI,
  getPostCommentsAPI,
  upvoteCommentAPI,
  downvoteCommentAPI,
  addPostAPI,
  updatePostAPI,
  deletePostAPI,
  addCommentAPI,
  updateCommentAPI,
  deleteCommentAPI,
} from '../utils/api.js';
import {
  CATEGORIES_FETCHED,
  POSTS_FETCHED,
  POST_ADDED,
  POST_UPDATED,
  POST_DELETED,
  POST_UPVOTED,
  POST_DOWNVOTED,
  POST_FETCHED,
  POST_COMMENTS_FETCHED,
  COMMENT_ADDED,
  COMMENT_UPDATED,
  COMMENT_DELETED,
  COMMENT_UPVOTED,
  COMMENT_DOWNVOTED,
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
  .then(response => dispatch(upvoteCommentFulfiled(response.id)))
  .catch(err => console.error("Could not upvote comment:", err));

export const downvoteCommentFulfiled = (postId) => ({
    type: COMMENT_DOWNVOTED,
    payload: postId
});

export const downvoteComment = (commentId) => (dispatch) =>
  downvoteCommentAPI(commentId)
  .then(response => dispatch(downvoteCommentFulfiled(response.id)))
  .catch(err => console.error("Could not downvote comment:", err));

export const addPostFulfiled = (post) => ({
    type: POST_ADDED,
    payload: post
});

export const addPost = (id, title, body, author, category) => (dispatch) =>
  addPostAPI(id, title, body, author, category)
  .then(response => dispatch(addPostFulfiled(response)))
  .catch(err => console.error("Could not add post:", err));

export const updatePostFulfiled = (post) => ({
    type: POST_UPDATED,
    payload: post
});

export const updatePost = (postId, title, body) => (dispatch) =>
  updatePostAPI(postId, title, body)
  .then(response => dispatch(updatePostFulfiled(response)))
  .catch(err => console.error("Could not update post:", err));

export const deletePostFulfiled = (post) => ({
    type: POST_DELETED,
    payload: post
});

export const deletePost = (postId) => (dispatch) =>
  deletePostAPI(postId)
  .then(response => dispatch(deletePostFulfiled(response)))
  .catch(err => console.error("Could not delete post:", err));

export const addCommentFulfiled = (comment) => ({
    type: COMMENT_ADDED,
    payload: comment
});

export const addComment = (commentId, body, author, parentId) => (dispatch) =>
  addCommentAPI(commentId, body, author, parentId)
  .then(response => dispatch(addCommentFulfiled(response)))
  .catch(err => console.error("Could not add comment:", err));

export const updateCommentFulfiled = (comment) => ({
    type: COMMENT_UPDATED,
    payload: comment
});

export const updateComment = (commentId, body) => (dispatch) =>
  updateCommentAPI(commentId, body)
  .then(response => dispatch(updateCommentFulfiled(response)))
  .catch(err => console.error("Could not update comment:", err));

export const deleteCommentFulfiled = (comment) => ({
    type: COMMENT_DELETED,
    payload: comment
});

export const deleteComment = (commentId) => (dispatch) =>
  deleteCommentAPI(commentId)
  .then(response => dispatch(deleteCommentFulfiled(response)))
  .catch(err => console.error("Could not delete comment:", err));