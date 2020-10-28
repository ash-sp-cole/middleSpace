import React, { useState } from 'react';
import homeImage from "../../Media/introLeft.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import imageMenu from "../../Media/imageMenu.png";
import aboutImage from "../../Media/aboutImage.png";
import {
  Dialog, DialogTitle, Divider, DialogContentText, DialogContent, CardHeader,
  Card, Typography, DialogActions, IconButton, CardContent, CardActions
} from "@material-ui/core";
import ImageGrid from "./ImageGrid";
import TwitterIcon from '@material-ui/icons/Twitter';
import ImageGridLastStand from "./ImageGridLastStand";
import MissionBanner from "../../Media/aboutImage.png";
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from "@material-ui/core/Tooltip";
import MediaCard from "./whoWeAreModal";




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
  
}));

const MenuPropDisplay = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  let value = props.MenuArray;





  if (value === 0) return (
    <div>
      <Button onClick={handleClickOpen}>
        <Tooltip title="Take a peek" placement="top" arrow>
          <img src={imageMenu} />
        </Tooltip>
      </Button>
      <Button
        variant="contained"
        color="primary"

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
                Helping your buisness find its path online, whether your an established company or a grass roots movement. Creating an online
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
          

            </CardActions>

          </Card>


          <br></br>


        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>




















    </div>
  )





  else if (value === 2) {
    return (
      <div>

        <Button onClick={handleClickOpen}>
          <Tooltip title="About us" placement="top" arrow>
            <img src={aboutImage} />
          </Tooltip>
        </Button> 

        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{
            marginTop: '-20%'
          }}
        >
          Who we are
          </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
         
          <DialogContent>
          <Divider/>
          
        <MediaCard/>
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




  else return (
    <div>
      <Button onClick={handleClickOpen}>
      <Tooltip title="What we're passionate about " placement="top" arrow>
        <img src={homeImage} />
        </Tooltip>
      </Button>
      <Button
        style={{
          marginTop: '-20%'
        }}
        variant="contained"
        color="primary"

        onClick={handleClickOpen}
      >
        our mission
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">{"The Middle Space"}</DialogTitle>
        <DialogContent>
          <Card className={classes.root} elevation={7}>
            <CardHeader

              title="Our Mission"
              subheader="finding your voice"
            />
            <CardMedia
              className={classes.media}
              image={MissionBanner}
              title="The Middle Space"
            />
            <CardContent>
            <Typography variant="h6" gutterBottom style={{margin:'auto'}}>
            Life changes fast 
      </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom style={{
                marginTop: '2%', marginBottom: '2%'
              }}>
                  Anybody with a quick Google search can see how far technology has developed
                in the past month , let alone the past year. Not every company has time to catch up or
                begin figuring out what the best options are.<br></br>
      </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
            
                <Divider style={{
                  marginTop: '2%', marginBottom: '2%'
                }}
                />
               At <strong>  The Middle Space  </strong>our aim is simple
                . We strive to be a true <strong> non-profit </strong> creation platform. A place where <strong> regardless of budget </strong>
                communities and businesses can find a meaningful digital presence.
        </Typography>
         
            </CardContent>
            <CardActions disableSpacing>
              <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noreferrer">
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
              </a>
             

            </CardActions>

          </Card>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MenuPropDisplay;