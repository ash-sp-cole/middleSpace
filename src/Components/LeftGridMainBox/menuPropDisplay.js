import React from "react";
import homeImage from "../../Media/introLeft.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ImageIcon from '@material-ui/icons/Image';
import imageMenu from "../../Media/imageMenu.png";
import aboutImage from "../../Media/aboutImage.png";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const MenuPropDisplay = (props) =>{
    const classes = useStyles();

    let value = props.MenuArray;




    if(value === 0) return (
        <div>
        <img src={imageMenu}/>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        style={{
            marginTop:'-20%'
        }}
      >
       View our work
      </Button>
      </div>
    )





    else if (value === 2 ){
        return (
            <div>
            <img src={aboutImage}/>
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{
                marginTop:'-20%'
            }}
          >
           Who we are
          </Button>
          </div>
        )
    }




    else return (
        <div>
        <img src={homeImage}/>
        <Button
        style={{
            marginTop:'-20%'
        }}
        variant="contained"
        color="secondary"
        className={classes.button}
     
      >
       our mission
      </Button>
      </div>
    )
}

export default MenuPropDisplay;