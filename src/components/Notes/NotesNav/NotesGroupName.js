//* Styles
import {
    NotesEditGroupNameContainer,
    NotesGroupNameContainer,
} from '../NotesStylings';
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../../global/ExportedStylings';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { useDispatch, useSelector } from 'react-redux';

//* SVG
import EditIcon from '../../SVG/EditIcon';
//* Redux
import { renameGroupModal } from '../../../redux/ducks/modalDuck';
import { useParams } from 'react-router-dom';

const NotesGroupName = () => {
    const countref = useRef(0); // remove this
    console.log('NotesGroupName.js: ' + countref.current++); // remove this

    const { folderidurl, groupidurl } = useParams();
    const groupState = useSelector(
        (state) => state.notesDuck.folders[folderidurl].hasGroups
    );

    const dispatch = useDispatch();
    function handleEditGroupName() {
        dispatch(
            renameGroupModal(
                folderidurl,
                groupidurl,
                groupState[groupidurl].title
            )
        );
    }

    return (
        <NotesGroupNameContainer>
            <NotesEditGroupNameContainer onClick={handleEditGroupName}>
                <IconButton width='25px' height='25px' radius='4px'>
                    <EditIcon />
                </IconButton>
            </NotesEditGroupNameContainer>
            <TextContainer>
                <TextWrapper>{groupState[groupidurl].title}</TextWrapper>
            </TextContainer>
        </NotesGroupNameContainer>
    );
};

export default React.memo(NotesGroupName);
