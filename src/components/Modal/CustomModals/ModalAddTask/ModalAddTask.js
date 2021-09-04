//* Styles
import {
    CustomEditorBody,
    CustomModalBody,
    CustomModalButton,
    CustomModalFooter,
    CustomModalHeader,
    CustomModalWrapper,
    ModalInput,
    ModalLabel,
} from '../../ModalStylings';

//* Constants
import { maxInputLength } from '../../../../contexts/Constants';

//* Components
import AlertToaster from '../../../global/AlertToaster';

//* Hooks, React
import { useRef, useState } from 'react'; // remove this
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useToaster from '../../../../hooks/useToaster';

//* Redux
import { addTaskPost, editTaskPost } from '../../../../redux/ducks/notesDuck';
import { useAuth } from '../../../../contexts/AuthContext';

//* SVG
import LoadingIcon from '../../../SVG/LoadingIcon';

//* Editor Components
import EditorJS from 'react-editor-js';
import Header from '@editorjs/header';
import Table from '@editorjs/table';
import Code from '@editorjs/code';
import SimpleImage from '@editorjs/simple-image';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Underline from '@editorjs/underline';
import Quote from '@editorjs/quote';

const ModalAddTask = ({
    edit = false,
    folderId = '',
    groupId = '',
    cardId,
    taskId = '',
}) => {
    const countref = useRef(0); // remove this
    console.log('ModalAddTask.js: ' + countref.current++); // remove this
    const folderState = useSelector((state) => state.notesDuck.folders);

    const [inputValue, setInputValue] = useState(
        (edit &&
            folderState[folderId].hasGroups[groupId].hasCards[cardId].hasTasks[
                taskId
            ].title) ||
            ''
    );
    const [disabled, setDisabled] = useState(false);
    const [toasterState, setToasterState] = useToaster();

    const editorJsRef = useRef(null);

    function handleOnChange(e) {
        if (e.target.value.length < maxInputLength)
            setInputValue(e.target.value);
        else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: `Max characters allowed: ${maxInputLength}`,
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: `Max characters allowed: ${maxInputLength}`,
                });
            }
        }
    }
    function handleOnKeyPress(e) {
        if (e.key === 'Enter') handleSubmit();
    }

    const { folderidurl, groupidurl } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useAuth();

    async function handleSubmit() {
        const result = await editorJsRef.current.save();

        if (
            (inputValue.length > 0 && inputValue.length <= maxInputLength) ||
            result.blocks[0]
        ) {
            setDisabled(true);

            if (edit) {
                dispatch(
                    editTaskPost(
                        currentUser.uid,
                        folderId,
                        groupId,
                        cardId,
                        taskId,
                        inputValue,
                        result
                    )
                );
            } else {
                //Dispatch to notesDuck (with NAME)
                dispatch(
                    addTaskPost(
                        currentUser.uid,
                        folderidurl,
                        groupidurl,
                        cardId,
                        inputValue,
                        result
                    )
                );
            }
        } else {
            if (toasterState.isToasterOpen) {
                setToasterState((prev) => ({
                    ...prev,
                    shake: true,
                    msg: 'Atleast one of the inputs has to have text!',
                }));
            } else {
                setToasterState({
                    isToasterOpen: true,
                    shake: true,
                    msg: 'Atleast one of the inputs has to have text!',
                });
            }
        }
    }

    const EDITOR_JS_TOOLS = {
        header: Header,
        table: Table,
        code: Code,
        image: SimpleImage,
        delimiter: Delimiter,
        list: List,
        underline: Underline,
        quote: { class: Quote, inlineToolbar: true },
        // embed: Embed,
        // marker: Marker,
        // warning: Warning,
        // linkTool: LinkTool,
        // raw: Raw,
        // checklist: CheckList,
        // inlineCode: InlineCode,
    };

    return (
        <>
            {toasterState.isToasterOpen && (
                <AlertToaster
                    top='0'
                    msg={toasterState.msg}
                    shake={toasterState.shake}
                />
            )}
            <CustomModalHeader>
                {edit ? 'Edit Task' : 'Add Task'}
            </CustomModalHeader>
            <CustomModalWrapper height='calc(100% - 50px)'>
                <CustomModalBody height='fit-content'>
                    <ModalLabel htmlFor='nameInput'></ModalLabel>
                    <ModalInput
                        id='nameInput'
                        placeholder='Task Name'
                        onChange={handleOnChange}
                        onKeyPress={handleOnKeyPress}
                        value={inputValue}
                    />
                </CustomModalBody>

                <CustomEditorBody>
                    <EditorJS
                        instanceRef={(instance) =>
                            (editorJsRef.current = instance)
                        }
                        tools={EDITOR_JS_TOOLS}
                        placeholder='Type something! Press Tab for some features. To put an image, simply paste the img URL!'
                        data={
                            edit &&
                            folderState[folderId].hasGroups[groupId].hasCards[
                                cardId
                            ].hasTasks[taskId].desc
                        }
                        autofocus
                    />
                </CustomEditorBody>

                {/* <Editor handleSave={handleSave} editorData={editorData} setEditorData={setEditorData} /> */}
                <CustomModalFooter>
                    <CustomModalButton
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        {disabled ? (
                            <LoadingIcon />
                        ) : edit ? (
                            'Confirm Edit'
                        ) : (
                            'Add Task'
                        )}
                    </CustomModalButton>
                </CustomModalFooter>
            </CustomModalWrapper>
        </>
    );
};

export default ModalAddTask;
