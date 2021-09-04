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
import { useParams } from 'react-router-dom';
import useToaster from '../../../hooks/useToaster';

//* Redux
import { addCardPost } from '../../../redux/ducks/notesDuck';
import { useAuth } from '../../../contexts/AuthContext';

//* SVG
import LoadingIcon from '../../SVG/LoadingIcon';

const ModalAddCard = () => {
    const countref = useRef(0); // remove this
    console.log('ModalAddCard.js: ' + countref.current++); // remove this

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

    const { folderidurl, groupidurl } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    function handleSubmit() {
        if (inputValue.length > 0 && inputValue.length <= maxInputLength) {
            console.log(inputValue);
            setDisabled(true);

            //Dispatch to notesDuck (with NAME)
            dispatch(
                addCardPost(
                    currentUser.uid,
                    folderidurl,
                    groupidurl,
                    inputValue
                )
            );

            //Dispatch to modalDuck (to NONE)
            // dispatch(resetView());
        } else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: "Can't leave Card name empty",
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: "Can't leave Card name empty",
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
            <CustomModalHeader>Add Card</CustomModalHeader>
            <CustomModalWrapper>
                <CustomModalBody>
                    <ModalLabel htmlFor='nameInput'>Add a name:</ModalLabel>
                    <ModalInput
                        id='nameInput'
                        placeholder='Card Name'
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
                        {disabled ? <LoadingIcon /> : 'Add Card'}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalAddCard;
