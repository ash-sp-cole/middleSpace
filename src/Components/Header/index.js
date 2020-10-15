import React from "react";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import logo from "../../Media/logo.png";
const Header = () => {

    return (


        <div>
            <img src={logo}
                style={{
                        height:'50ch',
                        width:'50ch'

                }}
            
            ></img>
        </div>

    )

}


export default Header;