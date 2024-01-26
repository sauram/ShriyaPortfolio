import { Link } from 'react-router-dom';
import NavigationComponentCss from './NavigationComponent.module.css';

const NavigationComponent = ({isActive, toggleState}) => {
    return (
        // <nav className={`${NavigationComponentCss.navbar}`}>
        <nav>
          <ul className={`${NavigationComponentCss.navMenu}`}>
            <li onClick={() => toggleState(isActive)}>
              <Link to='/about' className={`${NavigationComponentCss.navLink}`}>About</Link>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <Link to='/research' className={`${NavigationComponentCss.navLink}`}>Research</Link>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <Link to='/cv' className={`${NavigationComponentCss.navLink}`}>CV</Link>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <Link to='/publications' className={`${NavigationComponentCss.navLink}`}>Publications</Link>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <Link to='/contact' className={`${NavigationComponentCss.navLink}`}>Contact</Link>
            </li>
          </ul>
        </nav>
    )
};

export default NavigationComponent;