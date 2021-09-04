//* Styles
import {
    OptionsContainer,
    SidebarTaskContainer,
    SidebarTaskWrapper,
    UtilsContainer,
} from '../SidebarStylings';
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../../global/ExportedStylings';

//* Components
import ContextSidebarTask from '../../ContextDropdown/CustomContextDropdowns/ContextSidebarTask';
import ContextDropdown from '../../ContextDropdown/ContextDropdown';

//* Hooks, React
import React, { useRef } from 'react'; // remove this

//* SVG
import VerticalDots from '../../SVG/VerticalDots';
import ChevronRightIcon from '../../SVG/ChevronRightIcon';
import { useHistory, useParams } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import { getFormattedTaskName } from '../../../utils/GetFormattedTaskName';

const SidebarTask = ({
    index,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
    collapse,
}) => {
    const countref = useRef(0); // remove this
    console.log('SidebarTask.js: ' + countref.current++); // remove this

    const history = useHistory();
    const { taskidurl } = useParams();
    function handleTask() {
        console.log('clicked Task');
        history.push(`/Notes/${folderId}/${groupId}/${cardId}/${taskId}`);
    }

    function handleArrow(e) {
        e.stopPropagation();
        console.log('clicked Arrow');
    }

    return (
        <Draggable draggableId={taskId} index={index}>
            {(provided) => (
                <SidebarTaskContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <SidebarTaskWrapper
                        onClick={handleTask}
                        selected={taskId === taskidurl}
                    >
                        <TextContainer
                            padding='10px 0 10px 20px'
                            minHeight='35px'
                            fontSize={taskId === taskidurl ? '1em' : '0.9em'}
                        >
                            <TextWrapper>
                                {title.length > 0
                                    ? title
                                    : getFormattedTaskName(desc)}
                            </TextWrapper>
                        </TextContainer>
                        <UtilsContainer>
                            {/* <UtilsContainer alert='low' days={3}> */}
                            {!collapse && (
                                <OptionsContainer>
                                    <ContextDropdown
                                        icon={
                                            <VerticalDots
                                                width='13px'
                                                height='16px'
                                            />
                                        }
                                        width='16px'
                                        padding='0'
                                        transparent
                                    >
                                        <ContextSidebarTask
                                            folderId={folderId}
                                            groupId={groupId}
                                            cardId={cardId}
                                            taskId={taskId}
                                            title={title}
                                            desc={desc}
                                        />
                                    </ContextDropdown>
                                </OptionsContainer>
                            )}
                        </UtilsContainer>
                    </SidebarTaskWrapper>
                </SidebarTaskContainer>
            )}
        </Draggable>
    );
};

export default React.memo(SidebarTask);
