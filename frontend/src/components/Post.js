import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
  }
});

function Post(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={`by ${post.author}`}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
                by {post.author}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {new Date(post.timestamp).toDateString()}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.body}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Link to={`${post.category}/${post.id}`}>Continue reading...</Link>
              </Typography>
            </CardContent>
          </div>
          <CardActions disableSpacing>
            <IconButton aria-label="vote up">
              <ThumbUpIcon />
            </IconButton>
            <Typography variant="subtitle1" color="textSecondary">
              {post.voteScore}
            </Typography>
            <IconButton aria-label="vote down">
              <ThumbDownIcon />
            </IconButton>
            <IconButton
              className={classes.expand}
            >
              <CommentIcon />
              {post.commentCount}
            </IconButton>
          </CardActions>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default Post;