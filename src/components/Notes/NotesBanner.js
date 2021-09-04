//* Styles
import {
    NotesBannerContainer,
    NotesBannerHeader,
    NotesBannerFooter,
} from './NotesStylings';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG

const NotesBanner = ({ mode }) => {
    const countref = useRef(0); // remove this
    console.log('NotesBanner.js: ' + countref.current++); // remove this
    if (mode === 'hasNoCards')
        return (
            <NotesBannerContainer>
                <NotesBannerHeader>A Group!</NotesBannerHeader>
                <NotesBannerFooter>
                    Now try adding a Card and then a Task
                </NotesBannerFooter>
            </NotesBannerContainer>
        );
    if (mode === 'notSelected')
        return (
            <NotesBannerContainer>
                <NotesBannerHeader>Nothing to see here... 🕵️‍♂️</NotesBannerHeader>
                <NotesBannerFooter>
                    Seems like you need to click a Group
                </NotesBannerFooter>
            </NotesBannerContainer>
        );
    if (mode === 'folderOnly')
        return (
            <NotesBannerContainer>
                <NotesBannerHeader>A stray Folder!</NotesBannerHeader>
                <NotesBannerFooter>
                    Why not give it a companion... Like a Group!
                </NotesBannerFooter>
            </NotesBannerContainer>
        );
    if (mode === 'empty')
        return (
            <NotesBannerContainer>
                <NotesBannerHeader>Seems Empty...</NotesBannerHeader>
                <NotesBannerFooter>So... How's your day been?</NotesBannerFooter>
            </NotesBannerContainer>
        );

    if (mode === 'error')
        return (
            <NotesBannerContainer>
                <NotesBannerHeader>Oops...</NotesBannerHeader>
                <NotesBannerFooter>
                    Seems like that doesn't exist 🤷‍♂️
                </NotesBannerFooter>
            </NotesBannerContainer>
        );
    // return <NotesBannerContainer></NotesBannerContainer>;
};

export default NotesBanner;
