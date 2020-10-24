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
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TestGrid from "./testGrid";


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
        <Tooltip title="Click me" placement="top" arrow>
          <Button    style={{ backgroundColor: 'transparent' }}onClick={handleClickOpen} >
          <img src={voiceImage}
            style={{
              height:'auto',
              width:'70%',
              margin: 'auto'
            }}
          />
        </Button>
        </Tooltip>
        </Grid>
        <Grid item xs={12}>

          <Button variant="contained" color="secondary" onClick={handleClickOpen}
          style={{marginTop:'-20%'}}
          >
            Create your site
</Button>


        </Grid>
     
      </Grid>
      <Dialog
        open={open}
          maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" It's our aim to help you represent yourself, no matter the budget"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TestGrid/>
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