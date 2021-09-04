//* Styles
import { NotesWrapper } from './NotesStylings';

//* Components
import NotesCard from './NotesCard';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useParams } from 'react-router-dom';

const NotesMain = ({ notesLayout, cardOrder, hasCards }) => {
    const countref = useRef(0); // remove this
    console.log('NotesMain.js: ' + countref.current++); // remove this

    const { cardidurl } = useParams();

    return (
        <NotesWrapper notesLayout={notesLayout}>
            {cardidurl && hasCards[cardidurl] ? (
                <NotesCard
                    notesLayout={notesLayout}
                    title={hasCards[cardidurl].title}
                    taskOrder={hasCards[cardidurl].taskOrder}
                    hasTasks={hasCards[cardidurl].hasTasks}
                    cardId={cardidurl}
                />
            ) : (
                cardOrder?.map((card) => (
                    <NotesCard
                        key={card}
                        notesLayout={notesLayout}
                        title={hasCards[card].title}
                        taskOrder={hasCards[card].taskOrder}
                        hasTasks={hasCards[card].hasTasks}
                        cardId={card}
                    />
                ))
            )}
        </NotesWrapper>
    );
};

export default NotesMain;
