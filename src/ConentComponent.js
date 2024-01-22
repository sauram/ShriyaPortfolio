import NavigationComponent from "./NavigationComponent";
const ContentComponent = ({ isActive, toggleState }) => {
    return (
        <>
        {!isActive && (
            <div>
                Content
            </div>
        )}
        {isActive && <NavigationComponent isActive={isActive} toggleState={ toggleState }/>}
        </>
    )
};

export default ContentComponent;