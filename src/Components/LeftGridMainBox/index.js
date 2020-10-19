import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuPropDisplay from './menuPropDisplay';
import { Menu } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
  root: {
   width:'auto',
   height:'100%'
  },
});



class SimpleBottomNavigation extends React.Component {

state={
  value:1
  
}

  
  render (){
  
   

  

    let displayPanel;

   const handleMenuChange = (newMenu) =>{
     this.setState({
       value : newMenu
     })
     

  }

  return (
    <div>
    <MenuPropDisplay MenuArray={this.state.value}/>
 

    <BottomNavigation
     
      onChange={(event, newValue) => {
        handleMenuChange(newValue);
      
      }}
      showLabels
      
     
    >
       <Tooltip title="Gallery" placement="top" arrow>
      <BottomNavigationAction label="" icon={<ImageIcon/>} />
      </Tooltip>
      <Tooltip title="Home" placement="top" arrow>
      <BottomNavigationAction label="" icon={<FavoriteIcon />} />
      </Tooltip>
      <Tooltip title="About us" placement="top" arrow>
      <BottomNavigationAction label="" icon={<AccountBoxIcon />} />
      </Tooltip>
    </BottomNavigation>
    </div>
  );
}
}

export default SimpleBottomNavigation;