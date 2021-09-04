//* Styles
import { ModalContainer } from './ModalStylings';
//* Components
import Modal from './Modal';
import StrictModal from './StrictModal';
import ModalAddFolder from './CustomModals/ModalAddFolder';

//* Hooks, React
import { useSelector } from 'react-redux';
import React, { useRef } from 'react';

//* Redux
import {
    NONE,
    VIEW_THEMES,
    ADD_FOLDER_MODAL,
    RENAME_FOLDER_MODAL,
    DELETE_FOLDER_MODAL,
    ADD_GROUP_MODAL,
    RENAME_GROUP_MODAL,
    DELETE_GROUP_MODAL,
    ADD_CARD_MODAL,
    RENAME_CARD_MODAL,
    DELETE_CARD_MODAL,
    ADD_TASK_MODAL,
    EDIT_TASK_MODAL,
    DELETE_TASK_MODAL,
} from '../../redux/ducks/modalDuck';
import ModalContext from './ModalContext';
import ModalAddCard from './CustomModals/ModalAddCard';
import ModalAddGroup from './CustomModals/ModalAddGroup';
import ModalDeleteFolder from './CustomModals/ModalDeleteFolder';
import ModalDeleteGroup from './CustomModals/ModalDeleteGroup';
import ModalDeleteCard from './CustomModals/ModalDeleteCard';
import ModalDeleteTask from './CustomModals/ModalDeleteTask';
import ModalRenameFolder from './CustomModals/ModalRenameFolder';
import ModalRenameGroup from './CustomModals/ModalRenameGroup';
import ModalRenameCard from './CustomModals/ModalRenameCard';
import ModalAddTask from './CustomModals/ModalAddTask/ModalAddTask';

const ModalController = () => {
    const countref = useRef(0); // remove this
    console.log('ModalController.js: ' + countref.current++); // remove this
    const modalState = useSelector((state) => state.modalDuck);
    console.log(modalState.mode);
    //Todo: Make the state and firestore have different database strucutres
    //Todo: Make the state have a more efficient structure using Objects (and Object.keys to map through them)
    //Todo: Make the state have the same structure that was already written
    return (
        <>
            {modalState.mode !== NONE &&
            modalState.mode === ADD_FOLDER_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalAddFolder />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === ADD_GROUP_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalAddGroup />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === ADD_CARD_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalAddCard />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === ADD_TASK_MODAL ? (
                <ModalContainer>
                    <StrictModal width='98vw' height='98vh'>
                        <ModalAddTask cardId={modalState.cardId} />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === RENAME_FOLDER_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalRenameFolder
                            folderId={modalState.folderId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === RENAME_GROUP_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalRenameGroup
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === RENAME_CARD_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalRenameCard
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            cardId={modalState.cardId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === EDIT_TASK_MODAL ? (
                <ModalContainer>
                    <StrictModal width='98vw' height='98vh'>
                        <ModalAddTask
                            edit
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            cardId={modalState.cardId}
                            taskId={modalState.taskId}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === DELETE_FOLDER_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalDeleteFolder
                            folderId={modalState.folderId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === DELETE_GROUP_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalDeleteGroup
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === DELETE_CARD_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalDeleteCard
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            cardId={modalState.cardId}
                            title={modalState.title}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : modalState.mode === DELETE_TASK_MODAL ? (
                <ModalContainer>
                    <StrictModal>
                        <ModalDeleteTask
                            folderId={modalState.folderId}
                            groupId={modalState.groupId}
                            cardId={modalState.cardId}
                            taskId={modalState.taskId}
                            title={modalState.title}
                            desc={modalState.desc}
                        />
                    </StrictModal>
                </ModalContainer>
            ) : (
                modalState.mode === VIEW_THEMES && (
                    <ModalContainer>
                        <ModalContext>
                            <Modal></Modal>
                        </ModalContext>
                    </ModalContainer>
                )
            )}
        </>
    );
};

export default React.memo(ModalController);
