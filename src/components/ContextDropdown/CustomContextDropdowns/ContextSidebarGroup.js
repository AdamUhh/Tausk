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
    deleteGroupModal,
    renameGroupModal,
} from '../../../redux/ducks/modalDuck';

//* SVG
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';

const ContextSidebarGroup = ({ folderId, groupId, title = '' }) => {
    const countref = useRef(0); // remove this
    console.log('ContextSidebarFolder.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const handleRenameGroupModal = (e) => {
        e.stopPropagation();

        dispatch(renameGroupModal(folderId, groupId, title));
    };
    const handleDeleteGroupModal = (e) => {
        e.stopPropagation();
        dispatch(deleteGroupModal(folderId, groupId, title));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleRenameGroupModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <EditIcon />
                </IconButton>
                Rename Group
            </ContextItemWrapper>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleDeleteGroupModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <TrashIcon />
                </IconButton>
                Delete Group
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSidebarGroup;
