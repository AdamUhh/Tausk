import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconButton = styled.div`
    min-width: ${({ width }) => (width ? width : '40px')};
    max-width: ${({ width }) => (width ? width : '40px')};
    min-height: ${({ height }) => (height ? height : '40px')};
    max-height: ${({ height }) => (height ? height : '40px')};
    background-color: ${({ theme, transparent }) =>
        transparent ? 'rgba(0, 0, 0, 0)' : theme.global.iconButton};
    border-radius: ${({ radius }) => (radius ? radius : '50%')};
    padding: ${({ padding }) => (padding ? padding : '2px')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    z-index: 1;
    cursor: pointer;

    & span {
        margin: ${({ margin }) => (margin ? margin : '0')};
    }
    @media (max-width: 600px) {
        & span {
            display: none;
        }
    }

    ${({ exit }) =>
        exit
            ? `
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: transparent;
    
        &:hover svg {
            stroke: maroon;
        }
    `
            : `
    &:hover {
        filter: brightness(1.2);
        svg {
            ${({ transparent }) =>
                transparent &&
                `
            stroke: gray;
            `}
        }   
    }
    `}
`;

export const IconButtonLink = styled(Link)`
    min-width: ${({ width }) => (width ? width : '40px')};
    max-width: ${({ width }) => (width ? width : '40px')};
    min-height: ${({ height }) => (height ? height : '40px')};
    max-height: ${({ height }) => (height ? height : '40px')};
    background-color: ${({ theme, transparent }) =>
        transparent ? 'rgba(0, 0, 0, 0)' : theme.global.iconButton};
    border-radius: ${({ radius }) => (radius ? radius : '50%')};
    padding: ${({ padding }) => (padding ? padding : '2px')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms;
    z-index: 1;
    cursor: pointer;

    ${({ exit }) =>
        exit
            ? `
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
    
        &:hover svg {
            stroke: maroon;
        }
    `
            : `
    &:hover {
        filter: brightness(1.2);
        svg {
            ${({ transparent }) =>
                transparent &&
                `
            stroke: gray;
            `}
        }   
    }
    `}
`;

export const TextWrapper = styled.p`
    display: flex;
    line-height: 1.3em;
    max-height: 1.3em;
    overflow: hidden;
    word-break: break-word;
`;
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: ${({ minHeight }) => minHeight || '40px'};
    max-height: 60px;
    overflow: hidden auto;
    padding: ${({ padding }) => padding || ' 10px 0'};
    word-break: break-word;
    width: ${({ width }) => width || '100%'};
    font-size: ${({ fontSize }) => fontSize || '1em'};
    cursor: context-menu;

    &:hover ${TextWrapper} {
        max-height: unset;
        align-self: start;
    }
`;

export const LowerContainer = styled.div`
    display: flex;
    max-height: var(--navDifference);
`;
export const SideContainers = styled.div`
    display: flex;
    z-index: 10;
    @media (max-width: 600px) {
        position: absolute;
        width: ${({ hideSide, hasSidebar }) =>
            hideSide
                ? '0'
                : hasSidebar
                ? '100vw'
                : 'var(--collectionsbarWidth)'};
        overflow: hidden;
        transition: width 0.3s;
    }
`;
export const SidebarParentContainer = styled.div`
    overflow: hidden;
    @media (min-width: 601px) {
        width: ${({ hideSide }) => (hideSide ? 0 : 'var(--sidebarWidth)')};
        transition: width 0.3s;
    }
`;

export const MainParentContainer = styled.div`
    width: 100%;
    overflow: hidden;
    height: var(--navDifference);
`;
