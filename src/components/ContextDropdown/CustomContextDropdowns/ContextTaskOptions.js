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
import ExpandIcon from '../../SVG/ExpandIcon';
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';
import { useHistory } from 'react-router-dom';

const ContextTaskOptions = ({
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
}) => {
    const countref = useRef(0); // remove this
    console.log('ContextTaskOptions.js: ' + countref.current++); // remove this

    const history = useHistory();
    function handleExpand() {
        history.push(`/Notes/${folderId}/${groupId}/${cardId}/${taskId}`);
    }

    const dispatch = useDispatch();
    function handleEditTaskModal() {
        dispatch(editTaskModal(folderId, groupId, cardId, taskId));
    }

    function handleDeleteTaskModal() {
        dispatch(deleteTaskModal(folderId, groupId, cardId, taskId, title, desc));
    }

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                padding='5px 10px'
                width='125px'
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
                width='125px'
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
                width='125px'
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
                Delete
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextTaskOptions;
