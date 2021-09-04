//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
    ContextItemWrapperLink,
} from '../ContextStylings';
import { IconButton } from '../../global/ExportedStylings';

//* Components
import CogIcon from '../../SVG/CogIcon';
import ProfileIcon from '../../SVG/ProfileIcon';
import ThemeIcon from '../../SVG/ThemeIcon';
//* Hooks, React
import { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';

//* Redux
import { viewTheme } from '../../../redux/ducks/modalDuck';

const ContextSettings = () => {
    const countref = useRef(0); // remove this
    console.log('ContextSettings.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    const showThemeModal = () => {
        dispatch(viewTheme());
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapperLink to='/Profile'>
                <IconButton width='25px' height='25px' margin='0 5px 0 0'>
                    <ProfileIcon />
                </IconButton>
                Profile
            </ContextItemWrapperLink>
            <ContextItemWrapperLink to='/Settings'>
                <IconButton width='25px' height='25px' margin='0 5px 0 0'>
                    <CogIcon />
                </IconButton>
                Settings
            </ContextItemWrapperLink>
            <ContextItemWrapper onClick={showThemeModal}>
                <IconButton width='25px' height='25px' margin='0 5px 0 0'>
                    <ThemeIcon />
                </IconButton>
                Change Theme
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSettings;
