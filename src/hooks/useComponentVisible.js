import { useRef, useState, useEffect } from 'react';

export const useComponentVisible = (
    stayOpen = false,
    initialIsVisible = false,
    onAfter = null
) => {
    const [isComponentVisible, setIsComponentVisible] =
        useState(initialIsVisible);
    const dropdownRef = useRef(null);

    const [coords, setCoords] = useState({ X: '0' });

    const countref = useRef(0); // remove this
    console.log('useComponentVisible: ' + countref.current++); // remove this

    const handleClick = (e) => {
        e.stopPropagation();
        // If its not currently visible
        if (!isComponentVisible) {
            // console.log('!isComponentVisible - handleClick');
            setIsComponentVisible(true);
            setCoords({ Y: e.clientY });
        }
        // When user clicks the button again (to open context) it will instead close the context
        else {
            // console.log('else - handleClick');
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (e) => {
        if (!stayOpen) {
            // console.log('!stayOpen');
            setIsComponentVisible(false);
        } else if (
            isComponentVisible &&
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target)
        ) {
            setIsComponentVisible(false);
            // console.log('else...');
        }

        onAfter && onAfter();
    };

    const handleHideDropdown = (e) => {
        if (e.key === 'Escape') {
            setIsComponentVisible(false);
            onAfter && onAfter();
        }
    };

    useEffect(() => {
        if (isComponentVisible) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleHideDropdown);
        } else return;
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleHideDropdown);
        };
    }, [isComponentVisible === true]);

    return { dropdownRef, isComponentVisible, handleClick, coords };
};
