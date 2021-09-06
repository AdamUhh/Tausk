import { put, all, call, select } from 'redux-saga/effects';
import { resetView } from '../../ducks/modalDuck';
import {
    addCard,
    addCardHasTask,
    addFolder,
    addFolderHasGroup,
    addGroup,
    addGroupHasCard,
    addTask,
    deleteCard,
    deleteCardHasTask,
    deleteFolder,
    deleteFolderHasGroup,
    deleteGroup,
    deleteGroupHasCard,
    deleteTask,
    editTask,
    getDataAndUpdateState,
    moveCardHasTaskData,
    moveFolderHasGroupData,
    moveGroupHasCardData,
    renameCard,
    renameFolder,
    renameGroup,
    updateCardHasTask,
    updateDestinationCardHasTask,
    updateDestinationFolderHasGroup,
    updateDestinationGroupHasCard,
    updateFolderHasGroup,
    updateGroupHasCard,
} from '../../ducks/notesDuck';
import {
    requestDeleteCard,
    requestDeleteFolder,
    requestDeleteGroup,
    requestDeleteTask,
    requestEditTask,
    requestGetFolderData,
    requestGetGroupData,
    requestGetCardData,
    requestGetTaskData,
    requestPostCard,
    requestPostFolder,
    requestPostGroup,
    requestPostTask,
    requestRenameCard,
    requestRenameFolder,
    requestRenameGroup,
    requestUpdateFolderGroupOrder,
    requestUpdateGroupCardOrder,
    requestUpdateCardTaskOrder,
} from './notesRequester';

//Todo: IMPORTANT - additionally, make a modal pop up that asks if you would like to delete all the

//Todo: groups/cards/tasks associated with the deleted target or move them somewhere else

//Todo: When deleting a group, redirect to first group (if there is one) or to /Notes
//Todo: When deleting a (focused) card, redirect to that cards previous group

export function* handleGetDataPost(action) {
    try {
        const FolderRes = yield call(requestGetFolderData, action);
        console.log('Folder response:');

        const GroupRes = yield call(requestGetGroupData, action);
        console.log('Group response:');

        const CardRes = yield call(requestGetCardData, action);
        console.log('Card response:');

        const TaskRes = yield call(requestGetTaskData, action);
        console.log('Task response:');

        var Notes = {};
        FolderRes.forEach((folderDoc) => {
            Notes[folderDoc.id] = {
                uuid: folderDoc.data().uuid,
                title: folderDoc.data().title,
                groupOrder: folderDoc.data().groupOrder,
                hasGroups: {},
            };
            GroupRes.forEach((groupDoc) => {
                Notes[folderDoc.id].hasGroups[groupDoc.id] = {
                    uuid: groupDoc.data().uuid,
                    title: groupDoc.data().title,
                    cardOrder: groupDoc.data().cardOrder,
                    hasCards: {},
                };
                CardRes.forEach((cardDoc) => {
                    Notes[folderDoc.id].hasGroups[groupDoc.id].hasCards[
                        cardDoc.id
                    ] = {
                        uuid: cardDoc.data().uuid,
                        title: cardDoc.data().title,
                        taskOrder: cardDoc.data().taskOrder,
                        hasTasks: {},
                    };
                    TaskRes.forEach((taskDoc) => {
                        Notes[folderDoc.id].hasGroups[groupDoc.id].hasCards[
                            cardDoc.id
                        ].hasTasks[taskDoc.id] = {
                            uuid: taskDoc.data().uuid,
                            title: taskDoc.data().title || '',
                            desc: taskDoc.data().desc || '',
                        };
                    });
                });
            });
        });

        yield put(getDataAndUpdateState(Notes));
    } catch (error) {
        console.log(error);
    }
}

