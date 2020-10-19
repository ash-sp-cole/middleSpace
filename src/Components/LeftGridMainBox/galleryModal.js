import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageGrid from "./ImageGrid";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import ImageGridLastStand from "./ImageGridLastStand";
import Divider from "@material-ui/core/Divider";
import galleryModal from "../../Media/imageMenu.png";
import { ButtonBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: '5%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    // 16:9
  },
  card: {
    margin: 'auto',
    width: '85%'


  },


  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));




export default function GalleryModal(props) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };






  return (
    <div>

      <Button
        variant="contained"
        color="secondary"

        onClick={handleClickOpen}
        style={{
          marginTop: '-20%'
        }}
      >
        View our work
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title">{"Responsive desgins , custom built for you"}</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The Middle Space is commited to creating a responsive, quick and meaningful WebApp for your community.

          </DialogContentText>

          <Card className={classes.card} elevation={5} >
            <CardHeader

              title="Anthroposophical Movement"
              subheader="Beta - all rights reserved - 2020"
            />
            <br></br>
            <ImageGrid />
            <CardHeader

            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Having spent over a decade involved in both the Anthroposophic and Waldorf movement,
                I have a deep passsion for helping our communties find thier voice online.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
              </a>

            </CardActions>

          </Card>

          <br></br>

          <Card className={classes.card} elevation={5}  >
            <CardHeader

              title="Local Businesses"
              subheader="Your personal touch online"
            />
            <br></br>
            <ImageGridLastStand />
            <CardHeader

            />
            <CardContent>

              <Typography variant="body2" color="textSecondary" component="p" >
                Helping you buisness find its path online, whether your an established company or a grass roots movement. Creating an online
             presence can help you find a larger voice.<br></br>
             Within just a few months , sites like these can greatly improve sales, brand connection and understanding of your mission.


        </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
              </a>

            </CardActions>

          </Card>


          <br></br>
          {/* <Paper elevation={14}>
          <Card className={classes.card}>
            <CardHeader

              title="Local Businesses"
              subheader="Your personal touch online"
            />
            <ImageGridLastStand/>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Web development isn't always easy , in fact it's often very confusing. 
              Our aim with “The Middle Space” is to create a way for every community to find their voice,
               regardless of size or budget. Having worked passionately within the special needs
                and Waldorf community for over a decade,
               we aim to inspire many more to find their digital voice.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
              </a>
       
            </CardActions>
          
          </Card>
          </Paper>
        */}


        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}