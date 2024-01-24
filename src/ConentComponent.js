import NavigationComponent from "./NavigationComponent";
import ContentComponentCss from './ContentComponent.module.css';
import PortFolioImage from "./PortFolioImage";
import PortFolioIntro from "./PortFolioIntro";
const ContentComponent = ({ isActive, toggleState }) => {
    return (
        <>
        {!isActive && (
            <div className={`${ContentComponentCss.container}`} style={{margin:0}}>
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