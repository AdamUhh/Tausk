//* Styles
import { ModalContainer, ModalWrapper } from './ModalStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* Styled
const Modal = ({ children }) => {
    const countref = useRef(0); // remove this
    console.log('Modal.js: ' + countref.current++); // remove this 

    return <ModalWrapper>{children}</ModalWrapper>;
};

export default Modal;
