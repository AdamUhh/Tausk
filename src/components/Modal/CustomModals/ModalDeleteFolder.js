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
import { deleteFolderPost } from '../../../redux/ducks/notesDuck';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';

const ModalDeleteFolder = ({ folderId, title = '' }) => {
    const countref = useRef(0); // remove this
    console.log('ModalDeleteFolder.js: ' + countref.current++); // remove this

    const [disabled, setDisabled] = useState(false);
    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    function handleSubmit() {
        setDisabled(true);

        //Dispatch to notesDuck (with ID)
        console.log(folderId)
        dispatch(deleteFolderPost(currentUser.uid, folderId));
    }

    return (
        <>
            <CustomModalHeader>Delete Folder</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    Are you sure you want to delete this folder?
                    <CustomModalTitle>{title}</CustomModalTitle>
                </CustomModalBody>
                <CustomModalFooter>
                    <CustomModalButton
                        mode='delete'
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? <LoadingIcon /> : 'Delete Folder'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalDeleteFolder;
