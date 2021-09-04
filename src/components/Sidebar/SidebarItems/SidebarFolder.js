//* Styles
import styled from 'styled-components';
import {
    OptionsContainer,
    SidebarFolderContainer,
    SidebarFolderWrapper,
    DroppableWrapper,
} from '../SidebarStylings';
import {
    TextContainer,
    TextWrapper as TW,
} from '../../global/ExportedStylings';

//* Components
import SidebarGroup from './SidebarGroup';
import ContextDropdown from '../../ContextDropdown/ContextDropdown';
import ContextSidebarFolder from '../../ContextDropdown/CustomContextDropdowns/ContextSidebarFolder';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { Droppable } from 'react-beautiful-dnd';

//* SVG
import HorizontalDots from '../../SVG/HorizontalDots';

//* Styled

const TextWrapper = styled(TW)`
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

const SidebarFolder = ({
    title,
    groupOrder,
    hasGroups,
    folderId,
    collapse,
}) => {
    const countref = useRef(0); // remove this
    console.log('SidebarFolder.js: ' + countref.current++); // remove this

    return (
        <SidebarFolderContainer>
            <SidebarFolderWrapper>
                <TextContainer padding='5px 3px 5px 3px' minHeight='0'>
                    <TextWrapper>{title}</TextWrapper>
                </TextContainer>
                {folderId !== 'Todo' && (
                    <OptionsContainer>
                        <ContextDropdown
                            icon={<HorizontalDots height='20px' />}
                            width='20px'
                            height='10px'
                            transparent
                        >
                            <ContextSidebarFolder
                                folderId={folderId}
                                title={title}
                            />
                        </ContextDropdown>
                    </OptionsContainer>
                )}
            </SidebarFolderWrapper>
            <Droppable droppableId={folderId} type='group'>
                {(provided, snapshot) => (
                    <DroppableWrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {groupOrder?.map((group, index) => (
                            <SidebarGroup
                                key={group}
                                title={hasGroups[group].title}
                                cardOrder={hasGroups[group].cardOrder}
                                hasCards={hasGroups[group].hasCards}
                                folderId={folderId}
                                groupId={group}
                                index={index}
                                collapse={collapse}
                            />
                        ))}
                        {provided.placeholder}
                    </DroppableWrapper>
                )}
            </Droppable>
        </SidebarFolderContainer>
    );
};

export default React.memo(SidebarFolder);
