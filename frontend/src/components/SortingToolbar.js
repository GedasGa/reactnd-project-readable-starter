import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

function SortingToolbar(props) {
  const { sorting, changeSorting } = props;

  const onSortOrderChanged = (event) => {
    const updatedSorting = {
      ...sorting,
      order: event.target.value
    };
    changeSorting(updatedSorting);
  }
  
  const onSortFieldChanged = (event) => {
    const updatedSorting = {
      ...sorting,
      field: event.target.value,
    };
    changeSorting(updatedSorting);
  }

  return (
    <Toolbar>
      <TextField
          id="sort-field"
          select
          label="Sort by"
          value={sorting.field}
          onChange={onSortFieldChanged}
      >
        <MenuItem key="timestamp" value="timestamp" >
          Timestamp
        </MenuItem>
        <MenuItem key="voteScore" value="voteScore" >
          Vote Score
        </MenuItem>
      </TextField>

      <TextField
          id="sort-order"
          select
          label="Sort order"
          value={sorting.order}
          onChange={onSortOrderChanged}
      >
        <MenuItem key="ASC" value="ASC" >
          Ascending
        </MenuItem>
        <MenuItem key="DSC" value="DSC" >
          Descending
        </MenuItem>
      </TextField>
    </Toolbar>
  );
}

export default SortingToolbar;