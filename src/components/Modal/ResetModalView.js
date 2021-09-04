//* Styles
import { IconButton } from '../global/ExportedStylings';

//* Components
import ExitIcon from '../SVG/ExitIcon';

//* Hooks, React
import { useDispatch } from 'react-redux';
import { useRef } from 'react'; // remove this

//* Redux
import { resetView } from '../../redux/ducks/modalDuck';

const ResetModalView = () => {
    const countref = useRef(0); // remove this
    console.log('ResetModalView.js: ' + countref.current++); // remove this 

    const dispatch = useDispatch();
    const resetModalView = () => {
        dispatch(resetView());
    };

    return (
        <IconButton exit onClick={resetModalView} width='30px'>
            <ExitIcon />
        </IconButton>
    );
};

export default ResetModalView;
