import styled, { css, keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react'; // remove this

const fadeAnimation = keyframes`
    0% {
        opacity: 0; 
        transform: translate(-50%, -150%); 
    }
    50% {
        transform: translate(-50%, 80%); 
        
    }
    100% {
        opacity: 1;

    }
`;
const shakeAnimation = keyframes`
    0% {
        transform: translate(-50%, 50%); 
    }
    33% {
        transform: translate(-60%, 50%); 
    }
    66% {
        transform: translate(-40%, 50%); 
    }
`;

const Container = styled.div`
    letter-spacing: 0.02em;
    position: fixed;
    top: ${({ top }) => top || '-30%'};
    left: 50%;
    min-width: 300px;
    text-align: center;

    transform: translate(-50%, 50%);
    animation: ${({ shake, alreadyShown }) =>
        shake && alreadyShown
            ? css`
                  ${shakeAnimation} 0.6s
              `
            : !alreadyShown &&
              css`
                  ${fadeAnimation} 0.6s;
              `};

    transform-origin: top center;
    background-color: #be6c75;
    box-shadow: 0 3px 9px 0px #404040;
    padding: 15px;
    border-radius: 10px;
    z-index: 1000;
`;
const AlertToaster = ({ msg, shake, top }) => {
    const countref = useRef(0); // remove this
    console.log('AlertToaster.js: ' + countref.current++); // remove this

    const [alreadyShown, setAlreadyShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAlreadyShown(true);
        }, 600);
    }, []);

    return (
        // <Portal>
        <Container shake={shake} alreadyShown={alreadyShown} top={top}>
            {msg}
        </Container>
        // </Portal>
    );
};

export default React.memo(AlertToaster);
