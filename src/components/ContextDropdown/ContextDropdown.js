//* Styles

//* Components
import { IconButton } from '../global/ExportedStylings';

//* Hooks, React
import { useComponentVisible } from '../../hooks/useComponentVisible';
import React, { useRef } from 'react';
import {
    ContextParentContainer,
    ContextPortalContainer,
} from './ContextStylings';
//* Styled

const ContextDropdown = ({
    icon,
    text,
    textMargin,
    stayOpen,
    width,
    height,
    padding,
    margin,
    radius,
    transparent,
    parentWidth,
    children,
}) => {
    const countref = useRef(0); // remove this
    console.log('ContextDropdown.js: ' + countref.current++); // remove this

    const { dropdownRef, isComponentVisible, handleClick, coords } =
        useComponentVisible(stayOpen);

    return (
        <ContextParentContainer ref={dropdownRef} parentWidth={parentWidth}>
            <IconButton
                margin={margin}
                width={width}
                height={height}
                padding={padding}
                radius={radius}
                transparent={transparent}
                onClick={handleClick}
            >
                {icon} <span style={{ margin: `${textMargin}` }}>{text}</span>
            </IconButton>

            {isComponentVisible && (
                <ContextPortalContainer yPos={coords.Y}>
                    {children}
                </ContextPortalContainer>
            )}
        </ContextParentContainer>
    );
};

export default React.memo(ContextDropdown);

ContextDropdown.defaultProps = {
    stayOpen: false,
    text: '',
    textMargin: '0',
    width: '25px',
    height: '25px',
    padding: '2px',
    margin: '0',
    radius: '50%',
    transparent: false,
    parentWidth: 'auto',
};
