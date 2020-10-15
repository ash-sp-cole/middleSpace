import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeBanner from "../HomeBanner";
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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import ExploreIcon from '@material-ui/icons/Explore';
import logo from "../../Media/logo.png";


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
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}> <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  M
          </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="The Middle Space"
              subheader="Desgins for you"
            />
            <CardMedia
              className={classes.media}
              image={logo}
              title="The Middle Space"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Web development isn't always easy , in fact it's often very confusing.
               Our aim with “The Middle Space” is to create a way for every community to find their voice,
                regardless of size or budget. Having worked passionately within the special 
                needs and Waldorf community for over a decade, 
              we aim to inspire many more to find their digital voice.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                Web development isn't always easy , in fact it's often very confusing. Our aim with “The Middle Space” is to create a way for every community to find their voice, regardless of size or budget. Having worked passionately within the special needs and Waldorf community for over a decade, we aim to inspire many more to find their digital voice.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card></Paper>
        </Grid>

      
        <Grid item xs={12} sm={6} style={{margin:'auto'}}>
        <Fab variant="extended" color="primary" style={{marginRight:'10%'}}>
            <ExploreIcon className={classes.extendedIcon} />
        Explore

      </Fab>
     
          <Fab variant="extended" color="secondary">
            <NavigationIcon className={classes.extendedIcon} />
        Create
      </Fab>

        </Grid>
       
      </Grid>
    </div>
  );
}