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
import { Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneIcon from '@material-ui/icons/Done';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import buyLogo from "../../Media/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const TestGrid = () => {


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={7} style={{ borderRadius: '25px' }} >
            <Typography variant="h6" gutterBottom>
              All of our sites are built using the best technology, we exclusively use  <strong> React  </strong>for our front end development. <br></br>This enables us to
                create, <strong> custom , responsive</strong> and <strong> state of the art</strong> websites for you.<br>
              </br>
            </Typography>
            <Typography variant="h9" gutterBottom style={{ marginBottom: '3%' }}>
              To get the business side of things out of the way , these sites would cost thousands of dollars and are worth every penny. <br></br> But if your here, reading this , then you also know here at <strong> The Middle Space</strong>,
                 we are here to help you. So regardless of budget we will find something that works for you. <br></br>

            </Typography>
            <Divider style={{ marginTop: '3%' }}></Divider>
            <Typography variant="subtitle2" gutterBottom style={{ marginTop: '3%' }}>
              For those who can contribute more,  <strong > we will never charge full price , our commitment is to helping those around us. </strong>,So please reach out , and begin a conversation.<br></br>
              Of course due to high demand for our services, we need to make sure that we are a good fit. We prioritize non-profit communities and smaller voices looking to be heard.
            </Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{ height: "100%" }}>
          <Paper style={{ borderRadius: '25px' }} className={classes.paper} elevation={18} > <Card className={classes.root}>
            <CardHeader
              elevation={14}

              title="Donation based"
              subheader="Whatever ever the budget"
            />
            <CardMedia
              className={classes.media}
              image={logo}
              title="The Middle Space"
            />

            <CardContent style={{ margin: 'auto' }}>

              <Typography variant="h6" gutterBottom>
                <Chip
                  icon={<CheckCircleIcon />}
                  label="3 left for November 2020"
                  clickable
                  color="primary"
                  style={{ marginBottom: '2%' }}
                  deleteIcon={<DoneIcon />}
                />
                <br></br>
                Yep , you read that right.
      </Typography>
              <Typography variant="h9" gutterBottom style={{
                marginTop: '2%', marginBottom: '2%'
              }}>
                This tier is for those who feel as though currently they are unable to commit resources to
                creating their online presence.
      </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How can something in this tier be good quality. Well here at <strong> The Middle Space</strong> we believe in helping one another.
              <br></br>
                <Divider style={{
                  marginTop: '2%', marginBottom: '2%'
                }}
                />
              With this tier you still get a state of the art React website , built to your needs and creativity.
                <strong>The average donation is $500
                 </strong>, this is still for a React site, typically costing <strong> $6000+</strong>.
        </Typography>
            </CardContent>
            <CardActions style={{ margin: 'auto' }}>
              <Grid item xs={12} style={{ margin: 'auto' }}>
                <Email />
              </Grid>
            </CardActions>

          </Card></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ borderRadius: '25px' }} className={classes.paper} elevation={18} > <Card className={classes.root}>
            <CardHeader
              elevation={14}

              title="Complete Edition"
              subheader="at a fraction of the cost"
            />

            <CardContent style={{ margin: 'auto' }}>

              <Typography variant="h6" gutterBottom>
                <Chip
                  icon={<OfflinePinIcon />}
                  label="1 left for November 2020"
                  clickable
                  color="primary"
                  style={{ marginBottom: '2%' }}
                  deleteIcon={<DoneIcon />}
                />
                <br></br>
   Fully customized , professional Web App
</Typography>
              <Typography variant="h9" gutterBottom style={{
                marginTop: '2%', marginBottom: '2%'
              }}>
                This is a <strong> professional site </strong > built to your wishes, using <strong> state of the art technology</strong>. 
   To create a truly <strong> responsive </strong> and <strong> eye-catching</strong> web application.
</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Again , our mission is to empower those around us. For you ,this means a web app at a fraction of the cost. Typically an app of this caliber would start <strong> upwards of $8000</strong>.
  Here we charge a standard flat fee of <strong>$1000</strong>. This is a rate that you will literally not find anywhere else. Because of this, demand is high and again we are limited to the quantity of Web Apps that we
  can produce each month.     <br></br>
                <Divider style={{
                  marginTop: '2%', marginBottom: '2%'
                }}
                />
                <strong>If the quota has been met for the current month, please check back or reach out to begin a dialogue for the upcoming block.</strong>
              </Typography>
              <CardMedia
                className={classes.media}
                image={buyLogo}
                title="The Middle Space"
              />
            </CardContent>
            <CardActions style={{ margin: 'auto' }}>
              <Grid item xs={12} style={{ margin: 'auto' }}>
                <Email />
              </Grid>
            </CardActions>

          </Card></Paper>
        </Grid>
        {/* 
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>button here</Paper>
        </Grid> */}

      </Grid>
    </div>
  );
}

export default TestGrid;