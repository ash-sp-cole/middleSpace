import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { init } from 'emailjs-com';
import emailjs from "emailjs-com";
init("user_GCxOxnSXR9pFWVfEN7OLA");




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Email(props) {
  const [open, setOpen] = React.useState(false);

 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailSend = (event) => {
    event.preventDefault();
    const emailValue = document.getElementById("email").value
    const nameValue = document.getElementById("name").value
    const contentValue = document.getElementById("message").value






    if (nameValue != "" & emailValue != "") {

      let data = {

        email: emailValue,
        name: nameValue,
        content: contentValue

      }

      emailjs.send('default_service', 'template_94yxg39', data)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("your request has been sent , thank you")
          handleClose()
        }, function (error) {
          console.log('FAILED...', error);
        });

    }

    else {
      alert("please check your submission for errors , name and email must be filled out")
    }
  }


  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Contact us
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">Send us an email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To find out more about how we can help you, regardless of budget! Drop  a quick email with a little about your situation.
            <br></br>
            <br></br>
            <strong >   Please state which package you are interested in.  </strong>
            We look forward to hearing from you.
          </DialogContentText>

          <TextField

            id="name"
            placeholder="Your full name"
            multiline
            variant="outlined"
            autoFocus
            style={{ width: '100%' }}
          />
          <br></br>
          <br></br>
          <TextField
            id="message"
            label="Thoughts and wishes"
            placeholder="What can we help you with?"
            multiline
            variant="outlined"
            style={{ width: '100%' }}
          />
          <br></br>
          <br></br>
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="submit" color="primary">
            Cancel
          </Button>
          <Button onClick={handleEmailSend} color="primary">
            send it
          </Button>

        </DialogActions>

      </Dialog>
    </div>
  );
}