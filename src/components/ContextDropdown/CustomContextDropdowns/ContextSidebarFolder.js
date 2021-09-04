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
    deleteFolderModal,
    renameFolderModal,
} from '../../../redux/ducks/modalDuck';

//* SVG
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';

const ContextSidebarFolder = ({ folderId, title }) => {
    const countref = useRef(0); // remove this
    console.log('ContextSidebarFolder.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const handleRenameFolderModal = (e) => {
        e.stopPropagation();

        dispatch(renameFolderModal(folderId, title));
    };
    const handleDeleteFolderModal = (e) => {
        e.stopPropagation();

        dispatch(deleteFolderModal(folderId, title));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleRenameFolderModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <EditIcon />
                </IconButton>
                Rename Folder
            </ContextItemWrapper>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleDeleteFolderModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <TrashIcon />
                </IconButton>
                Delete Folder
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSidebarFolder;
