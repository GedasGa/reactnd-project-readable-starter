import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { getPost, getPostComments } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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

  useEffect(() => {
    dispatch(getPost(postId));
    dispatch(getPostComments(postId));
  }, [postId]);

  return post.length && (
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
            <Link variant="subtitle1" href="#">
              {post[0].body}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PostDetails;