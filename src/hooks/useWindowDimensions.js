import { useState, useEffect } from 'react';
import { useRef } from 'react'; // remove this
function getWindowDimensions(n) {
    const { innerWidth: width } = window;
    // return {
    //     width,
    //     height,
    // };

    // * Changed return to only say whether its in mobile view or not
    if (width <= 850)
        return {
            isMobileView: true,
        };
    else
        return {
            isMobileView: false,
        };
}

export default function useWindowDimensions() {
    const countref = useRef(0); // remove this
    console.log('useWindowDimensions.js: ' + countref.current++); // remove this
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
