//* Components
import ModalController from '../Modal/ModalController';
import Main from '../global/Main';
import NotesHome from './NotesHome';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG

const Notes = () => {
    const countref = useRef(0); // remove this
    console.log('Notes.js: ' + countref.current++); // remove this

    return (
        <>
            <ModalController />
            <Main title='Notes' hasSidebar>
                <NotesHome />
            </Main>
        </>
    );
};

export default Notes;
