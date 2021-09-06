import { v4 as uuidV4 } from 'uuid';

const initialState = {
    folders: {
        SkeletonFolder: {
            folderId: 'SkeletonFolder',
            title: 'SkeletonFolder',
            groupOrder: ['SkeletonGroup'],
            hasGroups: {
                SkeletonGroup: {
                    groupId: 'SkeletonGroup',
                    title: 'SkeletonGroup',
                    cardOrder: ['SkeletonCard'],
                    hasCards: {
                        SkeletonCard: {
                            cardId: 'SkeletonCard',
                            title: 'SkeletonCard',
                            taskOrder: ['SkeletonTask'],
                            hasTasks: {
                                SkeletonTask: {
                                    taskId: 'SkeletonTask',
                                    title: 'SkeletonTask',
                                    desc: '',
                                },
                            },
                        },
                    },
                },
            },
        },
        SSkeletonFolder: {
            folderId: 'SSkeletonFolder',
            title: 'SSkeletonFolder',
            groupOrder: ['SSkeletonGroup'],
            hasGroups: {
                SSkeletonGroup: {
                    groupId: 'SSkeletonGroup',
                    title: 'SSkeletonGroup',
                    cardOrder: ['SSkeletonCard'],
                    hasCards: {
                        SSkeletonCard: {
                            cardId: 'SSkeletonCard',
                            title: 'SSkeletonCard',
                            taskOrder: ['SSkeletonTask'],
                            hasTasks: {
                                SSkeletonTask: {
                                    taskId: 'SSkeletonTask',
                                    title: 'SSkeletonTask',
                                    desc: '',
                                },
                            },
                        },
                    },
                },
            },
        },

        // Todo: {
        //     folderId: 'Todo',
        //     title: 'Todo',
        //     groupOrder: [],
        //     hasGroups: {},
        // },
        //         TodoGroup1: {
        //             groupId: 'TodoGroup1',
        //             title: 'groupTitle1',
        //             cardOrder: ['TodoCard1'],
        //             hasCards: {
        //                 TodoCard1: {
        //                     cardId: 'TodoCard1',
        //                     title: 'cardTitle1',
        //                     taskOrder: ['TodoTask1'],
        //                     hasTasks: {
        //                         TodoTask1: {
        //                             taskId: 'taskId1',
        //                             title: 'taskTitle1',
        //                             desc: {},
        //                         },
        //                     },
        //                 },
        //             },
        //         },
        //         TodoGroup2: {
        //             groupId: 'TodoGroup2',
        //             title: 'groupTitle2',
        //             cardOrder: ['TodoCard2', 'TodoCard3'],
        //             hasCards: {
        //                 TodoCard2: {
        //                     cardId: 'TodoCard2',
        //                     title: 'cardTitle2',
        //                     taskOrder: ['TodoTask2'],
        //                     hasTasks: {
        //                         TodoTask2: {
        //                             taskId: 'taskId2',
        //                             title: 'taskTitle2',
        //                             desc: {},
        //                         },
        //                     },
        //                 },
        //                 TodoCard3: {
        //                     cardId: 'TodoCard3',
        //                     title: 'cardTitle3',
        //                     taskOrder: ['TodoTask3'],
        //                     hasTasks: {
        //                         TodoTask3: {
        //                             taskId: 'taskId3',
        //                             title: 'taskTitle3',
        //                             desc: {},
        //                         },
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // },
        // Todo2: {
        //     folderId: 'Todo2',
        //     title: 'Todo2',
        //     groupOrder: ['Todo2Group1'],
        //     hasGroups: {
        //         Todo2Group1: {
        //             groupId: 'Todo2Group1',
        //             title: 'group2Title1',
        //             cardOrder: ['Todo2Card1'],
        //             hasCards: {
        //                 Todo2Card1: {
        //                     cardId: 'Todo2Card1',
        //                     title: 'card2Title1',
        //                     taskOrder: ['Todo2Task1'],
        //                     hasTasks: {
        //                         Todo2Task1: {
        //                             taskId: 'task2Id1',
        //                             title: 'task2Title1',
        //                             desc: {},
        //                         },
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // },
    },
    settings: {
        folderOrder: ['SkeletonFolder', 'SSkeletonFolder'],
    },
};

// ? Constants

export const GET_DATA_POST = 'GET_DATA_POST';
export const GET_DATA_AND_UPDATE_STATE = 'GET_DATA_AND_UPDATE_STATE';

