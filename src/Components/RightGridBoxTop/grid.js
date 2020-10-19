import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import "./styles.css";
import logo from "../../Media/createLogo.png";
import Email from "../../WebsiteBuilder/email";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, media: {
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

export default function FullWidthGrid() {
  const classes = useStyles();


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ margin: 'auto' }}>

        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={14} > <Card className={classes.root}>
            <CardHeader
              elevation={14}
            
              title="Desgins for you"
              subheader=""
            />
            <CardMedia
              className={classes.media}
              image={logo}
              title="The Middle Space"
            />
            <CardContent style={{ margin: 'auto' }}>
              <Typography variant="body2" color="textSecondary" component="p">
                Web development isn't always easy , in fact it's often very confusing.
                Our aim with “The Middle Space” is to create a way for every community to find their voice,
                regardless of size or budget. Having worked passionately within the special
                needs and Waldorf community for over a decade,
                we aim to inspire many more to find their digital voice.
        </Typography>
            </CardContent>
            <CardActions style={{ margin: 'auto' }}>
              <Grid item xs={12} style={{ margin: 'auto' }}>
                <Email/>
              </Grid>
            </CardActions>

          </Card></Paper>
        </Grid>




      </Grid>
    </div>
  );
}