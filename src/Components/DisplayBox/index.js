import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React from "react";
import homeScreen from "../../Media/homeScreen.JPG";
import Button from "@material-ui/core/Button";

import "./style.css"; 




const DisplayBox = () => {
  return (
    <AwesomeSlider>

      <div id="slide1">
        <Button variant="contained" color="secondary">
          Secondary
</Button>
      </div>


      <div id="slide2">
        <Button variant="contained" color="secondary">
          Secondary
</Button>
      </div>


      <div id="slide3">
        <Button variant="contained" color="secondary">
          Secondary
</Button>
      </div>


      <div id="slide4">
        <Button variant="contained" color="secondary">
          Secondary
</Button>
      </div>


    </AwesomeSlider>
  )
};

export default DisplayBox;