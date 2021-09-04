//* Styles
import { ModalWrapper } from './ModalStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this
import ResetModalView from './ResetModalView';

//* Styled
const StrictModal = ({ width, height, children }) => {
    const countref = useRef(0); // remove this
    console.log('StrictModal.js: ' + countref.current++); // remove this

    return (
        <ModalWrapper width={width} height={height}>
            <ResetModalView />

            {children}
        </ModalWrapper>
    );
};

export default StrictModal;
StrictModal.defaultProps = {
    width: '550px',
    height: '300px',
};
