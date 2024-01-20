import React from "react";
import { Grid } from '@react-spectrum/layout';
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ConentComponent";
import FooterComponent from "./FooterComponent";

const Layout = () => (
    <Grid
        areas={[
            'header',
            'content',
            'footer'
        ]}
        rows={['size-1000', 'auto', 'size-1000']}
        height="100vh"
    >
        <HeaderComponent gridArea='header'/>
        <ContentComponent gridArea='content'/>
        <FooterComponent gridArea='footer'/>
    </Grid>
);

export default Layout;