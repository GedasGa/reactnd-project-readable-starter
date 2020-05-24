import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Post from '../../components/Post';

import { upvotePost, downvotePost } from '../../actions/index';

function Root(props) {
  const { filter } = props;

  const dispatch = useDispatch();

  const categories = useSelector(state => state.counter);
  const posts = useSelector(state => state.posts);
  console.log(posts);

  const handleUpvote = (postId) => dispatch(upvotePost(postId));
  const handleDownvote = (postId) => dispatch(downvotePost(postId));

  return (
    <main>
      <Grid container spacing={4}>
        {posts.filter(post => !filter || post.category === filter)
        .map((post) => (
          <Post key={post.id} post={post} handleUpvote={handleUpvote} handleDownvote={handleDownvote} />
        ))}
      </Grid>
    </main>
  );
}

export default Root;