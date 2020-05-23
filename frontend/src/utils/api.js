const getAuthHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', 'xcx');
  headers.append('Content-Type', 'application/json');
  return headers;
};

export const fetchCategories = () => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/categories', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const fetchPosts = () => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}
