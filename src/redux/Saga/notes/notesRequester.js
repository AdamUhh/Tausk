import {
    doc,
    getDoc,
    getDocs,
    collection,
    arrayUnion,
    arrayRemove,
    setDoc,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
export const requestSettingsData = async (action) => {
    const { userId } = action;
    const docSnap = await getDoc(doc(db, 'Users', userId));
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        return '';
    }
};
export const requestGetFolderData = async (action) => {
    const { userId } = action;

    const querySnapshot = await getDocs(
        collection(db, 'Users', userId, 'Folders')
    );
    return querySnapshot;
};
export const requestGetGroupData = async (action) => {
    const { userId } = action;

    const querySnapshot = await getDocs(
        collection(db, 'Users', userId, 'Groups')
    );
    return querySnapshot;
};
export const requestGetCardData = async (action) => {
    const { userId } = action;

    const querySnapshot = await getDocs(
        collection(db, 'Users', userId, 'Cards')
    );
    return querySnapshot;
};
export const requestGetTaskData = async (action) => {
    const { userId } = action;

    const querySnapshot = await getDocs(
        collection(db, 'Users', userId, 'Tasks')
    );
    return querySnapshot;
};

//* Folder --------------------------------------------------------
export const requestPostFolder = (action) => {
    const { userId, folderId, title } = action;

    setDoc(doc(db, 'Users', userId, 'Folders', folderId), {
        userId: userId,
        uuid: folderId,
        title: title,
        groupOrder: [],
    });
};
export const requestRenameFolder = (action) => {
    const { userId, folderId, title } = action;

    updateDoc(doc(db, 'Users', userId, 'Folders', folderId), {
        title: title,
    });
};
export const requestDeleteFolder = (action) => {
    const { userId, folderId } = action;

    deleteDoc(doc(db, 'Users', userId, 'Folders', folderId));
};

//* Group --------------------------------------------------------
export const requestPostGroup = (action) => {
    const { userId, folderId, groupId, title } = action;
    updateDoc(doc(db, 'Users', userId, 'Folders', folderId), {
        groupOrder: arrayUnion(groupId),
    });

    setDoc(doc(db, 'Users', userId, 'Groups', groupId), {
        userId: userId,
        uuid: groupId,
        title: title,
        cardOrder: [],
    });
};
export const requestRenameGroup = (action) => {
    const { userId, groupId, title } = action;

    updateDoc(doc(db, 'Users', userId, 'Groups', groupId), {
        title: title,
    });
};
export const requestDeleteGroup = (action) => {
    const { userId, folderId, groupId } = action;

    if (folderId)
        updateDoc(doc(db, 'Users', userId, 'Folders', folderId), {
            groupOrder: arrayRemove(groupId),
        });

    deleteDoc(doc(db, 'Users', userId, 'Groups', groupId));
};

export const requestUpdateFolderGroupOrder = (action) => {
    const { userId, folderId, groupOrder } = action;

    updateDoc(doc(db, 'Users', userId, 'Folders', folderId), {
        groupOrder: groupOrder,
    });
};
//* Card --------------------------------------------------------
export const requestPostCard = (action) => {
    const { userId, groupId, cardId, title } = action;

    updateDoc(doc(db, 'Users', userId, 'Groups', groupId), {
        cardOrder: arrayUnion(cardId),
    });

    setDoc(doc(db, 'Users', userId, 'Cards', cardId), {
        userId: userId,
        uuid: cardId,
        title: title,
        taskOrder: [],
    });
};
export const requestRenameCard = (action) => {
    const { userId, cardId, title } = action;

    updateDoc(doc(db, 'Users', userId, 'Cards', cardId), {
        title: title,
    });
};
export const requestDeleteCard = (action) => {
    const { userId, groupId, cardId } = action;

    if (groupId)
        updateDoc(doc(db, 'Users', userId, 'Groups', groupId), {
            cardOrder: arrayRemove(cardId),
        });

    deleteDoc(doc(db, 'Users', userId, 'Cards', cardId));
};
export const requestUpdateGroupCardOrder = (action) => {
    const { userId, groupId, cardOrder } = action;

    updateDoc(doc(db, 'Users', userId, 'Groups', groupId), {
        cardOrder: cardOrder,
    });
};
//* Task --------------------------------------------------------
export const requestPostTask = (action) => {
    const { userId, cardId, taskId, title, desc } = action;

    updateDoc(doc(db, 'Users', userId, 'Cards', cardId), {
        taskOrder: arrayUnion(taskId),
    });

    setDoc(doc(db, 'Users', userId, 'Tasks', taskId), {
        userId: userId,
        uuid: cardId,
        title: title,
        desc: desc,
    });
};
export const requestEditTask = (action) => {
    const { userId, taskId, title, desc } = action;

    updateDoc(doc(db, 'Users', userId, 'Tasks', taskId), {
        title: title,
        desc: desc,
    });
};
export const requestDeleteTask = (action) => {
    const { userId, cardId, taskId } = action;

    if (cardId)
        updateDoc(doc(db, 'Users', userId, 'Cards', cardId), {
            taskOrder: arrayRemove(taskId),
        });

    deleteDoc(doc(db, 'Users', userId, 'Tasks', taskId));
};
export const requestUpdateCardTaskOrder = (action) => {
    const { userId, cardId, taskOrder } = action;

    updateDoc(doc(db, 'Users', userId, 'Cards', cardId), {
        taskOrder: taskOrder,
    });
};
