import React from "react";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import logo from "../../Media/logo.png";
const Header = () => {

    return (


        <div>
            <img id="logo" src={logo}
                style={{
                        maxHeight:'60ch',
                      maxWidth:'65ch'

                }}
            
            ></img>
        </div>

    )

}


export default Header;