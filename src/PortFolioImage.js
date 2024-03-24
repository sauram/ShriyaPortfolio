import PortfolioImageCss from './PortFolioImage.module.css';

const PortFolioImage = ({ portfolioImage }) => (
    <img className={`${PortfolioImageCss.image}`} src={ portfolioImage } alt='Portfolio'/>
);

export default PortFolioImage;