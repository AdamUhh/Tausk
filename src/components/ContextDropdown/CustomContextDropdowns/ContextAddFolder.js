//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
} from '../ContextStylings';
import { IconButton } from '../../global/ExportedStylings';

//* Redux
import { addFolderModal } from '../../../redux/ducks/modalDuck';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';

//* SVG
import FolderIcon from '../../SVG/FolderIcon';

const ContextAddFolder = () => {
    const countref = useRef(0); // remove this
    console.log('ContextAddFolder.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const showAddFolderModal = () => {
        dispatch(addFolderModal());
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='max-content'
                onClick={showAddFolderModal}
            >
                <IconButton width='25px' height='25px' margin='0 5px 0 0'>
                    <FolderIcon />
                </IconButton>
                Add Folder
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextAddFolder;
