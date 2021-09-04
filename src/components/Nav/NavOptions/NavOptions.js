//* Styles
import { NavOptionsContainer } from '../NavStylings';

//* SVG
import CogIcon from '../../SVG/CogIcon';
import NotificationIcon from '../../SVG/NotificationIcon';

//* Components
import ContextDropdown from '../../ContextDropdown/ContextDropdown';
import ContextSettings from '../../ContextDropdown/CustomContextDropdowns/ContextSettings';

//* Hooks, React
import React, { useRef } from 'react'; // remove this

//* Styled

const NavOptions = () => {
    const countref = useRef(0); // remove this
    console.log('NavOptions.js: ' + countref.current++); // remove this

    return (
        <NavOptionsContainer>
            {/* <ContextDropdown
                icon={<NotificationIcon />}
                margin='0 5px 0 0'
            ></ContextDropdown> */}
            <ContextDropdown icon={<CogIcon />}>
                <ContextSettings />
            </ContextDropdown>
        </NavOptionsContainer>
    );
};

export default React.memo(NavOptions);
