import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
const RightGridBoxBottom = () =>{
    return(
        <div>
           <Typography variant="h5" gutterBottom>
            Easy to use custom built Frameworks 
      </Typography> 
      <IconButton aria-label="delete">
  <TwitterIcon />
</IconButton><IconButton aria-label="delete">
  <GitHubIcon />
</IconButton>
        </div>
    )
}

export default RightGridBoxBottom;