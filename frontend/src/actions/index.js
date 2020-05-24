import {
  fetchCategoriesAPI,
  fetchPostsAPI,
  upvotePostAPI,
  downvotePostAPI,
} from '../utils/api.js';
import {
  CATEGORIES_FETCHED,
  POSTS_FETCHED,
  POST_UPVOTED,
  POST_DOWNVOTED,
} from './types';

const getCategoriesFulfiled  = (categories) => ({
  type: CATEGORIES_FETCHED,
  payload: categories
})

export const getCategories = () => (dispatch) =>
  fetchCategoriesAPI()
  .then(response => dispatch(getCategoriesFulfiled(response.categories)))
  .catch(err => console.error("Could not fetch categories", err));

const getPostsFulfiled = (posts) => ({
  type: POSTS_FETCHED,
  payload: posts
});

export const getPosts = () => (dispatch) =>
  fetchPostsAPI()
  .then(response => dispatch(getPostsFulfiled(response)))
  .catch(err => console.error("Could not fetch posts", err));

export const upvotePostFulfiled  = (postId) => (
  {
    type: POST_UPVOTED,
    payload: postId
  }
)

export const upvotePost = (postId) => (dispatch) =>
  upvotePostAPI(postId)
  .then(response => dispatch(upvotePostFulfiled(response.id)))
  .catch(err => console.error("Could upvote post", err));

export const downvotePostFulfiled = (postId) => (
  {
    type: POST_DOWNVOTED,
    payload: postId
  }
)

export const downvotePost = (postId) => (dispatch) =>
  downvotePostAPI(postId)
  .then(response => dispatch(downvotePostFulfiled(response.id)))
  .catch(err => console.error("Could downvote post", err));