//* Styles
import {
    UtilsContainer,
    OptionsContainer,
    SidebarGroupContainer,
    SidebarGroupWrapper,
    ChildrenWrapper,
    DroppableWrapper,
} from '../SidebarStylings';

//* Components
import SidebarCard from './SidebarCard';
import ContextDropdown from '../../ContextDropdown/ContextDropdown';
import ContextSidebarGroup from '../../ContextDropdown/CustomContextDropdowns/ContextSidebarGroup';

//* Hooks, React
import React, { useState, useRef, useEffect } from 'react'; // remove this
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../../global/ExportedStylings';
import { useHistory, useParams } from 'react-router-dom';
import { Draggable, Droppable } from 'react-beautiful-dnd';

//* SVG
import VerticalDots from '../../SVG/VerticalDots';
import ChevronRightIcon from '../../SVG/ChevronRightIcon';

const SidebarGroup = ({
    title,
    cardOrder,
    hasCards,
    folderId,
    groupId,
    index,
    collapse,
}) => {
    const countref = useRef(0); // remove this
    console.log('SidebarGroup.js: ' + countref.current++); // remove this

    const history = useHistory();
    const { groupidurl } = useParams();

    const [showChildren, setShowChildren] = useState(groupId === groupidurl);

    useEffect(() => {
        if (groupId === groupidurl) setShowChildren(true);
        else {
            setShowChildren(false);
        }
    }, [groupidurl, groupId]);

    function handleGroup() {
        console.log('clicked Group');

        history.push(`/Notes/${folderId}/${groupId}`);
    }

    function handleArrow(e) {
        e.stopPropagation();
        console.log('clicked Arrow');
        setShowChildren((prev) => !prev);
    }

    return (
        <Draggable draggableId={groupId} index={index}>
            {(provided) => (
                <SidebarGroupContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <SidebarGroupWrapper
                        onClick={handleGroup}
                        selected={groupId === groupidurl}
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
                            fontSize={groupId === groupidurl ? '1em' : '0.9em'}
                        >
                            <TextWrapper>{title}</TextWrapper>
                        </TextContainer>
                        <UtilsContainer>
                            {/* <UtilsContainer alert='high' days={1}> */}
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
                                        <ContextSidebarGroup
                                            folderId={folderId}
                                            groupId={groupId}
                                            title={title}
                                        />
                                    </ContextDropdown>
                                </OptionsContainer>
                            )}
                        </UtilsContainer>
                    </SidebarGroupWrapper>
                    {showChildren && (
                        <ChildrenWrapper>
                            <Droppable
                                droppableId={folderId + '--' + groupId}
                                type='card'
                            >
                                {(provided, snapshot) => (
                                    <DroppableWrapper
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {cardOrder?.map((card, index) => (
                                            <SidebarCard
                                                key={card}
                                                index={index}
                                                title={hasCards[card].title}
                                                taskOrder={
                                                    hasCards[card].taskOrder
                                                }
                                                hasTasks={
                                                    hasCards[card].hasTasks
                                                }
                                                folderId={folderId}
                                                groupId={groupId}
                                                cardId={card}
                                                collapse={collapse}
                                            />
                                        ))}
                                        {provided.placeholder}
                                    </DroppableWrapper>
                                )}
                            </Droppable>
                        </ChildrenWrapper>
                        // <ChildrenWrapper>
                        //     {cardOrder?.map((card) => (
                        //         <SidebarCard
                        //             key={card}
                        //             title={hasCards[card].title}
                        //             taskOrder={hasCards[card].taskOrder}
                        //             hasTasks={hasCards[card].hasTasks}
                        //             folderId={folderId}
                        //             groupId={groupId}
                        //             cardId={card}
                        //         />
                        //     ))}
                        // </ChildrenWrapper>
                    )}
                </SidebarGroupContainer>
            )}
        </Draggable>
    );
};

export default React.memo(SidebarGroup);
