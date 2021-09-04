//* Styles
import {
    NotesCardContainer,
    NotesCardHeader,
    NotesCardTitleContainer,
    NotesCardOptionsContainer,
    NotesTaskContainer,
} from './NotesStylings';
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../global/ExportedStylings';

//* Components
import ContextDropdown from '../ContextDropdown/ContextDropdown';
import ContextCardOptions from '../ContextDropdown/CustomContextDropdowns/ContextCardOptions';
import NotesTask from './NotesTask';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//* Redux
import { addTaskModal } from '../../redux/ducks/modalDuck';

//* SVG
import PlusIcon from '../SVG/PlusIcon';
import VerticalDots from '../SVG/VerticalDots';

const NotesCard = ({ notesLayout, title, taskOrder, hasTasks, cardId }) => {
    const countref = useRef(0); // remove this
    console.log('NotesCard.js: ' + countref.current++); // remove this

    const dispatch = useDispatch();
    function handleAddTaskModal() {
        dispatch(addTaskModal(cardId));
    }

    const { folderidurl, groupidurl, cardidurl, taskidurl } = useParams();
    console.log(title);
    return (
        <NotesCardContainer>
            <NotesCardHeader>
                <NotesCardTitleContainer>
                    <TextContainer minHeight='30px' padding='5px 10px'>
                        <TextWrapper>{title}</TextWrapper>
                    </TextContainer>
                </NotesCardTitleContainer>
                <NotesCardOptionsContainer>
                    <IconButton
                        width='40px'
                        height='35px'
                        radius='10px 0 0 0'
                        onClick={handleAddTaskModal}
                    >
                        <PlusIcon height='25px' />
                    </IconButton>
                    <ContextDropdown
                        icon={<VerticalDots width='20px' height='20px' />}
                        width='20px'
                        height='35px'
                        radius='0 10px 0 0'
                    >
                        <ContextCardOptions
                            folderId={folderidurl}
                            groupId={groupidurl}
                            cardId={cardId}
                            title={title}
                        />
                    </ContextDropdown>
                </NotesCardOptionsContainer>
            </NotesCardHeader>
            <NotesTaskContainer cardidurl={cardidurl}>
                {taskidurl && hasTasks[taskidurl] ? (
                    <NotesTask
                        notesLayout={notesLayout}
                        title={hasTasks[taskidurl].title}
                        desc={hasTasks[taskidurl].desc}
                        taskId={taskidurl}
                        cardId={cardId}
                    />
                ) : (
                    taskOrder?.map((task) => (
                        <NotesTask
                            key={task}
                            notesLayout={notesLayout}
                            title={hasTasks[task].title}
                            desc={hasTasks[task].desc}
                            taskId={task}
                            cardId={cardId}
                        />
                    ))
                )}
            </NotesTaskContainer>
        </NotesCardContainer>
    );
};

export default React.memo(NotesCard);
