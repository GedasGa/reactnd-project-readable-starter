import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Post from '../../components/Post';
import AddEditPostDialog from '../../components/Dialogs/AddEditPostDialog';

import { upvotePost, downvotePost, addPost, updatePost, deletePost } from '../../actions/index';

function Root(props) {
  const dispatch = useDispatch();

  const { filter } = props;

  const [open, setOpen] = React.useState(false);

  const categories = useSelector(state => state.categories);
  const posts = useSelector(state => state.posts);

  const handleUpvote = (postId) => dispatch(upvotePost(postId));
  const handleDownvote = (postId) => dispatch(downvotePost(postId));

  const handleAddPost = (postId, title, body, author, category) => dispatch(addPost(postId, title, body, author, category));
  const handleUpdatePost = (postId, title, body) => dispatch(updatePost(postId, title, body));
  const handleDeletePost = (postId) => dispatch(deletePost(postId));

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <main>
      <Grid container spacing={4}>
        {posts.filter(post => !filter || post.category === filter)
        .map((post) => (
          <Post 
            key={post.id} 
            post={post} 
            handleUpvote={handleUpvote} 
            handleDownvote={handleDownvote} 
            handleUpdatePost={handleUpdatePost}
            handleDeletePost={handleDeletePost}
          />
        ))}
        <Grid alignContent="flex-end" item xs={12} md={6}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add a new post
          </Button>
        </Grid>
      </Grid>
      {open && (
        <AddEditPostDialog 
          isEdit={false}
          categories={categories}
          handleClose={handleClose}
          handleSubmit={handleAddPost}
          open={open}
        />
      )}
    </main>
  );
}

export default Root;