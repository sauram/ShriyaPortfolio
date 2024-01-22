import { Footer } from '@react-spectrum/view'
import FooterComponentCSS from './FooterComponent.module.css'
const FooterComponent = () => (
    <Footer UNSAFE_className={ FooterComponentCSS.footer }>&copy; All rights reserved.</Footer>
);

export default FooterComponent;