//* ADD
export const ADD_FOLDER_POST = 'ADD_FOLDER_POST';
export const ADD_FOLDER = 'ADD_FOLDER';

export const ADD_GROUP_POST = 'ADD_GROUP_POST';
export const ADD_GROUP = 'ADD_GROUP';

export const ADD_CARD_POST = 'ADD_CARD_POST';
export const ADD_CARD = 'ADD_CARD';

export const ADD_TASK_POST = 'ADD_TASK_POST';
export const ADD_TASK = 'ADD_TASK';

//* RENAME/EDIT
export const RENAME_FOLDER_POST = 'RENAME_FOLDER_POST';
export const RENAME_FOLDER = 'RENAME_FOLDER';

export const RENAME_GROUP_POST = 'RENAME_GROUP_POST';
export const RENAME_GROUP = 'RENAME_GROUP';

export const RENAME_CARD_POST = 'RENAME_CARD_POST';
export const RENAME_CARD = 'RENAME_CARD';

export const EDIT_TASK_POST = 'EDIT_TASK_POST';
export const EDIT_TASK = 'EDIT_TASK';

//* DELETE
export const DELETE_FOLDER_POST = 'DELETE_FOLDER_POST';
export const DELETE_FOLDER = 'DELETE_FOLDER';

export const DELETE_GROUP_POST = 'DELETE_GROUP_POST';
export const DELETE_GROUP = 'DELETE_GROUP';

export const DELETE_CARD_POST = 'DELETE_CARD_POST';
export const DELETE_CARD = 'DELETE_CARD';

export const DELETE_TASK_POST = 'DELETE_TASK_POST';
export const DELETE_TASK = 'DELETE_TASK';

//* ADD HAS... ARRAY
export const ADD_NOTES_HASFOLDER_POST = 'ADD_NOTES_HASFOLDER_POST';
export const ADD_NOTES_HASFOLDER = 'ADD_NOTES_HASFOLDER';

export const ADD_FOLDER_HASGROUP_POST = 'ADD_FOLDER_HASGROUP_POST';
export const ADD_FOLDER_HASGROUP = 'ADD_FOLDER_HASGROUP';

export const ADD_GROUP_HASCARD_POST = 'ADD_GROUP_HASCARD_POST';
export const ADD_GROUP_HASCARD = 'ADD_GROUP_HASCARD';

export const ADD_CARD_HASTASK_POST = 'ADD_CARD_HASTASK_POST';
export const ADD_CARD_HASTASK = 'ADD_CARD_HASTASK';

//* UPDATE HAS... ARRAY
export const UPDATE_NOTES_HASFOLDER_POST = 'UPDATE_NOTES_HASFOLDER_POST';
export const UPDATE_NOTES_HASFOLDER = 'UPDATE_NOTES_HASFOLDER';

export const UPDATE_FOLDER_HASGROUP_POST = 'UPDATE_FOLDER_HASGROUP_POST';
export const UPDATE_FOLDER_HASGROUP = 'UPDATE_FOLDER_HASGROUP';
export const UPDATE_DESTINATIONFOLDER_HASGROUP =
    'UPDATE_DESTINATIONFOLDER_HASGROUP';
export const MOVE_FOLDER_HASGROUP_DATA = 'MOVE_FOLDER_HASGROUP_DATA';

export const UPDATE_GROUP_HASCARD_POST = 'UPDATE_GROUP_HASCARD_POST';
export const UPDATE_GROUP_HASCARD = 'UPDATE_GROUP_HASCARD';
export const UPDATE_DESTINATIONGROUP_HASCARD =
    'UPDATE_DESTINATIONGROUP_HASCARD';
export const MOVE_GROUP_HASCARD_DATA = 'MOVE_GROUP_HASCARD_DATA';

export const UPDATE_CARD_HASTASK_POST = 'UPDATE_CARD_HASTASK_POST';
export const UPDATE_CARD_HASTASK = 'UPDATE_CARD_HASTASK';
export const UPDATE_DESTINATIONCARD_HASTASK = 'UPDATE_DESTINATIONCARD_HASTASK';
export const MOVE_CARD_HASTASK_DATA = 'MOVE_CARD_HASTASK_DATA';

