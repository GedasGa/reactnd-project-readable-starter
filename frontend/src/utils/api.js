const URL = 'http://localhost:3001';

const getAuthHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', 'super-secret');
  headers.append('Content-Type', 'application/json');
  return headers;
};

export const getCategoriesAPI = () => {
  const options = { method: 'get', headers: getAuthHeaders() };
  return fetch(`${URL}/categories`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const getPostsAPI = () => {
  const options = { method: 'get', headers: getAuthHeaders() };
  return fetch(`${URL}/posts`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const addPostAPI = (id, title, body, author, category) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      id: id,
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category,
    })
  };
  return fetch(`${URL}/posts`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const getPostAPI = (postId) => {
  const options = { method: 'get', headers: getAuthHeaders() };
  return fetch(`${URL}/posts/${postId}`, options)
    .then(response => response.json())
    .then(data => data) ;
}

export const updatePostAPI = (postId, title, body) => {
  const options = { 
    method: 'put', 
    headers: getAuthHeaders(),
    body: JSON.stringify({
      title: title,
      body: body,
    })
  }
  return fetch(`${URL}/posts/${postId}`, options)
    .then(response => response.json())
    .then(data => data);
}

export const deletePostAPI = (postId) => {
  const options = { method: 'delete', headers: getAuthHeaders() };
  return fetch(`${URL}/posts/${postId}`, options)
    .then(response => response.json())
    .then(data => data);
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

export const getPostCommentsAPI = (postId) => {
  const options = { method: 'get', headers: getAuthHeaders() };
  return fetch(`${URL}/posts/${postId}/comments`, options)
    .then(response => response.json())
    .then(data => data);
}

export const addCommentAPI = (id, author, body, parentId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      id: id,
      timestamp: Date.now(),
      author: author,
      body: body,
      parentId: parentId,
    })
  };
  return fetch(`${URL}/comments`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const updateCommentAPI = (commentId, body) => {
  const options = { 
    method: 'put', 
    headers: getAuthHeaders(),
    body: JSON.stringify({
      timestamp: Date.now(),
      body: body,
    })
  }
  return fetch(`${URL}/comments/${commentId}`, options)
    .then(response => response.json())
    .then(data => data);
}

export const deleteCommentAPI = (commentId) => {
  const options = { method: 'delete', headers: getAuthHeaders() };
  return fetch(`${URL}/comments/${commentId}`, options)
    .then(response => response.json())
    .then(data => data);
}

export const upvoteCommentAPI = (postId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'upVote'
    })
  };
  return fetch(`${URL}/comments/${postId}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const downvoteCommentAPI = (commentId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'downVote'
    })
  };
  return fetch(`${URL}/comments/${commentId}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}
