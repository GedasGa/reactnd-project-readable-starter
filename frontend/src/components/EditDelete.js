import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

function EditDelete(props) {
  const classes = useStyles();
  const { id, handleEdit, handleDelete } = props;

  return (
    <div className={classes.root}>
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
    </div>
  );
}

export default EditDelete;


