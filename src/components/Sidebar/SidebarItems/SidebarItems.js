//* Styles
import { SidebarItemsContainer } from '../SidebarStylings';

//* Components
import SidebarFolder from './SidebarFolder';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import {
    updateCardHasTaskPost,
    updateFolderHasGroupPost,
    updateGroupHasCardPost,
} from '../../../redux/ducks/notesDuck';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const SidebarItems = () => {
    const countref = useRef(0); // remove this
    console.log('SidebarItems.js: ' + countref.current++); // remove this

    const folderState = useSelector((state) => state.notesDuck.folders);
    console.log(folderState);

    const [collapse, setCollapse] = useState(false);

    const { groupidurl, cardidurl, taskidurl } = useParams();

    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    const history = useHistory();
    const handleDragEnd = (result) => {
        const { source, destination, draggableId, type } = result;

        setCollapse(false);

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        if (type === 'card') {
            const sourceSplitArr = source.droppableId.split('--');
            const sourceFolderId = sourceSplitArr[0];
            const sourceGroupId = sourceSplitArr[1];

            const destinationSplitArr = destination.droppableId.split('--');
            const destinationFolderId = destinationSplitArr[0];
            const destinationGroupId = destinationSplitArr[1];
            dispatch(
                updateGroupHasCardPost(
                    currentUser.uid,
                    sourceFolderId,
                    sourceGroupId,
                    destinationFolderId,
                    destinationGroupId,
                    draggableId,
                    source.index,
                    destination.index
                )
            );
            if (draggableId === cardidurl)
                history.push(
                    `/Notes/${destinationFolderId}/${destinationGroupId}/${draggableId}`
                );
        }

        if (type === 'task') {
            const sourceSplitArr = source.droppableId.split('--');
            const sourceFolderId = sourceSplitArr[0];
            const sourceGroupId = sourceSplitArr[1];
            const sourceCardId = sourceSplitArr[2];

            const destinationSplitArr = destination.droppableId.split('--');
            const destinationFolderId = destinationSplitArr[0];
            const destinationGroupId = destinationSplitArr[1];
            const destinationCardId = destinationSplitArr[2];

            dispatch(
                updateCardHasTaskPost(
                    currentUser.uid,
                    sourceFolderId,
                    sourceGroupId,
                    sourceCardId,
                    destinationFolderId,
                    destinationGroupId,
                    destinationCardId,
                    draggableId,
                    source.index,
                    destination.index
                )
            );
            if (draggableId === taskidurl)
                history.push(
                    `/Notes/${destinationFolderId}/${destinationGroupId}/${destinationCardId}/${draggableId}`
                );
        }
        if (type === 'group') {
            dispatch(
                updateFolderHasGroupPost(
                    currentUser.uid,
                    source.droppableId,
                    destination.droppableId,
                    draggableId,
                    source.index,
                    destination.index
                )
            );
            if (draggableId === groupidurl)
                history.push(
                    `/Notes/${destination.droppableId}/${draggableId}`
                );
        }
    };

    function handleCollapse() {
        setCollapse(true);
    }

    if (folderState['SkeletonFolder']) {
        return (
            <SidebarItemsContainer>
                <div className='skeleton skeleton-folder'></div>
                <div className='skeleton skeleton-group'></div>
                <div className='skeleton skeleton-card'></div>
                <div className='skeleton skeleton-task'></div>
                
                <div className='skeleton skeleton-folder'></div>
                <div className='skeleton skeleton-group'></div>
                <div className='skeleton skeleton-card'></div>
                <div className='skeleton skeleton-task'></div>
                <div className='skeleton skeleton-group'></div>
                <div className='skeleton skeleton-card'></div>

                <div className='skeleton skeleton-folder'></div>
                <div className='skeleton skeleton-group'></div>
                <div className='skeleton skeleton-card'></div>
                <div className='skeleton skeleton-task'></div>
                <div className='skeleton skeleton-task'></div>
                <div className='skeleton skeleton-task'></div>
            </SidebarItemsContainer>
        );
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleCollapse}>
            <SidebarItemsContainer>
                {Object.keys(folderState)?.map((folder) => (
                    <SidebarFolder
                        key={folder}
                        title={folderState[folder].title}
                        groupOrder={folderState[folder].groupOrder}
                        hasGroups={folderState[folder].hasGroups}
                        folderId={folder}
                        collapse={collapse}
                    />
                ))}
            </SidebarItemsContainer>
        </DragDropContext>
    );
};

export default React.memo(SidebarItems);
