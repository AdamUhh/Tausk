//* Styles
import {
    CustomModalBody,
    CustomModalButton,
    CustomModalFooter,
    CustomModalHeader,
    CustomModalTitle,
    CustomModalWrapper,
} from '../ModalStylings';

//* Hooks, React
import { useRef, useState } from 'react'; // remove this
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../contexts/AuthContext';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';
import { deleteTaskPost } from '../../../redux/ducks/notesDuck';

//* Components
import edjsHTML from 'editorjs-parser';
import { useHistory } from 'react-router-dom';

const ModalDeleteTask = ({
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
}) => {
    const countref = useRef(0); // remove this
    console.log('ModalDeleteTask.js: ' + countref.current++); // remove this

    const [disabled, setDisabled] = useState(false);

    const { currentUser } = useAuth();

    const dispatch = useDispatch();
    function handleSubmit() {
        setDisabled(true);

        dispatch(
            deleteTaskPost(currentUser.uid, folderId, groupId, cardId, taskId)
        );
    }

    const edjsParser = new edjsHTML();

    return (
        <>
            <CustomModalHeader>Delete Task</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    Are you sure you want to delete this Task?
                    {title ? (
                        <CustomModalTitle>{title}</CustomModalTitle>
                    ) : (
                        <CustomModalTitle
                            dangerouslySetInnerHTML={{
                                __html: edjsParser
                                    .parse(desc)
                                    .substring(0, 150),
                            }}
                        ></CustomModalTitle>
                    )}
                </CustomModalBody>
                <CustomModalFooter>
                    <CustomModalButton
                        mode='delete'
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? <LoadingIcon /> : 'Delete Task'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalDeleteTask;
