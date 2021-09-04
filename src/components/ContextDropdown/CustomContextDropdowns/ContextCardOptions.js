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
    renameCardModal,
    deleteCardModal,
} from '../../../redux/ducks/modalDuck';

//* SVG
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';
import ExpandIcon from '../../SVG/ExpandIcon';
import { useHistory } from 'react-router-dom';

const ContextCardOptions = ({ folderId, groupId, cardId, title }) => {
    const countref = useRef(0); // remove this
    console.log('ContextCardOptions.js: ' + countref.current++); // remove this

    const history = useHistory();
    const handleExpand = () => {
        history.push(`/Notes/${folderId}/${groupId}/${cardId}`);
    };

    const dispatch = useDispatch();
    const handleRenameCardModal = () => {
        dispatch(renameCardModal(folderId, groupId, cardId, title));
    };
    const handleDeleteCardModal = () => {
        dispatch(deleteCardModal(folderId, groupId, cardId, title));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='150px'
                onClick={handleExpand}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <ExpandIcon />
                </IconButton>
                Expand
            </ContextItemWrapper>
            <ContextItemWrapper
                padding='5px 10px'
                width='150px'
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
                width='150px'
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

export default ContextCardOptions;
