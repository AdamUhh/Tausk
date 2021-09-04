//* Styles
import {
    ChildrenWrapper,
    DroppableWrapper,
    OptionsContainer,
    SidebarCardContainer,
    SidebarCardWrapper,
    UtilsContainer,
} from '../SidebarStylings';
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../../global/ExportedStylings';

//* Components
import SidebarTask from './SidebarTask';
import ContextSidebarCard from '../../ContextDropdown/CustomContextDropdowns/ContextSidebarCard';
import ContextDropdown from '../../ContextDropdown/ContextDropdown';

//* Hooks, React
import React, { useState, useRef, useEffect } from 'react'; // remove this
import { useHistory, useParams } from 'react-router-dom';

//* SVG
import VerticalDots from '../../SVG/VerticalDots';
import ChevronRightIcon from '../../SVG/ChevronRightIcon';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const SidebarCard = ({
    index,
    title,
    taskOrder,
    hasTasks,
    folderId,
    groupId,
    cardId,
    collapse,
}) => {
    const countref = useRef(0); // remove this
    console.log('SidebarCard.js: ' + countref.current++); // remove this

    const [showChildren, setShowChildren] = useState(false);

    const history = useHistory();
    const { cardidurl } = useParams();

    useEffect(() => {
        if (cardId === cardidurl) setShowChildren(true);
        else {
            setShowChildren(false);
        }
    }, [cardidurl, cardId]);

    function handleCard() {
        console.log('clicked Card');
        history.push(`/Notes/${folderId}/${groupId}/${cardId}`);
    }

    function handleArrow(e) {
        e.stopPropagation();
        console.log('clicked Arrow');
        setShowChildren((prev) => !prev);
    }

    return (
        <Draggable draggableId={cardId} index={index}>
            {(provided) => (
                <SidebarCardContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <SidebarCardWrapper
                        onClick={handleCard}
                        selected={cardId === cardidurl}
                    >
                        <IconButton
                            width='20px'
                            height='auto'
                            transparent
                            onClick={handleArrow}
                        >
                            <ChevronRightIcon rotate={showChildren} />
                        </IconButton>
                        <TextContainer
                            padding='10px 0'
                            minHeight='35px'
                            fontSize={cardId === cardidurl ? '1em' : '0.9em'}
                        >
                            <TextWrapper>{title}</TextWrapper>
                        </TextContainer>
                        <UtilsContainer>
                            {/* <UtilsContainer alert='medium' days={2}> */}
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
                                        <ContextSidebarCard
                                            folderId={folderId}
                                            groupId={groupId}
                                            cardId={cardId}
                                            title={title}
                                        />
                                    </ContextDropdown>
                                </OptionsContainer>
                            )}
                        </UtilsContainer>
                    </SidebarCardWrapper>
                    {showChildren && (
                        <ChildrenWrapper>
                            <Droppable
                                droppableId={
                                    folderId + '--' + groupId + '--' + cardId
                                }
                                type='task'
                            >
                                {(provided, snapshot) => (
                                    <DroppableWrapper
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {taskOrder?.map((task, index) => (
                                            <SidebarTask
                                                key={task}
                                                index={index}
                                                title={hasTasks[task].title}
                                                desc={hasTasks[task].desc}
                                                //Todo: Add Date
                                                folderId={folderId}
                                                groupId={groupId}
                                                cardId={cardId}
                                                taskId={task}
                                                collapse={collapse}
                                            />
                                        ))}
                                        {provided.placeholder}
                                    </DroppableWrapper>
                                )}
                            </Droppable>
                        </ChildrenWrapper>
                    )}
                </SidebarCardContainer>
            )}
        </Draggable>
    );
};

export default React.memo(SidebarCard);