//* DELETE HAS... ARRAY
export const DELETE_NOTES_HASFOLDER_POST = 'DELETE_NOTES_HASFOLDER_POST';
export const DELETE_NOTES_HASFOLDER = 'DELETE_NOTES_HASFOLDER';

export const DELETE_FOLDER_HASGROUP_POST = 'DELETE_FOLDER_HASGROUP_POST';
export const DELETE_FOLDER_HASGROUP = 'DELETE_FOLDER_HASGROUP';

export const DELETE_GROUP_HASCARD_POST = 'DELETE_GROUP_HASCARD_POST';
export const DELETE_GROUP_HASCARD = 'DELETE_GROUP_HASCARD';

export const DELETE_CARD_HASTASK_POST = 'DELETE_CARD_HASTASK_POST';
export const DELETE_CARD_HASTASK = 'DELETE_CARD_HASTASK';

// ? Actions

export const getDataPost = (userId) => ({
    type: GET_DATA_POST,
    userId,
});
export const getDataAndUpdateState = (Notes, username, folderOrder) => ({
    type: GET_DATA_AND_UPDATE_STATE,
    Notes,
    username,
    folderOrder,
});
//* Add --------------------------------------------------------
export const addFolderPost = (userId, title) => ({
    type: ADD_FOLDER_POST,
    userId,
    folderId: 'folder_' + uuidV4(),
    title,
});
export const addFolder = (folderId, title) => ({
    type: ADD_FOLDER,
    folderId,
    title,
});

export const addGroupPost = (history, userId, folderId, title) => ({
    type: ADD_GROUP_POST,
    history,
    userId,
    folderId,
    groupId: 'group_' + uuidV4(),
    title,
});
export const addGroup = (folderId, groupId, title) => ({
    type: ADD_GROUP,
    folderId,
    groupId,
    title,
});

export const addCardPost = (userId, folderId, groupId, title) => ({
    type: ADD_CARD_POST,
    userId,
    folderId,
    groupId,
    cardId: 'card_' + uuidV4(),
    title,
});
export const addCard = (folderId, groupId, cardId, title) => ({
    type: ADD_CARD,
    folderId,
    groupId,
    cardId,
    title,
});

export const addTaskPost = (
    userId,
    folderId,
    groupId,
    cardId,
    title,
    desc
) => ({
    type: ADD_TASK_POST,
    userId,
    folderId,
    groupId,
    cardId,
    taskId: 'task_' + uuidV4(),
    title,
    desc,
});
export const addTask = (folderId, groupId, cardId, taskId, title, desc) => ({
    type: ADD_TASK,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
});

//* ADD HAS... ARRAY --------------------------------------------------------

export const addNotesHasFolder = (folderId) => ({
    type: ADD_NOTES_HASFOLDER,
    folderId,
});

export const addFolderHasGroup = (folderId, groupId) => ({
    type: ADD_FOLDER_HASGROUP,
    folderId,
    groupId,
});

export const addGroupHasCard = (folderId, groupId, cardId) => ({
    type: ADD_GROUP_HASCARD,
    folderId,
    groupId,
    cardId,
});

export const addCardHasTask = (folderId, groupId, cardId, taskId) => ({
    type: ADD_CARD_HASTASK,
    folderId,
    groupId,
    cardId,
    taskId,
});

//* UPDATE HAS...ARRAY --------------------------------------------------------
export const updateNotesHasFolderPost = (
    userId,
    folderId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_NOTES_HASFOLDER_POST,
    userId,
    folderId,
    sourceIndex,
    destinationIndex,
});
export const updateNotesHasFolder = (
    folderId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_NOTES_HASFOLDER,
    folderId,
    sourceIndex,
    destinationIndex,
});

export const updateFolderHasGroupPost = (
    userId,
    sourceFolderId,
    destinationFolderId,
    groupId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_FOLDER_HASGROUP_POST,
    userId,
    sourceFolderId,
    destinationFolderId,
    groupId,
    sourceIndex,
    destinationIndex,
});
export const updateFolderHasGroup = (
    sourceFolderId,
    destinationFolderId,
    groupId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_FOLDER_HASGROUP,
    sourceFolderId,
    destinationFolderId,
    groupId,
    sourceIndex,
    destinationIndex,
});
export const updateDestinationFolderHasGroup = (
    destinationFolderId,
    groupId,
    destinationIndex
) => ({
    type: UPDATE_DESTINATIONFOLDER_HASGROUP,
    destinationFolderId,
    groupId,
    destinationIndex,
});
export const moveFolderHasGroupData = (
    sourceFolderId,
    destinationFolderId,
    groupId
) => ({
    type: MOVE_FOLDER_HASGROUP_DATA,
    sourceFolderId,
    destinationFolderId,
    groupId,
});

