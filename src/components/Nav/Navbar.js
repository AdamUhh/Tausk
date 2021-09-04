//* Styles
import {
    MenuIconContainerInverse,
    MenuIconContainer,
    NavContainer,
} from './NavStylings';

//* SVG
import MenuIcon from '../SVG/MenuIcon';

//* Components
import SearchBar from './SearchBar/SearchBar';
import NavOptions from './NavOptions/NavOptions';
//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { IconButton } from '../global/ExportedStylings';

const Navbar = ({ title, handleHideSide }) => {
    const countref = useRef(0); // remove this
    console.log('Navbar.js: ' + countref.current++); // remove this

    return (
        <>
            <NavContainer>
                <MenuIconContainer>
                    <IconButton onClick={handleHideSide} transparent>
                        <MenuIcon width='30' />
                    </IconButton>
                </MenuIconContainer>
                <MenuIconContainerInverse>
                    <span
                        style={{
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <p style={{ fontFamily: 'sen, sans-serif' }}>{title}</p>
                    </span>
                </MenuIconContainerInverse>
                <SearchBar />
                <NavOptions />
            </NavContainer>
        </>
    );
};

export default React.memo(Navbar);
