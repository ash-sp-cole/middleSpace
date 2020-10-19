import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MissionBanner from "../../Media/aboutImage.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import homeModal from "../../Media/introLeft.png";
import ButtonBase from "@material-ui/core/ButtonBase";


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
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MissionModal() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button
        style={{
          marginTop: '-20%'
        }}
        variant="contained"
        color="secondary"

        onClick={handleClickOpen}
      >
        our mission
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
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
              <Typography variant="body2" color="textSecondary" component="p">

                Life changes fast and within two minutes you “Google” how far technology has developed
                in the past month , let alone past year. Not every company has time to catch up or
                begin figuring out what the best options are. At “The Middle Space” our aim is simple
                . We strive to be a true non-profit creation platform. A place where regardless of budget
                communities and businesses can find a meaningful digital presence.
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
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}