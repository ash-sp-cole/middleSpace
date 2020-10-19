import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Email() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Contact us
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send us an email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To find out more about how we can help you, regardless of budget. Drop  a quick email with a little about your situation.
            <br></br>
            <br></br>
            We look forward to hearing from you.
          </DialogContentText>
          <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="What shall we call you?"
          multiline
          variant="outlined"
          autoFocus
          style={{width:'100%'}}
        />
         <br></br>
            <br></br>
          <TextField
          id="outlined-textarea"
          label="Quick Thoughts"
          placeholder="What can we help you with?"
          multiline
          variant="outlined"
          style={{width:'100%'}}
        />
         <br></br>
            <br></br>
          <TextField
            
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            send it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}