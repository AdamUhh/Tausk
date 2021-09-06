//* Styles
import {
    NotesMainContainer,
    NotesNavContainer,
    NotesWrapper,
} from './NotesStylings';

//* Components
import NotesMain from './NotesMain';
import NotesNavbar from './NotesNav/NotesNavbar';

//* Hooks, React
import { useRef } from 'react'; // remove this
import React, { useState } from 'react'; // remove this
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotesBanner from './NotesBanner';

//* SVG

export const ListLayout = 'List';
export const BoxedListLayout = 'Boxed List';
export const DetailedLayout = 'Detailed';
export const BoxedDetailedLayout = 'Boxed Detailed';

const NotesHome = () => {
    const countref = useRef(0); // remove this
    console.log('NotesHome.js: ' + countref.current++); // remove this

    const [notesLayout, setNotesLayout] = useState(
        localStorage.getItem('NotesLayout') || DetailedLayout
    );

    const { folderidurl, groupidurl } = useParams();
    const folderState = useSelector((state) => state.notesDuck.folders);

    if (folderState['SkeletonFolder']) {
        return (
            <>
                <NotesNavContainer>
                    <div className='skeleton skeleton-notes-nav'></div>
                    <div className='skeleton skeleton-notes-nav-options'></div>
                </NotesNavContainer>
                <NotesMainContainer>
                    <NotesWrapper>
                        <div className='skeleton skeleton-notes-card'></div>
                        <div className='skeleton skeleton-notes-task'></div>
                        <div className='skeleton skeleton-notes-card'></div>
                        <div className='skeleton skeleton-notes-task'></div>
                    </NotesWrapper>
                </NotesMainContainer>
            </>
        );
    }

    return (
        <>
            {folderidurl &&
                groupidurl &&
                folderState[folderidurl]?.hasGroups[groupidurl] && (
                    <NotesNavbar
                        notesLayout={notesLayout}
                        setNotesLayout={setNotesLayout}
                    />
                )}
            <NotesMainContainer>
                {folderState[folderidurl] &&
                folderState[folderidurl].hasGroups[groupidurl] &&
                Object.keys(
                    folderState[folderidurl].hasGroups[groupidurl].hasCards
                ).length < 1 ? (
                    <NotesBanner mode='hasNoCards' />
                ) : folderState[folderidurl] &&
                  folderState[folderidurl].hasGroups[groupidurl] ? (
                    <NotesMain
                        notesLayout={notesLayout}
                        cardOrder={
                            folderState[folderidurl]?.hasGroups[groupidurl]
                                .cardOrder
                        }
                        hasCards={
                            folderState[folderidurl]?.hasGroups[groupidurl]
                                .hasCards
                        }
                    />
                ) : folderidurl && !groupidurl && folderState[folderidurl] ? (
                    <NotesBanner mode='folderOnly' />
                ) : folderidurl && !groupidurl && !folderState[folderidurl] ? (
                    <NotesBanner mode='error' />
                ) : folderidurl &&
                  groupidurl &&
                  !folderState[folderidurl]?.hasGroups[groupidurl] ? (
                    <NotesBanner mode='error' />
                ) : (
                    <NotesBanner mode='empty' />
                )}
            </NotesMainContainer>
        </>
    );
};

export default React.memo(NotesHome);
