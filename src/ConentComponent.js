import NavigationComponent from "./NavigationComponent";
import ContentComponentCss from './ContentComponent.module.css';
import { Flex } from "@react-spectrum/layout";
import PortFolioImage from "./PortFolioImage";
import PortFolioIntro from "./PortFolioIntro";
const ContentComponent = ({ isActive, toggleState }) => {
    return (
        <>
        {!isActive && (
            <div>
                <PortFolioImage />
                <PortFolioIntro />
            </div>
        )}
        <div className={`${ContentComponentCss.content} ${isActive ? ContentComponentCss.active : ''}`}>
            <NavigationComponent isActive={isActive} toggleState={ toggleState }/>
        </div>
        </>
    )
};

export default ContentComponent;