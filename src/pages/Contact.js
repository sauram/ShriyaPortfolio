import ContactCss from './Contact.module.css';
import ContactPageImage from './../assets/images/ShriyaIITD.jpg'
import { Heading, Text } from '@react-spectrum/text';
import { SocialMediaHandleText } from '../SocialMediaHandles';
const Contact = ({isActive}) => (
    <div className={`${ContactCss.container} ${isActive ? ContactCss.active : ''}`}>
        <img className={`${ContactCss.containerImage}`} src={ ContactPageImage } alt='Shriya' />
        <div className={`${ContactCss.containerContent}`}>
            <Heading UNSAFE_className={ContactCss.heading}>
                Contact me.
            </Heading>
            <Text UNSAFE_className={ContactCss.text}>
                shriyagrover99(at)gmail(dot)com
            </Text>

            <SocialMediaHandleText />
        </div>
    </div>
);
export default Contact;