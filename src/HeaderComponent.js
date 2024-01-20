import { Flex } from '@react-spectrum/layout';
import { Heading } from '@react-spectrum/text';
import { PortFolioName } from './Constant';
import NavigationComponent from './NavigationComponent';
const HeaderComponent = () => (
    <Flex
        direction="row"
        gap="size-250"
    >
        <Heading>{ PortFolioName }</Heading>
        <NavigationComponent />
    </Flex>
);

export default HeaderComponent;