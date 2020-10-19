import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import "./styles.css";
import LeftGridMainBox from '../LeftGridMainBox';
import RightGridBoxTop from '../RightGridBoxTop';
import RightGridBoxBottom from '../RightGridBoxBottom';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto'

  },
  header: {
    marginTop: '1%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto'
  },
  middle: {

  },
  display: {

  }
}));




export default function SimpleContainer() {

  const classes = useStyles();

  const handleLanguageChange = () =>{
    console.log("Deutsch")
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>

          <Grid item xs={12} style={{ mariginTop: '20%', opacity: '0.6' }}>
            <Paper className={classes.paper} style={{ borderRadius: '25px' }} className={classes.header} elevation={14}><Header /></Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={14} style={{ height: '100%', borderRadius: '25px', opacity: '0.99' }}><LeftGridMainBox /> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}
            style={{ margin: 'auto' }}
          >
            <Paper className={classes.paper} elevation={14}
              style={{ borderRadius: '25px', opacity: '0.9' }}
            ><RightGridBoxTop /></Paper>
            <br></br>
            <Paper className={classes.paper} elevation={14}
              style={{ borderRadius: '25px', opacity: '0.9' }}
            ><RightGridBoxBottom /></Paper>
          </Grid>
          <Grid item xs={12}
            style={{ opacity: '0.8' }}
          >
            <Paper
              className={classes.paper} className={classes.header}
              elevation={10}
              style={{ borderRadius: '15px' }}
            >


              2020 All Rights Reserver - The Middle Space -
<Fab variant="extended" style={{ marginLeft: '9%' }} >
                <CopyrightIcon className={classes.extendedIcon} style={{ margin: 'auto' }} />


              </Fab>
              <Fab variant="extended" style={{ marginLeft: '1%' }} 
              onClick={handleLanguageChange}
              >
               
                Deutsch

              </Fab>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}