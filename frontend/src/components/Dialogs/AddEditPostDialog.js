import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function AddEditPostDialog(props) {
  const {isEdit, categories, post, handleClose, handleSubmit, open} = props;

  const [author, setAuthor] = React.useState(isEdit ? post.author : '');
  const [title, setTitle] = React.useState(isEdit ? post.catetitlegory : '');
  const [body, setBody] = React.useState(isEdit ? post.body : '');
  const [category, setCategory] = React.useState(isEdit ? post.category : '');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormDialog 
      open={open}
      isEdit={isEdit}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      title={isEdit ? 'Edit post' : 'Add a new post'}
      children={
        <>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="email"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            id="author"
            label="Author"
            type="text"
            value={author}
            onChange={handleAuthorChange}
          />
          <TextField
            id="body"
            label="Body"
            type="email"
            value={body}
            onChange={handleBodyChange}
            fullWidth
          />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={category}
            onChange={handleCategoryChange}
            helperText="Please select post category"
            fullWidth
          >
            {categories.map((category) => (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </>
      }
    />
  );
}

export default AddEditPostDialog;