//* Styles
import {
    SidebarAddGroupContainer,
    SidebarAddGroupBtn,
} from './SidebarStylings';

//* Components
import ContextAddFolder from '../ContextDropdown/CustomContextDropdowns/ContextAddFolder';
import ContextDropdown from '../ContextDropdown/ContextDropdown';

//* Redux
import { addGroupModal } from '../../redux/ducks/modalDuck';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';

//* SVG
import PlusIcon from '../SVG/PlusIcon';
import HorizontalDots from '../SVG/HorizontalDots';
import { IconButton } from '../global/ExportedStylings';

const SidebarAdd = () => {
    const countref = useRef(0); // remove this
    console.log('SidebarAdd.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    function handleAddGroupModal() {
        dispatch(addGroupModal());
    }

    return (
        <SidebarAddGroupContainer>
            <SidebarAddGroupBtn onClick={handleAddGroupModal}>
                <IconButton
                    width='30px'
                    height='20px'
                    margin='0 3px 0 0'
                    transparent
                >
                    <PlusIcon />
                </IconButton>
                Add Group
            </SidebarAddGroupBtn>
            <ContextDropdown
                icon={<HorizontalDots width='20px' />}
                width='30px'
                height='20px'
                radius='0 0 6px 6px'
                margin='0 5px 0 0'
            >
                <ContextAddFolder />
            </ContextDropdown>
        </SidebarAddGroupContainer>
    );
};

export default React.memo(SidebarAdd);
