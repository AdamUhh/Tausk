//* Styles
import { ContextModalContainer } from './ModalStylings';

//* Hooks, React
import { useComponentVisible } from '../../hooks/useComponentVisible';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

//* Redux
import { resetView } from '../../redux/ducks/modalDuck';
const ModalContext = ({ children }) => {
    const countref = useRef(0);
    console.log('ModalContext.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const handleResetModal = () => {
        dispatch(resetView());
    };
    const { dropdownRef, isComponentVisible } = useComponentVisible(
        false,
        true,
        handleResetModal
    );

    return (
        <ContextModalContainer ref={dropdownRef}>
            {isComponentVisible && children}
        </ContextModalContainer>
    );
};

export default ModalContext;
