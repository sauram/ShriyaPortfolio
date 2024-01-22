import { Flex } from '@react-spectrum/layout';
import { Heading } from '@react-spectrum/text';
import { PortFolioName } from './Constant';
import NavigationComponent from './NavigationComponent';
import SocialMediaHandles from './SocialMediaHandles';
import NavigationComponentCSS from './NavigationComponent.module.css'
const HeaderComponent = ({ isActive, toggleState }) => {
    return (
        <nav className={ NavigationComponentCSS.navbar }>
            <Flex
            direction="row"
            gap="size-250"
            alignItems="center"
            justifyContent="space-between"
            >
                
                <Heading level={1} UNSAFE_className={ NavigationComponentCSS.heading }>
                    { PortFolioName }
                </Heading>
                <div className={ `${NavigationComponentCSS.navMenuWrapper}` }>
                    <NavigationComponent isActive={ isActive } setActive= { toggleState } />
                </div>
                <div className={ `${NavigationComponentCSS.socialMediaHandle}`}>
                    <SocialMediaHandles />
                </div>
                <div className={`${NavigationComponentCSS.hamburger} ${isActive ? NavigationComponentCSS.active : ''}`}  onClick={() => toggleState(isActive)}>
                    <span className={`${NavigationComponentCSS.bar}`}></span>
                    <span className={`${NavigationComponentCSS.bar}`}></span>
                </div>
            </Flex>
        </nav>
    )

}

export default HeaderComponent;