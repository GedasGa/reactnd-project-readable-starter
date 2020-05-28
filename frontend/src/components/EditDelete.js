import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


function EditDelete(props) {
  const { id, handleEdit, handleDelete } = props;

  return (
    <>
      <IconButton 
        aria-label="edit"
        onClick={() => handleEdit(id)}
      >
        <EditIcon />
      </IconButton>
      <IconButton 
        aria-label="delete"
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

export default EditDelete;


