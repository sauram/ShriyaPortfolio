import React from "react";
import { Grid } from '@react-spectrum/layout';
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ConentComponent";
import FooterComponent from "./FooterComponent";
import { useState } from "react";
import SocialMediaHandles from "./SocialMediaHandles";
import SocialMediaHandlesCss from "./SocialMediaHandles.module.css";

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
            minHeight="100dvh"
            rows={['size-2000', 'auto', 'size-1000']}
            UNSAFE_style={ {
                fontFamily: '"Raleway", "Source Sans Pro"',
                backgroundColor:'cornsilk'
            }}
        >
            <HeaderComponent isActive={ isActive } toggleState={ toggleState } gridArea='header'/>
            <ContentComponent isActive={ isActive } toggleState={ toggleState } gridArea='content'/>
            <FooterComponent isActive={ isActive } gridArea='footer'/>
            <div className={`${SocialMediaHandlesCss.handles} ${isActive ? SocialMediaHandlesCss.active : ''}`}>
                <SocialMediaHandles isActive={ isActive }/>
            </div>
            
        </Grid>
    )
};

export default Layout;