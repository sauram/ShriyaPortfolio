import portfolioImage from './assets/images/Emma.jpg'
import PortfolioImageCss from './PortFolioImage.module.css';

const PortFolioImage = () => (
    <img className={`${PortfolioImageCss.image}`} src={ portfolioImage } alt='Portfolio'/>
);

export default PortFolioImage;