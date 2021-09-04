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
import { deleteTaskModal, editTaskModal } from '../../../redux/ducks/modalDuck';

//* SVG
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';

const ContextSidebarTask = ({ folderId, groupId, cardId, taskId, title, desc }) => {
    const countref = useRef(0); // remove this
    console.log('ContextSidebarFolder.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const handleEditTaskModal = (e) => {
        e.stopPropagation();

        dispatch(editTaskModal(folderId, groupId, cardId, taskId));
    };
    const handleDeleteTaskModal = (e) => {
        e.stopPropagation();

        dispatch(deleteTaskModal(folderId, groupId, cardId, taskId, title, desc));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleEditTaskModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <EditIcon />
                </IconButton>
                Edit Task
            </ContextItemWrapper>
            <ContextItemWrapper
                padding='5px 10px'
                width='160px'
                onClick={handleDeleteTaskModal}
            >
                <IconButton
                    width='30px'
                    height='30px'
                    padding='4px'
                    margin='0 3px 0 0'
                >
                    <TrashIcon />
                </IconButton>
                Delete Task
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSidebarTask;
