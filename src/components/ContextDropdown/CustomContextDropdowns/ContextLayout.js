//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
} from '../ContextStylings';
import { IconButton } from '../../global/ExportedStylings';

//* Variables
import {
    ListLayout,
    BoxedListLayout,
    DetailedLayout,
    BoxedDetailedLayout,
} from '../../Notes/NotesHome';

//* Hooks, React
import { useRef } from 'react'; // remove this
import useWindowDimensions from '../../../hooks/useWindowDimensions';
//* SVG
import LayoutDetailedIcon from '../../SVG/LayoutDetailedIcon';
import LayoutListIcon from '../../SVG/LayoutListIcon';

const ContextLayout = ({ notesLayout, setNotesLayout }) => {
    const countref = useRef(0); // remove this
    console.log('ContextLayout.js: ' + countref.current++); // remove this

    const { isMobileView } = useWindowDimensions();

    function handleListLayout() {
        setNotesLayout(ListLayout);
        localStorage.setItem('NotesLayout', ListLayout);
    }
    function handleBoxedListLayout() {
        setNotesLayout(BoxedListLayout);
        localStorage.setItem('NotesLayout', BoxedListLayout);
    }
    function handleDetailedLayout() {
        setNotesLayout(DetailedLayout);
        localStorage.setItem('NotesLayout', DetailedLayout);
    }
    function handleBoxedDetailedLayout() {
        setNotesLayout(BoxedDetailedLayout);
        localStorage.setItem('NotesLayout', BoxedDetailedLayout);
    }

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                width='170px'
                selected={
                    notesLayout === ListLayout ||
                    (notesLayout === BoxedListLayout && isMobileView)
                }
                onClick={handleListLayout}
            >
                <IconButton width='25px' height='25px' margin='0 3px 0 0'>
                    <LayoutListIcon />
                </IconButton>
                List
            </ContextItemWrapper>
            {!isMobileView && (
                <ContextItemWrapper
                    width='170px'
                    selected={notesLayout === BoxedListLayout}
                    onClick={handleBoxedListLayout}
                >
                    <IconButton width='25px' height='25px' margin='0 3px 0 0'>
                        <LayoutListIcon />
                    </IconButton>
                    Boxed List
                </ContextItemWrapper>
            )}
            <ContextItemWrapper
                width='170px'
                selected={
                    notesLayout === DetailedLayout ||
                    (notesLayout === BoxedDetailedLayout && isMobileView)
                }
                onClick={handleDetailedLayout}
            >
                <IconButton width='25px' height='25px' margin='0 3px 0 0'>
                    <LayoutDetailedIcon />
                </IconButton>
                Detailed
            </ContextItemWrapper>
            {!isMobileView && (
                <ContextItemWrapper
                    width='170px'
                    selected={notesLayout === BoxedDetailedLayout}
                    onClick={handleBoxedDetailedLayout}
                >
                    <IconButton width='25px' height='25px' margin='0 3px 0 0'>
                        <LayoutDetailedIcon />
                    </IconButton>
                    Boxed Detailed
                </ContextItemWrapper>
            )}
        </ContextDropdownContainer>
    );
};

export default ContextLayout;
