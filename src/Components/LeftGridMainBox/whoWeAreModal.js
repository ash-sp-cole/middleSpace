import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import self from "../../Media/self.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={self}
          title="Ash Cole"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Developers commited to change.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Web development isn't always easy , in fact it's often very confusing.
            Our aim with <strong>  The Middle Space </strong> is to create a way for every community to find their voice,
            regardless of size or budget. Having worked passionately within the special needs
            and Waldorf community for over a decade,
            we aim to inspire many more to find  <strong>their digital voice. </strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://www.linkedin.com/in/ash-cole-web" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="delete">
            <LinkedInIcon />
          </IconButton>
        </a>

      </CardActions>
    </Card>
  );
}
