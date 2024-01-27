import NavigationComponent from "./NavigationComponent";
import ContentComponentCss from './ContentComponent.module.css';
import Introduction from "./Introduction";
import { Route, Routes, useLocation } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Research from './pages/Research';
import Publications  from './pages/Publications';
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";
const titles = {
    '/': 'Shriya Grover',
    '/about': 'About | Shriya Grover',
    '/research':'Research | Shriya Grover',
    '/contact':'Contact | Shriya Grover',
    '/publications':'Publication | Shriya Grover',
    '/cv':'CV | Shriya Grover'
  }
const ContentComponent = ({ isActive, toggleState }) => {
    const location=useLocation();
    useEffect(
        () => {
            (document.title = titles[location.pathname] ?? 'Shriya Grover')
        },
        [location],
    )
    return (
        <>
        <Routes>
            <Route path="/" element={ <Introduction isActive={isActive} /> } />
            <Route path="/about" element={ <About isActive={isActive} /> } />
            <Route path="/cv" element={ <CV isActive={isActive} /> } />
            <Route path="/contact" element={ <Contact isActive={isActive} /> } />
            <Route path="/research" element={ <Research isActive={isActive} /> } />
            <Route path="/publications" element= { <Publications isActive={isActive} /> } />
            <Route path="*" element={ <PageNotFound isActive={isActive} /> } />
        </Routes>
        <div className={`${ContentComponentCss.content} ${isActive ? ContentComponentCss.active : ''}`}>
            <NavigationComponent isActive={isActive} toggleState={ toggleState }/>
        </div>
        </>
    )
};

export default ContentComponent;