import styled from 'styled-components';
import { BoxedListLayout, BoxedDetailedLayout } from './NotesHome';

export const NotesNavContainer = styled.div`
    min-height: var(--navHeight);
    background-color: ${({ theme }) => theme.notes.nav.nav};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const NotesEditGroupNameContainer = styled.div`
    display: none;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid white;
`;
export const NotesGroupNameContainer = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 2;
    max-width: 90%;
    margin-right: 5px;

    &:hover ${NotesEditGroupNameContainer} {
        display: block;
    }
`;

export const NotesNavOptionsContainer = styled.div`
    display: flex;
`;

export const NotesMainContainer = styled.div`
    margin: 10px 0 0 0;
    max-height: calc(100% - var(--navHeight) - 20px);
    height: 100%;
    overflow: hidden auto;
`;

export const NotesWrapper = styled.div`
    max-height: calc(100% - var(--navHeight));
    padding: 0 10px;

    @media (min-width: 601px) {
        ${({ notesLayout }) =>
            (notesLayout === BoxedListLayout ||
                notesLayout === BoxedDetailedLayout) &&
            `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        grid-template-rows: max-content;
        grid-gap: 10px;
        `};
    }
`;

export const NotesCardContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }
`;
export const NotesCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -1px;
        width: calc(100% - 5px);
        border-bottom: 1px solid ${({ theme }) => theme.notes.card};
    }
`;

export const NotesCardTitleContainer = styled.div`
    background-color: ${({ theme }) => theme.notes.card};
    min-width: 70%;
    max-width: 70%;
    border-radius: var(--smallRadius);
    align-self: flex-start;
`;
export const NotesCardOptionsContainer = styled.div`
    display: flex;
    cursor: pointer;
    height: 100%;
    align-self: flex-end;
`;

export const NotesTaskContainer = styled.div`
    /* max-height: 300px; */
    overflow: hidden auto;
    max-height: ${({ cardidurl }) =>
        cardidurl ? 'calc(100vh - 135px)' : '300px'};
    /* border-top: 1px solid ${({ theme }) => theme.notes.card}; */

    ::-webkit-scrollbar {
        //*chrome
        display: none;
    }
    -ms-overflow-style: none; //*IE 11
    scrollbar-width: none; //*Firefox 64

    &:hover {
        ::-webkit-scrollbar {
            display: block;
            background-color: ${({ theme }) => theme.global.iconButton};
        }
        -ms-overflow-style: block; //*IE 11
        scrollbar-width: block; //*Firefox 64
    }
`;
export const NotesOptionsContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
`;
export const NotesTaskWrapper = styled.div`
    background-color: ${({ theme }) => theme.notes.task};
    margin-bottom: 2px;
    border-radius: var(--smallRadius);
    padding: 0 10px 10px 10px;
    position: relative;

    & hr {
        width: 60%;
        margin: 0 auto;
        height: 1px;
        border: none;
        background-color: ${({ theme }) => theme.global.color};
    }

    &:hover ${NotesOptionsContainer} {
        display: flex;
    }
`;

export const NotesTitleWrapper = styled.div`
    font-size: 1.5em;
    max-width: 95%;
`;
export const NotesDateWrapper = styled.div`
    letter-spacing: 0.01em;
    font-size: 0.8em;
`;

export const NotesDescContainer = styled.div`
    padding: 5px;
`;
export const NotesDescWrapper = styled.div`
    max-height: ${({ taskidurl }) => (taskidurl ? 'unset' : '150px')};
    overflow: auto;
    word-break: break-word;

    ::-webkit-scrollbar {
        //*chrome
        display: none;
    }
    -ms-overflow-style: none; //*IE 11
    scrollbar-width: none; //*Firefox 64

    &:hover {
        ::-webkit-scrollbar {
            display: block;
        }
        -ms-overflow-style: block; //*IE 11
        scrollbar-width: block; //*Firefox 64
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0.5em 0 0.2em 0;
        margin: 0;
        line-height: 1.5em;
        outline: none;
    }

    & blockquote {
        padding: 10px;
        display: flex;
        flex-direction: column;
        p {
            border: 1px solid rgba(201, 201, 204, 0.48);
            box-shadow: inset 0 1px 2px 0 rgb(35 44 72 / 6%);
            border-radius: 3px;
            padding: 8px 12px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            min-height: 60px;
            margin-bottom: 10px;
        }
        cite {
            border: 1px solid rgba(201, 201, 204, 0.48);
            box-shadow: inset 0 1px 2px 0 rgb(35 44 72 / 6%);
            border-radius: 3px;
            padding: 8px 12px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
        }
    }

    & a {
        text-decoration: underline;
    }
`;

export const NotesBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const NotesBannerHeader = styled.div`
    font-size: 2.3em;
    color: darkgray;
`;
export const NotesBannerFooter = styled.div`
    font-size: 1.3em;
    color: darkgray;
`;
