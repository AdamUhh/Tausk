import ReactDOM from 'react-dom';
import React, { useRef } from 'react';

const Portal = (props) => {
    const countref = useRef(0); // remove this
    console.log('Portal.js: ' + countref.current++); // remove this
    return ReactDOM.createPortal(props.children, document.body);
};

export default React.memo(Portal);
