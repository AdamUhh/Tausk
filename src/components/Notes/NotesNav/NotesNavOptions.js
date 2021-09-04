//* Styles
import { NotesNavOptionsContainer } from '../NotesStylings';
import { IconButton } from '../../global/ExportedStylings';

//* Components
import ContextDropdown from '../../ContextDropdown/ContextDropdown';

//* Variables
import { DetailedLayout, BoxedDetailedLayout } from '../NotesHome';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';

//* Redux
import { addCardModal } from '../../../redux/ducks/modalDuck';

//* SVG
import PlusIcon from '../../SVG/PlusIcon';
import LayoutDetailedIcon from '../../SVG/LayoutDetailedIcon';
import LayoutListIcon from '../../SVG/LayoutListIcon';
import ContextLayout from '../../ContextDropdown/CustomContextDropdowns/ContextLayout';

const NotesNavOptions = ({ notesLayout, setNotesLayout }) => {
    const countref = useRef(0); // remove this
    console.log('NotesNavOptions.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const showAddCardModal = () => {
        dispatch(addCardModal());
    };

    return (
        <NotesNavOptionsContainer>
            <IconButton
                width='max-content'
                height='35px'
                radius='8px'
                padding='3px 10px'
                onClick={showAddCardModal}
            >
                <PlusIcon width='25px' height='25px' /> Add Card
            </IconButton>
            <ContextDropdown
                icon={
                    notesLayout === DetailedLayout ||
                    notesLayout === BoxedDetailedLayout ? (
                        <LayoutDetailedIcon width='25px' height='25px' />
                    ) : (
                        <LayoutListIcon width='25px' height='25px' />
                    )
                }
                text={notesLayout}
                textMargin='0 0 0 3px'
                width='max-content'
                height='35px'
                radius='8px'
                padding='3px 10px'
                margin='0 0 0 5px'
            >
                <ContextLayout
                    notesLayout={notesLayout}
                    setNotesLayout={setNotesLayout}
                />
            </ContextDropdown>
        </NotesNavOptionsContainer>
    );
};

export default NotesNavOptions;
