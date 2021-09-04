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

//* Hooks, React
import { useRef, useState } from 'react'; // remove this

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';
import { useDispatch } from 'react-redux';
import { renameGroupPost } from '../../../redux/ducks/notesDuck';
import { useAuth } from '../../../contexts/AuthContext';
import useToaster from '../../../hooks/useToaster';
import { maxInputLength } from '../../../contexts/Constants';
import AlertToaster from '../../global/AlertToaster';

const ModalRenameGroup = ({ folderId, groupId, title = '' }) => {
    const countref = useRef(0); // remove this
    console.log('ModalAddGroup.js: ' + countref.current++); // remove this

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
            dispatch(
                renameGroupPost(currentUser.uid, folderId, groupId, inputValue)
            );
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
    }

    return (
        <>
            {toasterState.isToasterOpen && (
                <AlertToaster
                    msg={toasterState.msg}
                    shake={toasterState.shake}
                />
            )}
            <CustomModalHeader>Rename Group</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    <ModalLabel htmlFor='nameInput'>Add a new name:</ModalLabel>
                    <ModalInput
                        id='nameInput'
                        placeholder='Group Name'
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
                        {disabled ? <LoadingIcon /> : 'Rename Group'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalRenameGroup;
