import { useState } from "react";
import classNames from 'classnames'
import NavigationComponentCss from './NavigationComponent.module.css';

const NavigationComponent = () => {
    const [isActive, setActive] = useState('false');
    return (
        <nav className={ NavigationComponentCss.navBar}>
            <ul className={ classNames([
                NavigationComponentCss.navMenu,
                isActive? NavigationComponentCss.active: "",
            ])}>
                <li onClick={ () => setActive(false)}>
                    About
                </li>
                <li onClick={ () => setActive(false)}>
                    Research
                </li>
                <li onClick={ () => setActive(false)}>
                    CV
                </li>
                <li onClick={ () => setActive(false)}>
                    Publications
                </li>
                <li onClick={ () => setActive(false)}>
                    Contact
                </li>
            </ul>
            <div 
            className={classNames([
                NavigationComponentCss.hamburger,
                isActive? NavigationComponentCss.active: ""
            ])} 
            onClick={ () => setActive(true)}
            >
                <span className={ NavigationComponentCss.bar}></span>
                <span className={ NavigationComponentCss.bar}></span>
                <span className={ NavigationComponentCss.bar}></span>
            </div>
        </nav>
    )
};

export default NavigationComponent;