//* ------------------------------------------------------------------------
export const updateGroupHasCardPost = (
    userId,
    sourceFolderId,
    sourceGroupId,
    destinationFolderId,
    destinationGroupId,
    cardId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_GROUP_HASCARD_POST,
    userId,
    sourceFolderId,
    sourceGroupId,
    destinationFolderId,
    destinationGroupId,
    cardId,
    sourceIndex,
    destinationIndex,
});
export const updateGroupHasCard = (
    sourceFolderId,
    sourceGroupId,
    destinationFolderId,
    destinationGroupId,
    cardId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_GROUP_HASCARD,
    sourceFolderId,
    sourceGroupId,
    destinationFolderId,
    destinationGroupId,
    cardId,
    sourceIndex,
    destinationIndex,
});
export const updateDestinationGroupHasCard = (
    destinationGroupId,
    destinationFolderId,
    cardId,
    destinationIndex
) => ({
    type: UPDATE_DESTINATIONGROUP_HASCARD,
    destinationGroupId,
    destinationFolderId,
    cardId,
    destinationIndex,
});
export const moveGroupHasCardData = (
    sourceGroupId,
    destinationGroupId,
    sourceFolderId,
    destinationFolderId,
    cardId
) => ({
    type: MOVE_GROUP_HASCARD_DATA,
    sourceGroupId,
    destinationGroupId,
    sourceFolderId,
    destinationFolderId,
    cardId,
});

//* ------------------------------------------------------------------------
export const updateCardHasTaskPost = (
    userId,
    sourceFolderId,
    sourceGroupId,
    sourceCardId,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_CARD_HASTASK_POST,
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
});
export const updateCardHasTask = (
    sourceFolderId,
    sourceGroupId,
    sourceCardId,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
    sourceIndex,
    destinationIndex
) => ({
    type: UPDATE_CARD_HASTASK,
    sourceFolderId,
    sourceGroupId,
    sourceCardId,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
    sourceIndex,
    destinationIndex,
});
export const updateDestinationCardHasTask = (
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
    destinationIndex
) => ({
    type: UPDATE_DESTINATIONCARD_HASTASK,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
    destinationIndex,
});
export const moveCardHasTaskData = (
    sourceFolderId,
    sourceGroupId,
    sourceCardId,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId
) => ({
    type: MOVE_CARD_HASTASK_DATA,
    sourceFolderId,
    sourceGroupId,
    sourceCardId,
    destinationFolderId,
    destinationGroupId,
    destinationCardId,
    taskId,
});

//* DELETE --------------------------------------------------------
export const deleteFolderPost = (userId, folderId) => ({
    type: DELETE_FOLDER_POST,
    userId,
    folderId,
});
export const deleteFolder = (folderId) => ({
    type: DELETE_FOLDER,
    folderId,
});

export const deleteGroupPost = (userId, folderId, groupId) => ({
    type: DELETE_GROUP_POST,
    userId,
    folderId,
    groupId,
});
export const deleteGroup = (folderId, groupId) => ({
    type: DELETE_GROUP,
    folderId,
    groupId,
});

export const deleteCardPost = (userId, folderId, groupId, cardId) => ({
    type: DELETE_CARD_POST,
    userId,
    folderId,
    groupId,
    cardId,
});
export const deleteCard = (folderId, groupId, cardId) => ({
    type: DELETE_CARD,
    folderId,
    groupId,
    cardId,
});

export const deleteTaskPost = (userId, folderId, groupId, cardId, taskId) => ({
    type: DELETE_TASK_POST,

    userId,
    folderId,
    groupId,
    cardId,
    taskId,
});
export const deleteTask = (folderId, groupId, cardId, taskId) => ({
    type: DELETE_TASK,
    folderId,
    groupId,
    cardId,
    taskId,
});
//* DELETE HAS...ARRAY --------------------------------------------------------
export const deleteNotesHasFolder = (folderId) => ({
    type: DELETE_NOTES_HASFOLDER,
    folderId,
});
export const deleteFolderHasGroup = (folderId, groupId) => ({
    type: DELETE_FOLDER_HASGROUP,
    folderId,
    groupId,
});

