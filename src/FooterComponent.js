import { Footer } from '@react-spectrum/view'
import FooterComponentCss from './FooterComponent.module.css'
const FooterComponent = ({isActive}) => (
    <Footer UNSAFE_className={ `${FooterComponentCss.footer} ${isActive ? FooterComponentCss.active : ''}` }>&copy; All rights reserved.</Footer>
);

export default FooterComponent;