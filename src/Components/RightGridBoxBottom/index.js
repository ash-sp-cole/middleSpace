import React from "react";
import { Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
const RightGridBoxBottom = () =>{
    return(
        <div>
           <Typography variant="h5" gutterBottom>
            A True <strong> non-profit </strong> creation platform
      </Typography> 
      <a href="https://twitter.com/TheMiddleSpace1" target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="delete">
  <TwitterIcon />
</IconButton>
</a>
<a href="https://github.com/ash-sp-cole" target="_blank" rel="noopener noreferrer">
<IconButton aria-label="delete">
  <GitHubIcon />
</IconButton>
</a>

        </div>
    )
}

export default RightGridBoxBottom;