export const deleteGroupHasCard = (folderId, groupId, cardId) => ({
    type: DELETE_GROUP_HASCARD,
    folderId,
    groupId,
    cardId,
});

export const deleteCardHasTask = (folderId, groupId, cardId, taskId) => ({
    type: DELETE_CARD_HASTASK,
    folderId,
    groupId,
    cardId,
    taskId,
});

//* RENAME/EDIT --------------------------------------------------------
export const renameFolderPost = (userId, folderId, title) => ({
    type: RENAME_FOLDER_POST,
    userId,
    folderId,
    title,
});
export const renameFolder = (folderId, title) => ({
    type: RENAME_FOLDER,
    folderId,
    title,
});

export const renameGroupPost = (userId, folderId, groupId, title) => ({
    type: RENAME_GROUP_POST,
    userId,
    folderId,
    groupId,
    title,
});
export const renameGroup = (folderId, groupId, title) => ({
    type: RENAME_GROUP,
    folderId,
    groupId,
    title,
});

export const renameCardPost = (userId, folderId, groupId, cardId, title) => ({
    type: RENAME_CARD_POST,
    userId,
    folderId,
    groupId,
    cardId,
    title,
});
export const renameCard = (folderId, groupId, cardId, title) => ({
    type: RENAME_CARD,
    folderId,
    groupId,
    cardId,
    title,
});

export const editTaskPost = (
    userId,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc
) => ({
    type: EDIT_TASK_POST,
    userId,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
});
export const editTask = (folderId, groupId, cardId, taskId, title, desc) => ({
    type: EDIT_TASK,
    folderId,
    groupId,
    cardId,
    taskId,
    title,
    desc,
});

