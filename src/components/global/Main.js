//* Styles
import {
    LowerContainer,
    MainParentContainer,
    SidebarParentContainer,
    SideContainers,
} from './ExportedStylings';

//* Components
import Navbar from '../Nav/Navbar';
import CollectionsBar from '../CollectionsBar/CollectionsBar';
import Sidebar from '../Sidebar/Sidebar';

//* Hooks, React
import { useState } from 'react';
import { useRef } from 'react'; // remove this

//* Styled

const Main = ({ title, hasSidebar, children }) => {

    const countref = useRef(0); // remove this
    console.log('Main.js: ' + countref.current++); // remove this

    const [hideSide, setHideSide] = useState(false);
    function handleHideSide() {
        setHideSide((prev) => !prev);
    }

    return (
        <>
            <Navbar
                title={title}
                handleHideSide={handleHideSide}
            />
            <LowerContainer>
                <SideContainers hideSide={hideSide} hasSidebar={hasSidebar} >
                    <CollectionsBar
                        hasSidebar={hasSidebar}
                        handleHideSide={handleHideSide}
                    />
                    {hasSidebar && (
                        <SidebarParentContainer hideSide={hideSide}>
                            <Sidebar />
                        </SidebarParentContainer>
                    )}
                </SideContainers>
                <MainParentContainer>{children}</MainParentContainer>
            </LowerContainer>
        </>
    );
};

export default Main;

Main.defaultProps = {
    title: 'Error',
    hasSidebar: false,
};
