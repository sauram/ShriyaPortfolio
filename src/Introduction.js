import ContentComponentCss from './ContentComponent.module.css';
import PortFolioImage from "./PortFolioImage";
import PortFolioIntro from "./PortFolioIntro";
const Introduction = ({isActive}) => (
    <div className={`${ContentComponentCss.container} ${isActive ? ContentComponentCss.active : ''}`} style={{margin:0}}>
        <PortFolioImage />
        <PortFolioIntro />
    </div>
);

export default Introduction;