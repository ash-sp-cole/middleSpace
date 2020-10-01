import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Home from "../../Media/homeScreen.JPG";
import WorldMap from "../../Media/worldResponse.JPG";
import InfoModal from "../../Media/infoMenu.JPG";
import RudolfModal from "../../Media/rudolfModal.JPG";
import WorldModal from "../../Media/worldModal.JPG";

class CenterBoxHome extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            style={{
              height: "500px",
          
              margin: 'auto'
            }}
            src={Home}
            alt="error"
            >
              
            </img>

        </div>
        <div>
          <img
            style={{
              height: "500px",

              margin: 'auto'
            }}
            src={WorldMap}
            alt="error"></img>

        </div>
        <div>
          <img
            style={{
              height: "500px",
              margin: 'auto'
            }}
            src={WorldModal}
            alt="error"></img>

        </div>
        <div>
          <img
            style={{
              height: "500px",
              margin: 'auto'
            }}
            src={RudolfModal}
            alt="error"></img>

        </div>

        <div>
          <img
            style={{
              height: "500px",
              margin: 'auto'
            }}
            src={InfoModal}
            alt="error"></img>

        </div>


      </Slider>
    );
  }
}

export default CenterBoxHome;