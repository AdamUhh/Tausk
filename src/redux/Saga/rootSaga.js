import { all, takeLatest } from 'redux-saga/effects';
import {
    ADD_CARD_POST,
    ADD_FOLDER_POST,
    ADD_GROUP_POST,
    ADD_TASK_POST,
    DELETE_CARD_POST,
    DELETE_FOLDER_POST,
    DELETE_GROUP_POST,
    DELETE_TASK_POST,
    EDIT_TASK_POST,
    RENAME_CARD_POST,
    RENAME_FOLDER_POST,
    RENAME_GROUP_POST,
    UPDATE_CARD_HASTASK_POST,
    UPDATE_FOLDER_HASGROUP_POST,
    UPDATE_GROUP_HASCARD_POST,
} from '../../redux/ducks/notesDuck';
import {
    handleAddCardPost,
    handleAddFolderPost,
    handleAddGroupPost,
    handleAddTaskPost,
    handleDeleteCardPost,
    handleDeleteFolderPost,
    handleDeleteGroupPost,
    handleDeleteTaskPost,
    handleEditTaskPost,
    handleRenameCardPost,
    handleRenameFolderPost,
    handleRenameGroupPost,
    handleUpdateFolderHasGroupPost,
    handleUpdateGroupHasCardPost,
    handleUpdateCardHasTaskPost,
} from './notes/notesHandler';
// ? the * after function is a generator function
// ? This is where we look for any actions that have been dispatched by the redux store
// ? we map it to the handler functions that will actually call the requests that make the API calls
function* watchAll() {
    yield all([
        takeLatest(ADD_FOLDER_POST, handleAddFolderPost),
        takeLatest(ADD_GROUP_POST, handleAddGroupPost),
        takeLatest(ADD_CARD_POST, handleAddCardPost),
        takeLatest(ADD_TASK_POST, handleAddTaskPost),
        takeLatest(DELETE_FOLDER_POST, handleDeleteFolderPost),
        takeLatest(DELETE_GROUP_POST, handleDeleteGroupPost),
        takeLatest(DELETE_CARD_POST, handleDeleteCardPost),
        takeLatest(DELETE_TASK_POST, handleDeleteTaskPost),
        takeLatest(RENAME_GROUP_POST, handleRenameGroupPost),
        takeLatest(RENAME_FOLDER_POST, handleRenameFolderPost),
        takeLatest(RENAME_CARD_POST, handleRenameCardPost),
        takeLatest(EDIT_TASK_POST, handleEditTaskPost),
        takeLatest(UPDATE_FOLDER_HASGROUP_POST, handleUpdateFolderHasGroupPost),
        takeLatest(UPDATE_GROUP_HASCARD_POST, handleUpdateGroupHasCardPost),
        takeLatest(UPDATE_CARD_HASTASK_POST, handleUpdateCardHasTaskPost),
    ]);
}

export default watchAll;
