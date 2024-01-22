import React from "react";
import { Grid } from '@react-spectrum/layout';
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ConentComponent";
import FooterComponent from "./FooterComponent";
import { useState } from "react";
import SocialMediaHandles from "./SocialMediaHandles";

const Layout = () => {
    const [isActive, setActive] = useState(false);
    const toggleState = (isActive) => {
        setActive(!isActive);
    }
    return (
        <Grid
            areas={[
                'header',
                'content',
                'footer'
            ]}
            rows={['size-2000', 'auto', 'size-1000']}
            height="100vh"
            UNSAFE_style={ {
                fontFamily: '"Raleway", "Source Sans Pro"',
            }}
        >
            <HeaderComponent isActive={ isActive } toggleState={ toggleState } gridArea='header'/>
            <ContentComponent isActive={ isActive } toggleState={ toggleState } gridArea='content'/>
            {!isActive && <FooterComponent gridArea='footer'/> }
            { isActive && <SocialMediaHandles />}
        </Grid>
    )
};

export default Layout;