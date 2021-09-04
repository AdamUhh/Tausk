//* Styles
import {
    CustomModalBody,
    CustomModalButton,
    CustomModalFooter,
    CustomModalHeader,
    CustomModalWrapper,
    ModalInput,
    ModalLabel,
} from '../ModalStylings';

//* Components
import AlertToaster from '../../global/AlertToaster';

//* Hooks, React
import { useRef, useState } from 'react'; // remove this
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../contexts/AuthContext';
import useToaster from '../../../hooks/useToaster';

//* Constants
import { maxInputLength } from '../../../contexts/Constants';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';
import { renameFolderPost } from '../../../redux/ducks/notesDuck';

const ModalRenameFolder = ({ folderId, title = '' }) => {
    const countref = useRef(0); // remove this
    console.log('ModalAddFolder.js: ' + countref.current++); // remove this

    const [inputValue, setInputValue] = useState(title);
    const [disabled, setDisabled] = useState(false);

    const [toasterState, setToasterState] = useToaster();

    function handleOnChange(e) {
        if (e.target.value.length < maxInputLength)
            setInputValue(e.target.value);
        else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: `Max characters allowed: ${maxInputLength}`,
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: `Max characters allowed: ${maxInputLength}`,
                });
            }
        }
    }

    function handleOnKeyPress(e) {
        if (e.key === 'Enter') handleSubmit();
    }

    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    function handleSubmit() {
        if (inputValue.length > 0 && inputValue.length <= maxInputLength) {
            setDisabled(true);

            //Dispatch to notesDuck (with NAME)
            dispatch(renameFolderPost(currentUser.uid, folderId, inputValue));
        } else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: "Can't leave Group name empty",
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: "Can't leave Group name empty",
                });
            }
        }

        //Dispatch to notesDuck (with NAME)

        //Dispatch to modalDuck (to NONE)
    }

    return (
        <>
            {toasterState.isToasterOpen && (
                <AlertToaster
                    msg={toasterState.msg}
                    shake={toasterState.shake}
                />
            )}
            <CustomModalHeader>Rename Folder</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    <ModalLabel htmlFor='nameInput'>Add a new name:</ModalLabel>
                    <ModalInput
                        id='nameInput'
                        placeholder='Folder Name'
                        onChange={handleOnChange}
                        onKeyPress={handleOnKeyPress}
                        value={inputValue}
                    />
                </CustomModalBody>
                <CustomModalFooter>
                    <CustomModalButton
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? <LoadingIcon /> : 'Rename Folder'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalRenameFolder;