// ? Reducer
const notesDuck = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_AND_UPDATE_STATE: {
            return {
                ...state,
                folders: action.Notes,
                settings: {
                    username: action.username,
                    folderOrder: action.folderOrder,
                },
            };
        }
        case ADD_NOTES_HASFOLDER: {
            const { folderId } = action;

            return {
                ...state,
                settings: {
                    ...state.settings,
                    folderOrder: [...state.settings.folderOrder, folderId],
                },
            };
        }
        case ADD_FOLDER: {
            const { folderId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        folderId: folderId,
                        title: title,
                        groupOrder: [],
                        hasGroups: {},
                    },
                },
            };
        }
        case ADD_FOLDER_HASGROUP: {
            const { folderId, groupId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        groupOrder: [
                            ...state.folders[folderId].groupOrder,
                            groupId,
                        ],
                    },
                },
            };
        }
        case ADD_GROUP: {
            const { folderId, groupId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                groupId: groupId,
                                title: title,
                                cardOrder: [],
                                hasCards: {},
                            },
                        },
                    },
                },
            };
        }
        case ADD_GROUP_HASCARD: {
            const { folderId, groupId, cardId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                cardOrder: [
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].cardOrder,
                                    cardId,
                                ],
                            },
                        },
                    },
                },
            };
        }
        case ADD_CARD: {
            const { folderId, groupId, cardId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        cardId: cardId,
                                        title: title,
                                        taskOrder: [],
                                        hasTasks: {},
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case ADD_CARD_HASTASK: {
            const { folderId, groupId, cardId, taskId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        taskOrder: [
                                            ...state.folders[folderId]
                                                .hasGroups[groupId].hasCards[
                                                cardId
                                            ].taskOrder,
                                            taskId,
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case ADD_TASK: {
            const { folderId, groupId, cardId, taskId, title, desc } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        hasTasks: {
                                            ...state.folders[folderId]
                                                .hasGroups[groupId].hasCards[
                                                cardId
                                            ].hasTasks,
                                            [taskId]: {
                                                taskId: taskId,
                                                title: title,
                                                desc: desc,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case DELETE_NOTES_HASFOLDER: {
            const { folderId } = action;

            return {
                ...state,
                settings: {
                    ...state.settings,
                    folderOrder: [
                        ...state.settings.folderOrder.filter(
                            (folder) => folder !== folderId
                        ),
                    ],
                },
            };
        }
        case DELETE_FOLDER: {
            const { folderId } = action;

            const { [folderId]: tmp, ...rest } = state.folders;

            return {
                ...state,
                folders: rest,
            };
        }
        case DELETE_FOLDER_HASGROUP: {
            const { folderId, groupId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        groupOrder: [
                            ...state.folders[folderId].groupOrder.filter(
                                (group) => group !== groupId
                            ),
                        ],
                    },
                },
            };
        }
        case DELETE_GROUP: {
            const { folderId, groupId } = action;

            const { [groupId]: tmp, ...rest } =
                state.folders[folderId].hasGroups;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: { ...state.folders[folderId], hasGroups: rest },
                },
            };
        }
        case DELETE_GROUP_HASCARD: {
            const { folderId, groupId, cardId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                cardOrder: [
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].cardOrder.filter(
                                        (card) => card !== cardId
                                    ),
                                ],
                            },
                        },
                    },
                },
            };
        }
        case DELETE_CARD: {
            const { folderId, groupId, cardId } = action;

            const { [cardId]: tmp, ...rest } =
                state.folders[folderId].hasGroups[groupId].hasCards;
            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: rest,
                            },
                        },
                    },
                },
            };
        }
        case DELETE_CARD_HASTASK: {
            const { folderId, groupId, cardId, taskId } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        taskOrder: [
                                            ...state.folders[
                                                folderId
                                            ].hasGroups[groupId].hasCards[
                                                cardId
                                            ].taskOrder.filter(
                                                (task) => task !== taskId
                                            ),
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case DELETE_TASK: {
            const { folderId, groupId, cardId, taskId } = action;

            const { [taskId]: tmp, ...rest } =
                state.folders[folderId].hasGroups[groupId].hasCards[cardId]
                    .hasTasks;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        hasTasks: rest,
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }

        case RENAME_FOLDER: {
            const { folderId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        title: title,
                    },
                },
            };
        }
        case RENAME_GROUP: {
            const { folderId, groupId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                title: title,
                            },
                        },
                    },
                },
            };
        }
        case RENAME_CARD: {
            const { folderId, groupId, cardId, title } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        title: title,
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case EDIT_TASK: {
            const { folderId, groupId, cardId, taskId, title, desc } = action;

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [folderId]: {
                        ...state.folders[folderId],
                        hasGroups: {
                            ...state.folders[folderId].hasGroups,
                            [groupId]: {
                                ...state.folders[folderId].hasGroups[groupId],
                                hasCards: {
                                    ...state.folders[folderId].hasGroups[
                                        groupId
                                    ].hasCards,
                                    [cardId]: {
                                        ...state.folders[folderId].hasGroups[
                                            groupId
                                        ].hasCards[cardId],
                                        hasTasks: {
                                            ...state.folders[folderId]
                                                .hasGroups[groupId].hasCards[
                                                cardId
                                            ].hasTasks,
                                            [taskId]: {
                                                taskId: taskId,
                                                title: title,
                                                desc: desc,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }

        case UPDATE_NOTES_HASFOLDER: {
            const { folderId, sourceIndex, destinationIndex } = action;

            const settingsData = state.settings;
            const newNotesHasFolderArr = settingsData.folderOrder;

            newNotesHasFolderArr.splice(sourceIndex, 1);
            newNotesHasFolderArr.splice(destinationIndex, 0, folderId);

            return {
                ...state,
                settings: {
                    ...state.settings,
                    folderOrder: newNotesHasFolderArr,
                },
            };
        }

        case UPDATE_FOLDER_HASGROUP: {
            const {
                sourceFolderId,
                destinationFolderId,
                groupId,
                sourceIndex,
                destinationIndex,
            } = action;

            if (sourceFolderId === destinationFolderId) {
                const folderData = state.folders[sourceFolderId];
                const newFolderHasGroupArr = folderData.groupOrder;

                newFolderHasGroupArr.splice(sourceIndex, 1);
                newFolderHasGroupArr.splice(destinationIndex, 0, groupId);

                return {
                    ...state,
                    folders: {
                        ...state.folders,
                        [sourceFolderId]: {
                            ...state.folders[sourceFolderId],
                            groupOrder: newFolderHasGroupArr,
                        },
                    },
                };
            }

            const folderData = state.folders[sourceFolderId];
            const newFolderHasGroupArr = folderData.groupOrder;
            newFolderHasGroupArr.splice(sourceIndex, 1);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [sourceFolderId]: {
                        ...state.folders[sourceFolderId],
                        groupOrder: newFolderHasGroupArr,
                    },
                },
            };
        }
        case UPDATE_DESTINATIONFOLDER_HASGROUP: {
            const { destinationFolderId, groupId, destinationIndex } = action;

            const folderData = state.folders[destinationFolderId];
            const newFolderHasGroupArr = folderData.groupOrder;

            newFolderHasGroupArr.splice(destinationIndex, 0, groupId);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        groupOrder: newFolderHasGroupArr,
                    },
                },
            };
        }
        case MOVE_FOLDER_HASGROUP_DATA: {
            const { sourceFolderId, destinationFolderId, groupId } = action;

            const groupData = state.folders[sourceFolderId].hasGroups[groupId];

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        hasGroups: {
                            ...state.folders[destinationFolderId].hasGroups,
                            [groupId]: groupData,
                        },
                    },
                },
            };
        }

        case UPDATE_GROUP_HASCARD: {
            const {
                sourceFolderId,
                sourceGroupId,
                destinationFolderId,
                destinationGroupId,
                cardId,
                sourceIndex,
                destinationIndex,
            } = action;

            if (sourceGroupId === destinationGroupId) {
                const groupData =
                    state.folders[sourceFolderId].hasGroups[sourceGroupId];
                const newGroupHasCardArr = groupData.cardOrder;

                newGroupHasCardArr.splice(sourceIndex, 1);
                newGroupHasCardArr.splice(destinationIndex, 0, cardId);

                return {
                    ...state,
                    folders: {
                        ...state.folders,
                        [sourceFolderId]: {
                            ...state.folders[sourceFolderId],
                            hasGroups: {
                                ...state.folders[sourceFolderId].hasGroups,
                                [sourceGroupId]: {
                                    ...state.folders[sourceFolderId].hasGroups[
                                        sourceGroupId
                                    ],
                                    cardOrder: newGroupHasCardArr,
                                },
                            },
                        },
                    },
                };
            }

            const groupData =
                state.folders[sourceFolderId].hasGroups[sourceGroupId];
            const newGroupHasCardArr = groupData.cardOrder;

            newGroupHasCardArr.splice(sourceIndex, 1);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [sourceFolderId]: {
                        ...state.folders[sourceFolderId],
                        hasGroups: {
                            ...state.folders[sourceFolderId].hasGroups,
                            [sourceGroupId]: {
                                ...state.folders[sourceFolderId].hasGroups[
                                    sourceGroupId
                                ],
                                cardOrder: newGroupHasCardArr,
                            },
                        },
                    },
                },
            };
        }
        case UPDATE_DESTINATIONGROUP_HASCARD: {
            const {
                destinationGroupId,
                destinationFolderId,
                cardId,
                destinationIndex,
            } = action;

            const groupData =
                state.folders[destinationFolderId].hasGroups[
                    destinationGroupId
                ];
            const newGroupHasCardArr = groupData.cardOrder;

            newGroupHasCardArr.splice(destinationIndex, 0, cardId);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        hasGroups: {
                            ...state.folders[destinationFolderId].hasGroups,
                            [destinationGroupId]: {
                                ...state.folders[destinationFolderId].hasGroups[
                                    destinationGroupId
                                ],
                                cardOrder: newGroupHasCardArr,
                            },
                        },
                    },
                },
            };
        }
        case MOVE_GROUP_HASCARD_DATA: {
            const {
                sourceGroupId,
                destinationGroupId,
                sourceFolderId,
                destinationFolderId,
                cardId,
            } = action;

            const cardData =
                state.folders[sourceFolderId].hasGroups[sourceGroupId].hasCards[
                    cardId
                ];

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        hasGroups: {
                            ...state.folders[destinationFolderId].hasGroups,
                            [destinationGroupId]: {
                                ...state.folders[destinationFolderId].hasGroups[
                                    destinationGroupId
                                ],
                                hasCards: {
                                    ...state.folders[destinationFolderId]
                                        .hasGroups[destinationGroupId].hasCards,
                                    [cardId]: cardData,
                                },
                            },
                        },
                    },
                },
            };
        }

        case UPDATE_CARD_HASTASK: {
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

            if (sourceCardId === destinationCardId) {
                const cardData =
                    state.folders[sourceFolderId].hasGroups[sourceGroupId]
                        .hasCards[sourceCardId];
                const newCardHasTaskArr = cardData.taskOrder;

                newCardHasTaskArr.splice(sourceIndex, 1);
                newCardHasTaskArr.splice(destinationIndex, 0, taskId);

                return {
                    ...state,
                    folders: {
                        ...state.folders,
                        [sourceFolderId]: {
                            ...state.folders[sourceFolderId],
                            hasGroups: {
                                ...state.folders[sourceFolderId].hasGroups,
                                [sourceGroupId]: {
                                    ...state.folders[sourceFolderId].hasGroups[
                                        sourceGroupId
                                    ],
                                    hasCards: {
                                        ...state.folders[sourceFolderId]
                                            .hasGroups[sourceGroupId].hasCards,
                                        [sourceCardId]: {
                                            ...state.folders[sourceFolderId]
                                                .hasGroups[sourceGroupId]
                                                .hasCards[sourceCardId],
                                            taskOrder: newCardHasTaskArr,
                                        },
                                    },
                                },
                            },
                        },
                    },
                };
            }

            const cardData =
                state.folders[sourceFolderId].hasGroups[sourceGroupId].hasCards[
                    sourceCardId
                ];
            const newCardHasTaskArr = cardData.taskOrder;

            newCardHasTaskArr.splice(sourceIndex, 1);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [sourceFolderId]: {
                        ...state.folders[sourceFolderId],
                        hasGroups: {
                            ...state.folders[sourceFolderId].hasGroups,
                            [sourceGroupId]: {
                                ...state.folders[sourceFolderId].hasGroups[
                                    sourceGroupId
                                ],
                                hasCards: {
                                    ...state.folders[sourceFolderId].hasGroups[
                                        sourceGroupId
                                    ].hasCards,
                                    [sourceCardId]: {
                                        ...state.folders[sourceFolderId]
                                            .hasGroups[sourceGroupId].hasCards[
                                            sourceCardId
                                        ],
                                        taskOrder: newCardHasTaskArr,
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case UPDATE_DESTINATIONCARD_HASTASK: {
            const {
                destinationFolderId,
                destinationGroupId,
                destinationCardId,
                taskId,
                destinationIndex,
            } = action;

            const cardData =
                state.folders[destinationFolderId].hasGroups[destinationGroupId]
                    .hasCards[destinationCardId];
            const newCardHasTaskArr = cardData.taskOrder;

            newCardHasTaskArr.splice(destinationIndex, 0, taskId);

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        hasGroups: {
                            ...state.folders[destinationFolderId].hasGroups,
                            [destinationGroupId]: {
                                ...state.folders[destinationFolderId].hasGroups[
                                    destinationGroupId
                                ],
                                hasCards: {
                                    ...state.folders[destinationFolderId]
                                        .hasGroups[destinationGroupId].hasCards,
                                    [destinationCardId]: {
                                        ...state.folders[destinationFolderId]
                                            .hasGroups[destinationGroupId]
                                            .hasCards[destinationCardId],
                                        taskOrder: newCardHasTaskArr,
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }
        case MOVE_CARD_HASTASK_DATA: {
            const {
                sourceFolderId,
                sourceGroupId,
                sourceCardId,
                destinationFolderId,
                destinationGroupId,
                destinationCardId,
                taskId,
            } = action;

            const taskData =
                state.folders[sourceFolderId].hasGroups[sourceGroupId].hasCards[
                    sourceCardId
                ].hasTasks[taskId];

            return {
                ...state,
                folders: {
                    ...state.folders,
                    [destinationFolderId]: {
                        ...state.folders[destinationFolderId],
                        hasGroups: {
                            ...state.folders[destinationFolderId].hasGroups,
                            [destinationGroupId]: {
                                ...state.folders[destinationFolderId].hasGroups[
                                    destinationGroupId
                                ],
                                hasCards: {
                                    ...state.folders[destinationFolderId]
                                        .hasGroups[destinationGroupId].hasCards,
                                    [destinationCardId]: {
                                        ...state.folders[destinationFolderId]
                                            .hasGroups[destinationGroupId]
                                            .hasCards[destinationCardId],
                                        hasTasks: {
                                            ...state.folders[
                                                destinationFolderId
                                            ].hasGroups[destinationGroupId]
                                                .hasCards[destinationCardId]
                                                .hasTasks,
                                            [taskId]: taskData,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            };
        }

        default:
            return state;
    }
};
export default notesDuck;
