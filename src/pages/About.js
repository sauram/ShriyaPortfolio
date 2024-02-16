import { Text } from '@react-spectrum/text';
import AboutCss from './About.module.css';
const About = ({isActive}) => (
    <div className={`${AboutCss.container} ${isActive ? AboutCss.active : ''}`}>
        <Text>
            Welcome! I'm Shriya, a Delhi native with a passion for exploring the intersections of 
            biology and chemistry. My educational journey began at Queen Mary's School, shaping the 
            foundation for my Bachelor's degree in Life Sciences at Hansraj College. Delving into 
            the core principles of biology and chemistry during my undergraduate years laid the 
            groundwork for my future pursuits.
        </Text>
        <br/>
        <Text>
            Following my academic journey, I achieved a notable All India Rank of 23 in the IIT JAM exam, 
            leading me to pursue a Master's degree in Biotechnology at IIT Roorkee. Here, I delved into 
            the practical applications of biotechnology, focusing on the intricate challenge of 
            Antimicrobial Resistance. My master's project employed a combination of experimental and 
            computational methods to address the growing issue of bacterial resistance.
        </Text>
        <br/>
        <Text>
            As I immersed myself in this project, a profound interest in research emerged, steering 
            me towards a Ph.D. opportunity. Currently, I am part of the electromicrobiology group at 
            IIT Delhi, where our lab is dedicated to the study of electroactive bacteria. These 
            microorganisms exhibit potential in diverse areas, from current production to the 4
            synthesis of commodity chemicals and wastewater treatment.
        </Text>
        <br/>
        <Text>
            Join me on this exciting journey as we explore the fascinating world of electromicrobiology and 
            uncover innovative solutions for real-world challenges
        </Text>
        <br/>
    </div>
);

export default About;