//* Folder --------------------------------------------------------
export function* handleAddFolderPost(action) {
    try {
        const { folderId, title } = action;
        // wait for this call to finish before we move on
        yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer
        yield put(addFolder(folderId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleRenameFolderPost(action) {
    try {
        const { folderId, title } = action;

        // wait for this call to finish before we move on
        yield call(requestRenameFolder, action);

        // stores data inside the redux store using the users reducer
        yield put(renameFolder(folderId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteFolderPost(action) {
    try {
        const { folderId } = action;

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        var groupOrder = folderState[folderId].groupOrder;

        var cardOrder = [];
        var taskOrder = [];

        groupOrder.map((groupId) => {
            folderState[folderId].hasGroups[groupId].cardOrder.map((cardId) =>
                taskOrder.push(
                    ...folderState[folderId].hasGroups[groupId].hasCards[cardId]
                        .taskOrder
                )
            );
            cardOrder.push(
                ...folderState[folderId].hasGroups[groupId].cardOrder
            );
        });

        yield all(
            taskOrder.map((taskId) =>
                call(requestDeleteTask, { userId: action.userId, taskId })
            )
        );
        yield all(
            cardOrder.map((cardId) =>
                call(requestDeleteCard, { userId: action.userId, cardId })
            )
        );
        yield all(
            groupOrder.map((groupId) =>
                call(requestDeleteGroup, { userId: action.userId, groupId })
            )
        );

        yield call(requestDeleteFolder, {
            userId: action.userId,
            folderId: action.folderId,
        });

        yield put(deleteFolder(folderId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

//* Group --------------------------------------------------------
export function* handleAddGroupPost(action) {
    try {
        const { history, folderId, groupId, title } = action;
        // wait for this call to finish before we move on
        yield call(requestPostGroup, action);

        // stores data inside the redux store using the users reducer
        yield put(addGroup(folderId, groupId, title));
        yield put(addFolderHasGroup(folderId, groupId));

        yield put(resetView());

        history.push(`/Notes/${folderId}/${groupId}`);
    } catch (error) {
        console.log(error);
    }
}
export function* handleRenameGroupPost(action) {
    try {
        const { folderId, groupId, title } = action;
        // wait for this call to finish before we move on
        yield call(requestRenameGroup, action);

        // stores data inside the redux store using the users reducer
        yield put(renameGroup(folderId, groupId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteGroupPost(action) {
    try {
        const { folderId, groupId } = action;

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        var cardOrder = folderState[folderId].hasGroups[groupId].cardOrder;

        var taskOrder = [];

        cardOrder.map((cardId) => {
            taskOrder.push(
                ...folderState[folderId].hasGroups[groupId].hasCards[cardId]
                    .taskOrder
            );
        });

        yield all(
            taskOrder.map((taskId) =>
                call(requestDeleteTask, { userId: action.userId, taskId })
            )
        );
        yield all(
            cardOrder.map((cardId) =>
                call(requestDeleteCard, { userId: action.userId, cardId })
            )
        );

        yield call(requestDeleteGroup, action);

        // stores data inside the redux store using the users reducer
        yield put(deleteFolderHasGroup(folderId, groupId));

        yield put(deleteGroup(folderId, groupId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleUpdateFolderHasGroupPost(action) {
    try {
        const {
            sourceFolderId,
            destinationFolderId,
            groupId,
            sourceIndex,
            destinationIndex,
        } = action;

        yield put(
            updateFolderHasGroup(
                sourceFolderId,
                destinationFolderId,
                groupId,
                sourceIndex,
                destinationIndex
            )
        );

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        yield call(requestUpdateFolderGroupOrder, {
            userId: action.userId,
            folderId: action.sourceFolderId,
            groupOrder: folderState[sourceFolderId].groupOrder,
        });

        if (sourceFolderId !== destinationFolderId) {
            yield put(
                moveFolderHasGroupData(
                    sourceFolderId,
                    destinationFolderId,
                    groupId
                )
            );
            yield put(
                updateDestinationFolderHasGroup(
                    destinationFolderId,
                    groupId,
                    destinationIndex
                )
            );
            yield put(deleteGroup(sourceFolderId, groupId));

            yield call(requestUpdateFolderGroupOrder, {
                userId: action.userId,
                folderId: action.destinationFolderId,
                groupOrder: folderState[destinationFolderId].groupOrder,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

//* Cards --------------------------------------------------------
export function* handleAddCardPost(action) {
    try {
        const { folderId, groupId, cardId, title } = action;
        // wait for this call to finish before we move on
        yield call(requestPostCard, action);

        // stores data inside the redux store using the users reducer
        yield put(addCard(folderId, groupId, cardId, title));
        yield put(addGroupHasCard(folderId, groupId, cardId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleRenameCardPost(action) {
    try {
        const { folderId, groupId, cardId, title } = action;
        // wait for this call to finish before we move on
        yield call(requestRenameCard, action);

        // stores data inside the redux store using the users reducer

        yield put(renameCard(folderId, groupId, cardId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteCardPost(action) {
    try {
        const { folderId, groupId, cardId } = action;

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        var taskOrder =
            folderState[folderId].hasGroups[groupId].hasCards[cardId].taskOrder;

        yield all(
            taskOrder.map((taskId) =>
                call(requestDeleteTask, { userId: action.userId, taskId })
            )
        );

        yield call(requestDeleteCard, action);

        yield put(deleteGroupHasCard(folderId, groupId, cardId));
        yield put(deleteCard(folderId, groupId, cardId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleUpdateGroupHasCardPost(action) {
    try {
        const {
            sourceFolderId,
            sourceGroupId,
            destinationFolderId,
            destinationGroupId,
            cardId,
            sourceIndex,
            destinationIndex,
        } = action;

        yield put(
            updateGroupHasCard(
                sourceFolderId,
                sourceGroupId,
                destinationFolderId,
                destinationGroupId,
                cardId,
                sourceIndex,
                destinationIndex
            )
        );

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        yield call(requestUpdateGroupCardOrder, {
            userId: action.userId,
            groupId: action.sourceGroupId,
            cardOrder:
                folderState[sourceFolderId].hasGroups[sourceGroupId].cardOrder,
        });

        if (sourceGroupId !== destinationGroupId) {
            yield put(
                moveGroupHasCardData(
                    sourceGroupId,
                    destinationGroupId,
                    sourceFolderId,
                    destinationFolderId,
                    cardId
                )
            );
            yield put(
                updateDestinationGroupHasCard(
                    destinationGroupId,
                    destinationFolderId,
                    cardId,
                    destinationIndex
                )
            );
            yield put(deleteCard(sourceFolderId, sourceGroupId, cardId));

            yield call(requestUpdateGroupCardOrder, {
                userId: action.userId,
                groupId: action.destinationGroupId,
                cardOrder:
                    folderState[destinationFolderId].hasGroups[
                        destinationGroupId
                    ].cardOrder,
            });
        }
    } catch (error) {
        console.log(error);
    }
}
//* Tasks --------------------------------------------------------
export function* handleAddTaskPost(action) {
    try {
        const { folderId, groupId, cardId, taskId, title, desc } = action;
        // wait for this call to finish before we move on
        yield call(requestPostTask, action);

        // stores data inside the redux store using the users reducer
        yield put(addTask(folderId, groupId, cardId, taskId, title, desc));
        yield put(addCardHasTask(folderId, groupId, cardId, taskId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleEditTaskPost(action) {
    try {
        const { folderId, groupId, cardId, taskId, title, desc } = action;
        // wait for this call to finish before we move on
        yield call(requestEditTask, action);

        // stores data inside the redux store using the users reducer

        yield put(editTask(folderId, groupId, cardId, taskId, title, desc));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteTaskPost(action) {
    try {
        const { folderId, groupId, cardId, taskId } = action;

        yield call(requestDeleteTask, action);

        yield put(deleteCardHasTask(folderId, groupId, cardId, taskId));
        yield put(deleteTask(folderId, groupId, cardId, taskId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleUpdateCardHasTaskPost(action) {
    try {
        const {
            sourceFolderId,
            sourceGroupId,
            sourceCardId,
            destinationFolderId,
            destinationGroupId,
            destinationCardId,
            taskId,
            sourceIndex,
            destinationIndex,
        } = action;

        yield put(
            updateCardHasTask(
                sourceFolderId,
                sourceGroupId,
                sourceCardId,
                destinationFolderId,
                destinationGroupId,
                destinationCardId,
                taskId,
                sourceIndex,
                destinationIndex
            )
        );

        const getFolderState = (state) => state.notesDuck.folders;
        const folderState = yield select(getFolderState);

        yield call(requestUpdateCardTaskOrder, {
            userId: action.userId,
            cardId: action.sourceCardId,
            taskOrder:
                folderState[sourceFolderId].hasGroups[sourceGroupId].hasCards[
                    sourceCardId
                ].taskOrder,
        });

        if (sourceCardId !== destinationCardId) {
            yield put(
                moveCardHasTaskData(
                    sourceFolderId,
                    sourceGroupId,
                    sourceCardId,
                    destinationFolderId,
                    destinationGroupId,
                    destinationCardId,
                    taskId
                )
            );
            yield put(
                updateDestinationCardHasTask(
                    destinationFolderId,
                    destinationGroupId,
                    destinationCardId,
                    taskId,
                    destinationIndex
                )
            );
            yield put(
                deleteTask(sourceFolderId, sourceGroupId, sourceCardId, taskId)
            );

            yield call(requestUpdateCardTaskOrder, {
                userId: action.userId,
                cardId: action.destinationCardId,
                taskOrder:
                    folderState[destinationFolderId].hasGroups[
                        destinationGroupId
                    ].hasCards[destinationCardId].taskOrder,
            });
        }
    } catch (error) {
        console.log(error);
    }
}
