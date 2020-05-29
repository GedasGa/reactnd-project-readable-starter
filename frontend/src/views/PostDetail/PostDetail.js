import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import Error from '../Error/Error';
import Comment from '../../components/Comment';
import Voting from '../../components/Voting';
import EditDelete from '../../components/EditDelete';
import AddEditCommentDialog from '../../components/Dialogs/AddEditCommentDialog';
import AddEditPostDialog from '../../components/Dialogs/AddEditPostDialog';

import { 
  getPost, 
  getPostComments, 
  upvoteComment, 
  downvoteComment, 
  upvotePost,
  downvotePost,
  updatePost, 
  deletePost,
  addComment,
  updateComment,
  deleteComment,
} from '../../actions/index';

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
  const dispatch = useDispatch();

  const { postId } = props;

  const [open, setOpen] = React.useState(false);
  const [updatePostOpen, setUpdatePostOpen] = React.useState(false);

  const post = useSelector(state => state.posts.filter(post => post.id === postId));
  const comments = useSelector(state => state.comments);

  const handleUpdatePost = (postId, title, body) => dispatch(updatePost(postId, title, body));
  const handleDeletePost = (postId) => dispatch(deletePost(postId));
  const handlePostUpvote = (postId) => dispatch(upvotePost(postId));
  const handlePostDownvote = (postId) => dispatch(downvotePost(postId));

  const handleAddComment = (commentId, author, body, postId) => dispatch(addComment(commentId, author, body, postId));
  const handleUpdateComment = (commentId, body) => dispatch(updateComment(commentId, body));
  const handleDeleteComment = (commentId) => dispatch(deleteComment(commentId));
  const handleCommentUpvote = (commentId) => dispatch(upvoteComment(commentId));
  const handleCommentDownvote = (commentId) => dispatch(downvoteComment(commentId));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickOpenUpdatePost = () => setUpdatePostOpen(true);
  const handleCloseUpdatePost = () => setUpdatePostOpen(false);

  useEffect(() => {
    if(postId) {
      dispatch(getPost(postId));
      dispatch(getPostComments(postId));
    }
  }, [postId, dispatch]);

  if (!post.length) {
    return (<Error />);
  }

  return (
    <>
      {post.length && (
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <Grid container justify='space-between'>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {post[0].title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    by {post[0].author}, {new Date(post[0].timestamp).toDateString()}
                  </Typography>
                  <Typography variant="subtitle1" color="inherit" paragraph>
                    {post[0].body}
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} style={{display: 'flex'}}>
                <Voting 
                      id={postId}
                      voteScore={post[0].voteScore}
                      handleUpvote={handlePostUpvote}
                      handleDownvote={handlePostDownvote}
                    />
                <EditDelete
                    id={postId}
                    handleEdit={handleClickOpenUpdatePost}
                    handleDelete={handleDeletePost}
                  />
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton>
                      {post[0].commentCount}
                      <CommentIcon />
                    </IconButton>
                  </div>
              </Grid>
            </Grid>
          </Paper>
      )}
      
      <List>
        {comments.length ? comments.map((comment) => (
            <Comment 
              key={comment.id} 
              comment={comment} 
              postId={postId}
              handleUpvote={handleCommentUpvote} 
              handleDownvote={handleCommentDownvote}
              handleUpdateComment={handleUpdateComment}
              handleDeleteComment={handleDeleteComment}
            />
        )) : 'No comments'}
      </List>

      <Grid item md={12}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add a new comment
        </Button>
      </Grid>

      {open && (
        <AddEditCommentDialog 
          isEdit={false}
          postId={postId}
          handleClose={handleClose}
          handleSubmit={handleAddComment}
          open={open}
        />
      )}

      {updatePostOpen && (
        <AddEditPostDialog 
          isEdit={true}
          post={post[0]}
          handleClose={handleCloseUpdatePost}
          handleSubmit={handleUpdatePost}
          open={updatePostOpen}
        />
      )}
    </>
  );
  
  

}

export default PostDetails;