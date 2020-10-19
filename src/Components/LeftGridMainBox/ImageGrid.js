import React from 'react';
import Gallery from 'react-grid-gallery';
import HomeScreen from "../../Media/homeScreen.JPG";
import WorldModal from "../../Media/worldModal.JPG";
import WorldMap from "../../Media/worldResponse.JPG";
import RudolfModal from "../../Media/rudolfModal.JPG";

const ImageGrid = () =>{

const IMAGES =
[{
        src: HomeScreen,
        thumbnail: HomeScreen,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Single Page Web App with Custom World map"
},
{
        src: WorldModal,
        thumbnail: WorldModal,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Easy to access all communities within a given region"
     
},
{
    src: RudolfModal,
    thumbnail: RudolfModal,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Responsive and fast"
},

{
        src: WorldMap,
        thumbnail: WorldMap,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Interactive World Map"
},

]

return (
    <div>
        <Gallery images={IMAGES}/>
        
       
        </div>
)
}

export default ImageGrid;