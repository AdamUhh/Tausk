//* Styles
import { SidebarContainer } from './SidebarStylings';

//* Components
import SidebarAdd from './SidebarAdd';
import SidebarItems from './SidebarItems/SidebarItems';

//* Hooks, React
import React, { useRef } from 'react'; // remove this

const Sidebar = () => {
    const countref = useRef(0); // remove this
    console.log('Sidebar.js: ' + countref.current++); // remove this

    return (
        <SidebarContainer>
            <SidebarAdd />
            <SidebarItems />
        </SidebarContainer>
    );
};

export default React.memo(Sidebar);
