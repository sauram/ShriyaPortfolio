import { Heading, Text } from '@react-spectrum/text';
import { Link } from '@react-spectrum/link';
import PublicationCss from './Publications.module.css'
const Publications = ({isActive}) => (
    <div className={`${PublicationCss.container} ${isActive ? PublicationCss.active : ''}`}>
        <Heading UNSAFE_className={ PublicationCss.primaryHeading }>
            Working papers and papers under review
        </Heading>
        <Text UNSAFE_className= { PublicationCss.text }>
            1. <span>Grover, S.</span> and Doyle, L.E. Advanced electrode materials for microbial extracellular electron transfer. Trends in Chemistry <span>(Cell Press) (In Press) [Impact factor: 15.7]</span> <Link rel='noreferrer' href="https://doi.org/10.1016/j.trechm.2024.01.005" target='_blank'>(Click here to read)</Link>
        </Text>
        <Text UNSAFE_className= { PublicationCss.text }>
            2. <span>Grover, S.</span> Yedla, A. Sarkar, S. and Doyle, L.E. Conductive polymer electrode integration to amplify current output of Shewanella oneidensis.(in preparation)
        </Text>
    </div>
);
export default Publications;