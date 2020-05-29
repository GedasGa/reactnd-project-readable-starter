import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';

import FormDialog from './FormDialog';

function AddEditCommentDialog(props) {
  const {isEdit, postId, comment, handleClose, handleSubmit, open} = props;

  const [author, setAuthor] = React.useState(isEdit ? comment.author : '');
  const [body, setBody] = React.useState(isEdit ? comment.body : '');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleFormSubmit = () => {
    if (isEdit) {
      handleSubmit(comment.id, body);
    } else {
      handleSubmit(uuidv4(), author, body, postId);
    }
    handleClose();
  }

  return (
    <FormDialog 
      open={open}
      isEdit={isEdit}
      handleClose={handleClose}
      handleSubmit={handleFormSubmit}
      title={isEdit ? 'Edit comment' : 'Add a new comment'}
      children={
        <>
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
        </>
      }
    />
  );
}

export default AddEditCommentDialog;