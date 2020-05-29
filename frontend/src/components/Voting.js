import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

function Voting(props) {
  const classes = useStyles();
  const { id, voteScore, handleUpvote, handleDownvote } = props;

  return (
    <div className={classes.root}>
      <IconButton 
        ria-label="vote up"
        onClick={() => handleUpvote(id)}
      >
        <ThumbUpIcon />
      </IconButton>
      <Typography variant="subtitle1" color="textSecondary">
        {voteScore}
      </Typography>
      <IconButton 
        aria-label="vote down"
        onClick={() => handleDownvote(id)}
      >
        <ThumbDownIcon />
      </IconButton>
    </div>
  );
}

export default Voting;
