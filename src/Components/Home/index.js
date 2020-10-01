import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import Middle from "../HomeBanner";
import DisplayBanner from '../DisplayBox';
import "./styles.css";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
    
  },
  header:{
    marginTop:'2%'
    
  },
  middle:{
    
  },
  display:{
   
  }
}));




export default function SimpleContainer() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" >
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.header}>
       <Header/>
        </Grid>
        <Grid item xs={12} className={classes.middle} >
          <Paper className={classes.paper}  id="middle"><Middle /></Paper>
        </Grid>
        <Grid item xs={12}className={classes.display}>
          <Paper className={classes.paper}><DisplayBanner/></Paper>
        </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}