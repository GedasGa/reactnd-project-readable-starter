import React from 'react';
import { useSelector } from 'react-redux';
import { useParams,} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Post from '../../components/Post';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

function Root() {
  const categories = useSelector(state => state.counter);
  const posts = useSelector(state => state.posts);

  let { category } = useParams();

  return (
    <main>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </Grid>
    </main>
  );
}

export default Root;