//* Styles
import {
    CustomModalBody,
    CustomModalButton,
    CustomModalFooter,
    CustomModalHeader,
    CustomModalWrapper,
    ModalInput,
    ModalLabel,
    Option,
    Select,
    SelectContainer,
} from '../ModalStylings';

//* Constants
import { maxInputLength } from '../../../contexts/Constants';

//* Components
import AlertToaster from '../../global/AlertToaster';

//* Hooks, React
import { useRef, useState } from 'react'; // remove this
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useToaster from '../../../hooks/useToaster';

//* Redux
import { addGroupPost } from '../../../redux/ducks/notesDuck';
import { useAuth } from '../../../contexts/AuthContext';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';

const ModalAddGroup = () => {
    const countref = useRef(0); // remove this
    console.log('ModalAddGroup.js: ' + countref.current++); // remove this

    const [inputValue, setInputValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [toasterState, setToasterState] = useToaster();

    const [selectedOption, setSelectedOption] = useState('Todo');

    const foldersState = useSelector((state) => state.notesDuck.folders);

    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    const history = useHistory();

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

    function handleSelectOnChange(e) {
        setSelectedOption(e.target.value);
    }

    function handleSubmit() {
        if (inputValue.length > 0 && inputValue.length <= maxInputLength) {
            console.log(inputValue);
            setDisabled(true);

            //Dispatch to notesDuck (with NAME)
            dispatch(
                addGroupPost(
                    history,
                    currentUser.uid,
                    selectedOption,
                    inputValue
                )
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
            <CustomModalHeader>Add Group</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    <SelectContainer>
                        <ModalLabel htmlFor='forfolder'>
                            Choose a folder:
                        </ModalLabel>
                        <Select
                            id='forfolder'
                            value={selectedOption}
                            onChange={handleSelectOnChange}
                        >
                            {Object.keys(foldersState).map((folder) => (
                                <Option key={folder} value={folder}>
                                    {foldersState[folder].title}
                                </Option>
                            ))}
                        </Select>
                    </SelectContainer>
                    <ModalLabel htmlFor='nameInput'>Add a name:</ModalLabel>
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
                        {disabled ? <LoadingIcon /> : 'Add Group'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalAddGroup;
