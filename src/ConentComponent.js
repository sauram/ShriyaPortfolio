import NavigationComponent from "./NavigationComponent";
import ContentComponentCss from './ContentComponent.module.css';
import Introduction from "./Introduction";
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Research from './pages/Research';
import Publications  from './pages/Publications';
import PageNotFound from "./pages/PageNotFound";
const ContentComponent = ({ isActive, toggleState }) => {
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