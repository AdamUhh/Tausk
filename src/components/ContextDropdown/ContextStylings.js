import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const scaleAnim = keyframes`
    0% {transform: scale(0)}
    75% {transform: scale(1)}
`;

export const ContextParentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative; //Todo: This might break stuff
    width: ${({ parentWidth }) => parentWidth};
`;

export const ContextDropdownContainer = styled.div`
    /* position: fixed; */
    top: 30px;
    display: flex;
    flex-direction: column;
    padding: ${({ padding }) => padding || '10px'};
    border-radius: var(--mediumRadius);
    background-color: ${({ theme }) => theme.context.context};
    box-shadow: ${({ theme }) => theme.context.boxShadow};
    cursor: pointer;
    z-index: 10;

    transform-origin: top right;
    animation: ${scaleAnim} 0.3s;
`;

export const ContextItemWrapperLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: ${({ padding }) => padding || '10px'};
    width: ${({ width }) => width || '200px'};
    background-color: ${({ theme, selected }) =>
        selected ? theme.context.contextItemSelected : theme.context.context};
    border-radius: var(--mediumRadius);
    color: ${({ theme }) => theme.global.color};

    &:hover {
        background-color: ${({ theme }) => theme.context.contextItemHover};
    }
`;

export const ContextItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ padding }) => padding || '10px'};
    width: ${({ width }) => width || '200px'};
    background-color: ${({ theme, selected }) =>
        selected ? theme.context.contextItemSelected : theme.context.context};
    border-radius: var(--mediumRadius);

    &:hover {
        background-color: ${({ theme }) => theme.context.contextItemHover};
    }
`;

export const ContextPortalContainer = styled.div`
    position: fixed;
    top: calc(${({ yPos }) => yPos}px);
    left: calc(${({ xPos }) => xPos}px + 10px);
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`;
