import ContentComponentCss from './ContentComponent.module.css';
import homePageImage from "./assets/images/ShriyaCoolImage.jpg"
import { Heading, Text } from '@react-spectrum/text';
const Introduction = ({isActive}) => (
    <div className={`${ContentComponentCss.container} ${isActive ? ContentComponentCss.active : ''}`} style={{margin:0}}>
        <img className={`${ContentComponentCss.containerImage}`} src={ homePageImage } alt='Portfolio'/>
        <div className={`${ContentComponentCss.containerContent}`}>
            <Heading level={2} UNSAFE_className={ ContentComponentCss.heading }>
                Hey, this is Shriya Grover, a researcher in biology using 
                electromicrobiology to tackle problems in the field of 
                sustainable energy production. 
            </Heading>
            <Text UNSAFE_className={ ContentComponentCss.text }>
                I'm a PhD candidate at the Department of 
                Biochemical Engineering and Biotechnology, 
                where my dissertation involves enhancing electron 
                transfer between electroactive microorganisms 
                and electrodes.
            </Text>
        </div>
    </div>
);

export default Introduction;