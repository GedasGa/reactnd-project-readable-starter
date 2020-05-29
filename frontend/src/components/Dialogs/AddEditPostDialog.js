import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormDialog from './FormDialog';

function AddEditPostDialog(props) {
  const {isEdit, categories, post, handleClose, handleSubmit, open} = props;

  const [author, setAuthor] = React.useState(isEdit ? post && post.author : '');
  const [title, setTitle] = React.useState(isEdit ? post && post.title : '');
  const [body, setBody] = React.useState(isEdit ? post && post.body : '');
  const [category, setCategory] = React.useState(isEdit ? post && post.category : '');

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

  const handleFormSubmit = () => {
    if (isEdit) {
      handleSubmit(post.id, title, body);
    } else {
      handleSubmit(uuidv4(), title, body, author, category);
    }
    handleClose();
  }
  
  return (
    <FormDialog 
      open={open}
      isEdit={isEdit}
      handleClose={handleClose}
      handleSubmit={handleFormSubmit}
      title={isEdit ? 'Edit post' : 'Add a new post'}
      children={
        <>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            fullWidth
          />
          <TextField
            id="author"
            label="Author"
            type="text"
            disabled={isEdit}
            value={author}
            onChange={handleAuthorChange}
            fullWidth
          />
          <TextField
            id="body"
            label="Body"
            type="text"
            value={body}
            onChange={handleBodyChange}
            fullWidth
          />
          <TextField
            id="standard-select-currency"
            select
            label="Category"
            disabled={isEdit}
            value={category}
            onChange={handleCategoryChange}
            helperText="Please select a post category"
            fullWidth
          >
            {categories && !isEdit ? categories.map((category) => (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            )) :
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          }
          </TextField>
        </>
      }
    />
  );
}

export default AddEditPostDialog;