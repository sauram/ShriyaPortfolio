import { Heading, Text } from "@react-spectrum/text";
import PortfolioIntroCss from './PortFolioIntro.module.css';
import { Flex } from "@react-spectrum/layout";
const PortFolioIntro = () => (
    <Flex direction="column" justifyContent="center" alignItems="center" flex="1">
        <Heading level={2} UNSAFE_className={ PortfolioIntroCss.heading }>
            Hey, this is Shriya Grover, a researcher in biology using 
            electromicrobiology to tackle problems in the field of 
            sustainable energy production. 
        </Heading>
        <Text UNSAFE_className={ PortfolioIntroCss.text }>
            I'm a PhD candidate at the Department of 
            Biochemical Engineering and Biotechnology, 
            where my dissertation involves enhancing electron 
            transfer between electroactive microorganisms 
            and electrodes.
        </Text>
    </Flex>
);

export default PortFolioIntro;