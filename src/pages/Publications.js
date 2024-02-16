import { Heading, Text } from '@react-spectrum/text';
import PublicationCss from './Publications.module.css'
const Publications = ({isActive}) => (
    <div className={`${PublicationCss.container} ${isActive ? PublicationCss.active : ''}`}>
        <Heading UNSAFE_className={ PublicationCss.primaryHeading }>
            Working papers and papers under review
        </Heading>
        <Text UNSAFE_className= { PublicationCss.text }>
            1. <span>Grover, S.</span> and Doyle, L.E. Advanced electrode materials for microbial extracellular electron transfer. Trends in Chemistry <span>(Cell Press) (invited; accepted.) [Impact factor: 15.7]</span>
        </Text>
        <Text UNSAFE_className= { PublicationCss.text }>
            2. <span>Grover, S.</span> Yedla, A. Sarkar, S. and Doyle, L.E. Conductive polymer electrode integration to amplify current output of Shewanella oneidensis.
        </Text>
    </div>
);
export default Publications;