import React from "react";
import "fontsource-roboto";
import logo from "../../Media/logo.png";
const Header = () => {

    return (


        <div>
            <img id="logo" alt="logo" src={logo}
                style={{
                        maxHeight:'60ch',
                      maxWidth:'65ch'

                }}
            
            ></img>
        </div>

    )

}


export default Header;