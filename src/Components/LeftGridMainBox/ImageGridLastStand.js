import React from 'react';
import Gallery from 'react-grid-gallery';
import homeLast from "../../Media/homeLastStand.JPG";
import aboutLast from "../../Media/aboutLastStand.JPG";
import beerLast from "../../Media/beerLastStand.JPG";
import menuLast from "../../Media/menuLastStand.JPG";

const ImageGridLastStand = () =>{

const IMAGES =
[{
        src: homeLast,
        thumbnail: homeLast,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Multi page responsive site for a mid sized restaurant"
},
{
        src: aboutLast,
        thumbnail: aboutLast,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Responsive web design customized together"
     
},

{
        src: beerLast,
        thumbnail: beerLast,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Personal and inviting"
},
{
    src: menuLast,
    thumbnail: menuLast,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Informative and simple"
},



]

return (
    <div>
        <Gallery   images={IMAGES}/>
      
       
        </div>
)
}

export default ImageGridLastStand;