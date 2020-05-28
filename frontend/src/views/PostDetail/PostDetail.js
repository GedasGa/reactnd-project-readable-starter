import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';

import Comment from '../../components/Comment';
import Voting from '../../components/Voting';

import { getPost, getPostComments, upvoteComment, downvoteComment, upvotePost, downvotePost } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function PostDetails(props) {
  const classes = useStyles();
  const { postId } = props;

  const dispatch = useDispatch();

  const post = useSelector(state => state.posts.filter(post => post.id === postId));
  const comments = useSelector(state => state.comments);

  const handlePostUpvote = (postId) => dispatch(upvotePost(postId));
  const handlePostDownvote = (postId) => dispatch(downvotePost(postId));

  const handleCommentUpvote = (commentId) => dispatch(upvoteComment(commentId));
  const handleCommentDownvote = (commentId) => dispatch(downvoteComment(commentId));

  useEffect(() => {
    dispatch(getPost(postId));
    dispatch(getPostComments(postId));
  }, [postId]);

  return (
    <>
      {post.length && (
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {post[0].title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    by {post[0].author} , {new Date(post.timestamp).toDateString()}
                  </Typography>
                  <Typography variant="subtitle1" color="inherit" paragraph>
                    {post[0].body}
                  </Typography>
                  <Voting color="inherit"
                    id={post[0].id}
                    voteScore={post[0].voteScore}
                    handleUpvote={handlePostUpvote}
                    handleDownvote={handlePostDownvote}
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
      )}
      
      <List>
        {comments.length ? comments.map((comment) => (
            <Comment key={comment.id} comment={comment} handleUpvote={handleCommentUpvote} handleDownvote={handleCommentDownvote} />
        )) : 'No comments'}
      </List>
    </>
  );
  
  

}

export default PostDetails;