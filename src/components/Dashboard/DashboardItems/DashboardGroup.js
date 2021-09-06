//* Styles
import {
    DashboardCardContainer,
    DashboardGroupContainer,
} from '../DashboardStylings';
import { TextContainer, TextWrapper } from '../../global/ExportedStylings';
//* Components
import DashboardCard from './DashboardCard';
//* Hooks, React
import { useRef } from 'react'; // remove this
import { useHistory } from 'react-router';

const DashboardGroup = ({ title, cardOrder, hasCards, folderId, groupId }) => {
    const countref = useRef(0); // remove this
    console.log('DashboardGroup.js: ' + countref.current++); // remove this

    const history = useHistory();

    function handleGroupClick() {
        // console.log('clicked group');

        history.push(`/Notes/${folderId}/${groupId}`);
    }

    return (
        <DashboardGroupContainer onClick={handleGroupClick}>
            <TextContainer>
                <TextWrapper>{title}</TextWrapper>
            </TextContainer>
            <hr />
            <DashboardCardContainer>
                {cardOrder.map((card) => (
                    <DashboardCard
                        key={card}
                        title={hasCards[card].title}
                        taskOrder={hasCards[card].taskOrder}
                        hasTasks={hasCards[card].hasTasks}
                        folderId={folderId}
                        groupId={groupId}
                        cardId={card}
                    />
                ))}
            </DashboardCardContainer>
        </DashboardGroupContainer>
    );
};

export default DashboardGroup;
