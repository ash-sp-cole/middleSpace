import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuPropDisplay from './menuPropDisplay';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Tooltip from '@material-ui/core/Tooltip';





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