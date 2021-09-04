//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
} from '../ContextStylings';
import { IconButton } from '../../global/ExportedStylings';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';
//* Redux
import {
    deleteCardModal,
    renameCardModal,
} from '../../../redux/ducks/modalDuck';

//* SVG
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';

const ContextSidebarCard = ({ folderId, groupId, cardId, title }) => {
    const countref = useRef(0); // remove this
    console.log('ContextSidebarFolder.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const handleRenameCardModal = (e) => {
        e.stopPropagation();

        dispatch(renameCardModal(folderId, groupId, cardId, title));
    };
    const handleDeleteCardModal = (e) => {
        e.stopPropagation();

        dispatch(deleteCardModal(folderId, groupId, cardId, title));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleRenameCardModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <EditIcon />
                </IconButton>
                Rename Card
            </ContextItemWrapper>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleDeleteCardModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <TrashIcon />
                </IconButton>
                Delete Card
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSidebarCard;
