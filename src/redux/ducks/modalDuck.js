export const NONE = 'NONE';
const RESET_VIEW = 'RESET_VIEW';
export const VIEW_THEMES = 'VIEW_THEMES';

export const ADD_FOLDER_MODAL = 'ADD_FOLDER_MODAL';
export const ADD_GROUP_MODAL = 'ADD_GROUP_MODAL';
export const ADD_CARD_MODAL = 'ADD_CARD_MODAL';
export const ADD_TASK_MODAL = 'ADD_TASK_MODAL';

export const RENAME_FOLDER_MODAL = 'RENAME_FOLDER_MODAL';
export const RENAME_GROUP_MODAL = 'RENAME_GROUP_MODAL';
export const RENAME_CARD_MODAL = 'RENAME_CARD_MODAL';
export const EDIT_TASK_MODAL = 'EDIT_TASK_MODAL';

export const DELETE_GROUP_MODAL = 'DELETE_GROUP_MODAL';
export const DELETE_FOLDER_MODAL = 'DELETE_FOLDER_MODAL';
export const DELETE_CARD_MODAL = 'DELETE_CARD_MODAL';
export const DELETE_TASK_MODAL = 'DELETE_TASK_MODAL';

const initialState = {
    mode: NONE,
};

// ? actions
export const resetView = () => ({
    type: RESET_VIEW,
});
export const viewTheme = () => ({
    type: VIEW_THEMES,
});

//* Add
export const addFolderModal = () => ({
    type: ADD_FOLDER_MODAL,
});
export const addGroupModal = () => ({
    type: ADD_GROUP_MODAL,
});
export const addCardModal = () => ({
    type: ADD_CARD_MODAL,
});
export const addTaskModal = (cardId) => ({
    type: ADD_TASK_MODAL,
    cardId,
});

//* Rename/Edit
export const renameFolderModal = (folderId, title) => ({
    type: RENAME_FOLDER_MODAL,
    folderId,
    title,
});
export const renameGroupModal = (folderId, groupId, title) => ({
    type: RENAME_GROUP_MODAL,
    folderId,
    groupId,
    title,
});
export const renameCardModal = (folderId, groupId, cardId, title) => ({
    type: RENAME_CARD_MODAL,
    folderId,
    groupId,
    cardId,
    title,
});
export const editTaskModal = (folderId, groupId, cardId, taskId) => ({
    type: EDIT_TASK_MODAL,
    folderId,
    groupId,
    cardId,
    taskId,
});

//* Delete
export const deleteFolderModal = (folderId, title) => ({
    type: DELETE_FOLDER_MODAL,
    folderId,
    title,
});
export const deleteGroupModal = (folderId, groupId, title) => ({
    type: DELETE_GROUP_MODAL,
    folderId,
    groupId,
    title,
});
export const deleteCardModal = (folderId, groupId, cardId, title) => ({
    type: DELETE_CARD_MODAL,
    folderId,
    groupId,
    cardId,
    title,
});
export const deleteTaskModal = (
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc
) => ({
    type: DELETE_TASK_MODAL,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
});

// ? Reducer
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_VIEW:
            return { mode: NONE };
        case VIEW_THEMES:
            return { ...state, mode: VIEW_THEMES };

        case ADD_FOLDER_MODAL:
            return {
                ...state,
                mode: ADD_FOLDER_MODAL,
            };
        case ADD_GROUP_MODAL:
            return {
                ...state,
                mode: ADD_GROUP_MODAL,
            };
        case ADD_CARD_MODAL:
            return { ...state, mode: ADD_CARD_MODAL };
        case ADD_TASK_MODAL:
            return { ...state, mode: ADD_TASK_MODAL, cardId: action.cardId };

        case RENAME_FOLDER_MODAL:
            return {
                ...state,
                mode: RENAME_FOLDER_MODAL,
                folderId: action.folderId,
                title: action.title,
            };
        case RENAME_GROUP_MODAL:
            return {
                ...state,
                mode: RENAME_GROUP_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                title: action.title,
            };
        case RENAME_CARD_MODAL:
            return {
                ...state,
                mode: RENAME_CARD_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                cardId: action.cardId,
                title: action.title,
            };
        case EDIT_TASK_MODAL:
            return {
                ...state,
                mode: EDIT_TASK_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                cardId: action.cardId,
                taskId: action.taskId,
            };

        case DELETE_FOLDER_MODAL:
            return {
                ...state,
                mode: DELETE_FOLDER_MODAL,
                folderId: action.folderId,
                title: action.title,
            };
        case DELETE_GROUP_MODAL:
            return {
                ...state,
                mode: DELETE_GROUP_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                title: action.title,
            };
        case DELETE_CARD_MODAL:
            return {
                ...state,
                mode: DELETE_CARD_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                cardId: action.cardId,
                title: action.title,
            };
        case DELETE_TASK_MODAL:
            return {
                ...state,
                mode: DELETE_TASK_MODAL,
                folderId: action.folderId,
                groupId: action.groupId,
                cardId: action.cardId,
                taskId: action.taskId,
                title: action.title,
                desc: action.desc,
            };

        default:
            return { ...state };
    }
};
export default modalReducer;
