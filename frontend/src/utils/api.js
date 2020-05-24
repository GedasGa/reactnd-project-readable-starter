const URL = 'http://localhost:3001';

const getAuthHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', 'super-secret');
  headers.append('Content-Type', 'application/json');
  return headers;
};

export const fetchCategoriesAPI = () => {
  const options = { method: 'get', headers: getAuthHeaders() };
  return fetch(`${URL}/categories`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const fetchPostsAPI = () => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch(`${URL}/posts`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const upvotePostAPI = (postId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'upVote'
    })
  };
  return fetch(`${URL}/posts/${postId}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));
}

export const downvotePostAPI = (postId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'downVote'
    })
  };
  return fetch(`${URL}/posts/${postId}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));
}