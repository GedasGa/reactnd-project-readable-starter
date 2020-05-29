import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import Voting from './Voting';
import EditDelete from './EditDelete';
import AddEditPostDialog from './Dialogs/AddEditPostDialog';

const useStyles = makeStyles({
  cardDetails: {
    flex: 1,
  },
  left: {
    marginLeft: 'auto',
  }
});

function Post(props) {
  const classes = useStyles();
  const { post, handleUpvote, handleDownvote, handleUpdatePost, handleDeletePost } = props;

  const [updatePostOpen, setUpdatePostOpen] = React.useState(false);

  const handleClickOpenUpdatePost = () => setUpdatePostOpen(true);
  const handleCloseUpdatePost = () => setUpdatePostOpen(false);

  return (
    <>
      <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={post.title}
              subheader={`by ${post.author} , ${new Date(post.timestamp).toDateString()}`}
              action={
                <EditDelete
                  id={post.id}
                  handleEdit={handleClickOpenUpdatePost}
                  handleDelete={handleDeletePost}
                />
              }
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
              <Voting 
                id={post.id}
                voteScore={post.voteScore}
                handleUpvote={handleUpvote}
                handleDownvote={handleDownvote}
              />
              <IconButton
                className={classes.left}
                onClick={() => props.history.push(`${post.category}/${post.id}`)}
              >
                {post.commentCount}
                <CommentIcon />
              </IconButton>
            </CardActions>
          </Card>
      </Grid>
      {updatePostOpen && (
        <AddEditPostDialog 
          isEdit={true}
          post={post}
          handleClose={handleCloseUpdatePost}
          handleSubmit={handleUpdatePost}
          open={updatePostOpen}
        />
      )}
    </>
  );
}

export default withRouter(Post);