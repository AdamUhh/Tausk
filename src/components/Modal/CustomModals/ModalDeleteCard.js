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
import { useAuth } from '../../../contexts/AuthContext';
import { useDispatch } from 'react-redux';

//* Redux
import { deleteCardPost } from '../../../redux/ducks/notesDuck';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';

const ModalDeleteCard = ({ folderId, groupId, cardId, title }) => {
    const countref = useRef(0); // remove this
    console.log('ModalDeleteCard.js: ' + countref.current++); // remove this

    const [disabled, setDisabled] = useState(false);

    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    function handleSubmit() {
        setDisabled(true);

        //Dispatch to notesDuck (with ID)
        dispatch(deleteCardPost(currentUser.uid, folderId, groupId, cardId));
    }

    return (
        <>
            <CustomModalHeader>Delete Card</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    Are you sure you want to delete this Card?
                    <CustomModalTitle>{title}</CustomModalTitle>
                </CustomModalBody>
                <CustomModalFooter>
                    <CustomModalButton
                        mode='delete'
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? <LoadingIcon /> : 'Delete Card'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalDeleteCard;
