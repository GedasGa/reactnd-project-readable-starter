import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles({
  card: {
    // display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  left: {
    marginLeft: 'auto',
  }
});

function Post(props) {
  const classes = useStyles();
  const { post, handleUpvote, handleDownvote } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <CardHeader
            title={post.title}
            subheader={`by ${post.author} , ${new Date(post.timestamp).toDateString()}`}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="subtitle1" paragraph>
                {post.body}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Link to={`${post.category}/${post.id}`}>Continue reading...</Link>
              </Typography>
            </CardContent>
          </div>
          <CardActions disableSpacing>
            <IconButton 
              aria-label="vote up"
              onClick={() => handleUpvote(post.id)}
            >
              <ThumbUpIcon />
            </IconButton>
            <Typography variant="subtitle1" color="textSecondary">
              {post.voteScore}
            </Typography>
            <IconButton 
              aria-label="vote down"
              onClick={() => handleDownvote(post.id)}
            >
              <ThumbDownIcon />
            </IconButton>
            <IconButton
              className={classes.left}
            >
              <CommentIcon />
            </IconButton>
            <Typography variant="subtitle1" color="textSecondary">
              {post.commentCount}
            </Typography>
          </CardActions>
        </Card>
    </Grid>
  );
}

export default Post;