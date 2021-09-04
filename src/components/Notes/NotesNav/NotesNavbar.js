//* Styles
import { NotesNavContainer } from '../NotesStylings';

//* Components
import NotesGroupName from './NotesGroupName';
import NotesNavOptions from './NotesNavOptions';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG

const NotesNavbar = ({ notesLayout, setNotesLayout }) => {
    const countref = useRef(0); // remove this
    console.log('NotesNavbar.js: ' + countref.current++); // remove this
    return (
        <NotesNavContainer>
            <NotesGroupName />
            <NotesNavOptions
                notesLayout={notesLayout}
                setNotesLayout={setNotesLayout}
            />
        </NotesNavContainer>
    );
};

export default NotesNavbar;
