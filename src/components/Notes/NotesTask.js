//* Styles
import {
    NotesDateWrapper,
    NotesDescContainer,
    NotesDescWrapper,
    NotesOptionsContainer,
    NotesTaskWrapper,
    NotesTitleWrapper,
} from './NotesStylings';
import { TextContainer, TextWrapper } from '../global/ExportedStylings';

//* Components
import ContextDropdown from '../ContextDropdown/ContextDropdown';
import ContextTaskOptions from '../ContextDropdown/CustomContextDropdowns/ContextTaskOptions';
import edjsHTML from 'editorjs-parser';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useParams } from 'react-router-dom';
import { sanitize } from 'dompurify';

//* SVG
import VerticalDots from '../SVG/VerticalDots';

//* Constants
import { BoxedListLayout, ListLayout } from './NotesHome';

const NotesTask = ({ notesLayout, taskId, cardId, title, desc }) => {
    const countref = useRef(0); // remove this
    console.log('NotesTask.js: ' + countref.current++); // remove this

    const { folderidurl, groupidurl, taskidurl } = useParams();

    const edjsParser = new edjsHTML();

    

    return (
        <NotesTaskWrapper>
            <NotesOptionsContainer>
                <ContextDropdown
                    icon={<VerticalDots />}
                    width='20px'
                    transparent
                >
                    <ContextTaskOptions
                        folderId={folderidurl}
                        groupId={groupidurl}
                        cardId={cardId}
                        taskId={taskId}
                        title={title}
                        desc={desc}
                    />
                </ContextDropdown>
            </NotesOptionsContainer>
            <NotesTitleWrapper>
                <TextContainer minHeight='30px' padding='10px 0 0 0'>
                    <TextWrapper>{title}</TextWrapper>
                </TextContainer>
            </NotesTitleWrapper>
            <NotesDateWrapper>Aug 19, 2021</NotesDateWrapper>
            {notesLayout !== ListLayout && notesLayout !== BoxedListLayout && (
                <>
                    <hr />
                    <NotesDescContainer>
                        {Object.keys(desc).length > 0 && (
                            <NotesDescWrapper
                                taskidurl={taskidurl}
                                dangerouslySetInnerHTML={{
                                    __html: sanitize(edjsParser.parse(desc)),
                                }}
                            ></NotesDescWrapper>
                        )}
                    </NotesDescContainer>
                </>
            )}
        </NotesTaskWrapper>
    );
};

export default NotesTask;
