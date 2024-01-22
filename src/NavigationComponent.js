import NavigationComponentCss from './NavigationComponent.module.css';

const NavigationComponent = ({isActive, toggleState}) => {
    return (
        // <nav className={`${NavigationComponentCss.navbar}`}>

          <ul className={`${NavigationComponentCss.navMenu}`}>
            <li onClick={() => toggleState(isActive)}>
              <a href='#home' className={`${NavigationComponentCss.navLink}`}>About</a>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <a href='#home' className={`${NavigationComponentCss.navLink}`}>Research</a>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <a href='#home' className={`${NavigationComponentCss.navLink}`}>CV</a>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <a href='#home' className={`${NavigationComponentCss.navLink}`}>Publications</a>
            </li>
            <li onClick={() => toggleState(isActive)}>
              <a href='#home' className={`${NavigationComponentCss.navLink}`}>Contact</a>
            </li>
          </ul>


        
        // </nav>
    )
};

export default NavigationComponent;