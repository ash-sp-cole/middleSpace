import { Typography } from '@material-ui/core';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import HomeScreen from "../../Media/homeScreen.JPG";
import "./styles.css";

const HomeBanner = () => {

    return (
        <div id="homeBanner">

            <AwesomeSlider>
                <div >
                    <Typography variant="h4" component="h4" gutterBottom style={{marginTop:'-20%'}}>
                        Responsive Websites for every community
                         </Typography>

                </div>
                <div><img src={HomeScreen}></img></div>
                <div><img src={HomeScreen}></img></div>
                <div><img src={HomeScreen}></img></div>
                <div><img src={HomeScreen}></img></div>
                <div><img src={HomeScreen}></img></div>

            </AwesomeSlider>

        </div>
    )
}


export default HomeBanner;

