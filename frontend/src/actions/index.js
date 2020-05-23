import {
  fetchCategories,
  fetchPosts,
} from '../utils/api.js';
import {
  CATEGORIES_FETCHED,
  POSTS_FETCHED,
} from './types';

const getCategoriesFulfiled  = (categories) => ({
  type: CATEGORIES_FETCHED,
  payload: categories
})

export const getCategories = () => (dispatch) =>
  fetchCategories()
  .then(response => dispatch(getCategoriesFulfiled(response.categories)))
  .catch(err => console.error("Could not fetch categories", err));

const getPostsFulfiled = (posts) => ({
  type: POSTS_FETCHED,
  payload: posts
});

export const getPosts = () => (dispatch) =>
  fetchPosts()
  .then(response => dispatch(getPostsFulfiled(response)))
  .catch(err => console.error("Could not fetch posts", err));
