import { Heading, Text } from "@react-spectrum/text";
import PortfolioIntroCss from './PortFolioIntro.module.css';
import { Flex } from "@react-spectrum/layout";
const PortFolioIntro = () => (
    <Flex direction="column" justifyContent="center" alignItems="center" flex="1">
        <Heading level={2} UNSAFE_className={ PortfolioIntroCss.heading }>
            Hi, my name is Shriya and I use data science and 
            causal inference methods to tackle public health 
            challenges.
        </Heading>
        <Text UNSAFE_className={ PortfolioIntroCss.text }>
            I'm a PhD candidate at Boston University School of Public Health.
            My dissertation uses machine learning and causal inference methods
            to predict and explain suicide-related outcomes among U.S. Veterans.
        </Text>
    </Flex>
);

export default PortFolioIntro;