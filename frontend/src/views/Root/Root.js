import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Post from '../../components/Post';
import AddEditPostDialog from '../../components/Dialogs/AddEditPostDialog';
import SortingToolbar from '../../components/SortingToolbar';

import { upvotePost, downvotePost, addPost, updatePost, deletePost } from '../../actions/index';

function Root(props) {
  const dispatch = useDispatch();
  const { filter } = props;

  const [addPostOpen, setAddPostOpen] = React.useState(false);
  const [sorting, setSorting] = React.useState({
    field: 'timestamp',
    order: 'ASC'
  });

  const categories = useSelector(state => state.categories);
  const posts = useSelector(state => state.posts);

  const handleAddPost = (postId, title, body, author, category) => dispatch(addPost(postId, title, body, author, category));
  const handleUpdatePost = (postId, title, body) => dispatch(updatePost(postId, title, body));
  const handleDeletePost = (postId) => dispatch(deletePost(postId));
  const handleUpvote = (postId) => dispatch(upvotePost(postId));
  const handleDownvote = (postId) => dispatch(downvotePost(postId));

  const handleClickOpenAddPost = () => setAddPostOpen(true);
  const handleCloseAddPost = () => setAddPostOpen(false);
  const handleSortingChange = (sorting) => setSorting(sorting);

  return (
    <main>
      <SortingToolbar
        sorting={sorting}
        changeSorting={handleSortingChange}
      />
      <Grid container spacing={4}>
        {posts.filter(post => !filter || post.category === filter)
        .sort((a, b) => sorting.order === 'ASC' ? a[sorting.field] - b[sorting.field] : b[sorting.field] - a[sorting.field])
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
        <Grid item md={12}>
          <Button variant="outlined" color="primary" onClick={handleClickOpenAddPost}>
            Add a new post
          </Button>
        </Grid>
      </Grid>
      {addPostOpen && (
        <AddEditPostDialog 
          isEdit={false}
          categories={categories}
          handleClose={handleCloseAddPost}
          handleSubmit={handleAddPost}
          open={addPostOpen}
        />
      )}
    </main>
  );
}

export default Root;