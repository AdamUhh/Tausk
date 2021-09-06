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

//* Constants
import { maxInputLength } from '../../../contexts/Constants';

//* Components
import AlertToaster from '../../global/AlertToaster';

//* Hooks, React
import { useRef, useState } from 'react'; // remove this
import { useDispatch } from 'react-redux';
import useToaster from '../../../hooks/useToaster';

//* Redux
import { addFolderPost } from '../../../redux/ducks/notesDuck';
import { useAuth } from '../../../contexts/AuthContext';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';
import { resetView } from '../../../redux/ducks/modalDuck';

const ModalAddFolder = () => {
    const countref = useRef(0); // remove this
    console.log('ModalAddFolder.js: ' + countref.current++); // remove this

    const [inputValue, setInputValue] = useState('');
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

    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    function handleSubmit() {
        if (inputValue.length > 0 && inputValue.length <= maxInputLength) {
            // console.log(inputValue);
            setDisabled(true);

            //Dispatch to notesDuck (with NAME)
            dispatch(addFolderPost(currentUser.uid, inputValue));

            //Dispatch to modalDuck (to NONE)
            // dispatch(resetView());
        } else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: "Can't leave Folder name empty",
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: "Can't leave Folder name empty",
                });
            }
        }
    }

    return (
        <>
            {toasterState.isToasterOpen && (
                <AlertToaster
                    msg={toasterState.msg}
                    shake={toasterState.shake}
                />
            )}
            <CustomModalHeader>Add Folder</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    <ModalLabel htmlFor='nameInput'>Add a name:</ModalLabel>
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
                        {disabled ? <LoadingIcon /> : 'Add Folder'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalAddFolder;
