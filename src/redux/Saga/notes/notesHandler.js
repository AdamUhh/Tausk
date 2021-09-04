import { put } from 'redux-saga/effects';
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

//Todo: IMPORTANT - additionally, make a modal pop up that asks if you would like to delete all the

//Todo: groups/cards/tasks associated with the deleted target or move them somewhere else

//Todo: When deleting a group, redirect to first group (if there is one) or to /Notes
//Todo: When deleting a (focused) card, redirect to that cards previous group

//* Folder --------------------------------------------------------
export function* handleAddFolderPost(action) {
    try {
        const { userId, folderId, title } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer
        yield put(addFolder(folderId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleRenameFolderPost(action) {
    try {
        const { userId, folderId, title } = action;

        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(renameFolder(folderId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteFolderPost(action) {
    try {
        const { userId, folderId } = action;

        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(deleteFolder(folderId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

//* Group --------------------------------------------------------
export function* handleAddGroupPost(action) {
    try {
        const { history, userId, folderId, groupId, title } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

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
        const { userId, folderId, groupId, title } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(renameGroup(folderId, groupId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteGroupPost(action) {
    try {
        const { userId, folderId, groupId } = action;

        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

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
            userId,
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
        }
    } catch (error) {
        console.log(error);
    }
}

//* Cards --------------------------------------------------------
export function* handleRenameCardPost(action) {
    try {
        const { userId, folderId, groupId, cardId, title } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(renameCard(folderId, groupId, cardId, title));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleDeleteCardPost(action) {
    try {
        const { userId, folderId, groupId, cardId } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(deleteGroupHasCard(folderId, groupId, cardId));
        yield put(deleteCard(folderId, groupId, cardId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleAddCardPost(action) {
    try {
        const { userId, folderId, groupId, cardId, title } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer
        yield put(addCard(folderId, groupId, cardId, title));
        yield put(addGroupHasCard(folderId, groupId, cardId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleUpdateGroupHasCardPost(action) {
    try {
        const {
            userId,
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
        }
    } catch (error) {
        console.log(error);
    }
}
//* Tasks --------------------------------------------------------
export function* handleDeleteTaskPost(action) {
    try {
        const { userId, folderId, groupId, cardId, taskId } = action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(deleteCardHasTask(folderId, groupId, cardId, taskId));
        yield put(deleteTask(folderId, groupId, cardId, taskId));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}

export function* handleAddTaskPost(action) {
    try {
        const { userId, folderId, groupId, cardId, taskId, title, desc } =
            action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

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
        const { userId, folderId, groupId, cardId, taskId, title, desc } =
            action;
        // wait for this call to finish before we move on
        // yield call(requestPostFolder, action);

        // stores data inside the redux store using the users reducer

        yield put(editTask(folderId, groupId, cardId, taskId, title, desc));

        yield put(resetView());
    } catch (error) {
        console.log(error);
    }
}
export function* handleUpdateCardHasTaskPost(action) {
    try {
        const {
            userId,
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
        }
    } catch (error) {
        console.log(error);
    }
}
