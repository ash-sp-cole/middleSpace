import React from "react";
import Button from "@material-ui/core/Button";
import { Typography, Paper } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FullWidthGrid from "./grid";
import voiceImage from "../../Media/voice.png";
import Grid from "@material-ui/core/Grid";



const RightGridBoxTop = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={3}>
     
        <Grid item xs={12}>


          <img src={voiceImage}
            style={{
              height:'auto',
              width:'70%',
              margin: 'auto'
            }}
          />

        </Grid>
        <Grid item xs={12}>

          <Button variant="contained" color="secondary" onClick={handleClickOpen}
          style={{marginTop:'-20%'}}
          >
            Learn more
</Button>


        </Grid>
     
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" It's our aim to help you represent yourself, no matter the budget"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FullWidthGrid />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default RightGridBoxTop;