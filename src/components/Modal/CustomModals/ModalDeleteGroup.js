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

//* Redux
import { deleteGroupPost } from '../../../redux/ducks/notesDuck';
//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';

const ModalDeleteGroup = ({ folderId, groupId, title }) => {
    const countref = useRef(0); // remove this
    console.log('ModalDeleteGroup.js: ' + countref.current++); // remove this

    const [disabled, setDisabled] = useState(false);

    const { currentUser } = useAuth();

    const dispatch = useDispatch();
    function handleSubmit() {
        setDisabled(true);

        //Dispatch to notesDuck (with ID)
        dispatch(deleteGroupPost(currentUser.uid, folderId, groupId));
    }

    return (
        <>
            <CustomModalHeader>Delete Group</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    Are you sure you want to delete this Group?
                    <CustomModalTitle>{title}</CustomModalTitle>
                </CustomModalBody>
                <CustomModalFooter>
                    <CustomModalButton
                        mode='delete'
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? <LoadingIcon /> : 'Delete Group'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalDeleteGroup;
