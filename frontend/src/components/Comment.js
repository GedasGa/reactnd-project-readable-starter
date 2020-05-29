import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Voting from './Voting';
import AddEditCommentDialog from './Dialogs/AddEditCommentDialog';
import EditDelete from './EditDelete';

function Comment(props) {
  const { comment, postId, handleUpvote, handleDownvote, handleUpdateComment, handleDeleteComment } = props;

  const [updatePostOpen, setUpdatePostOpen] = React.useState(false);

  const handleClickOpenUpdatePost = () => setUpdatePostOpen(true);
  const handleCloseUpdatePost = () => setUpdatePostOpen(false);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={comment.author} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.author}
          secondary={comment.body}
        />
        <ListItemSecondaryAction style={{display: 'flex'}}>
          <Voting 
            id={comment.id}
            voteScore={comment.voteScore}
            handleUpvote={handleUpvote}
            handleDownvote={handleDownvote}
          />
          <EditDelete
            id={comment.id}
            handleEdit={handleClickOpenUpdatePost}
            handleDelete={handleDeleteComment}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      {updatePostOpen && (
        <AddEditCommentDialog 
          isEdit={true}
          comment={comment}
          postId={postId}
          handleClose={handleCloseUpdatePost}
          handleSubmit={handleUpdateComment}
          open={updatePostOpen}
        />
      )}
    </>
  );
}


export default Comment;