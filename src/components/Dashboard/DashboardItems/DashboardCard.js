//* Styles
import {
    DashboardCardWrapper,
    DashboardCardHeader,
    DashboardTaskContainer,
} from '../DashboardStylings';
import {
    IconButton,
    TextContainer,
    TextWrapper,
} from '../../global/ExportedStylings';

//* Components
import DashboardTask from './DashboardTask';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
import RightArrowIcon from '../../SVG/RightArrowIcon';
import { useState } from 'react';
import { useHistory } from 'react-router';

const DashboardCard = ({
    title,
    taskOrder,
    hasTasks,
    folderId,
    groupId,
    cardId,
}) => {
    const countref = useRef(0); // remove this
    console.log('DashboardCard.js: ' + countref.current++); // remove this

    const [showTasks, setShowTasks] = useState(false);

    function handleArrowClick(e) {
        e.stopPropagation();

        // console.log('clicked arrow');
        setShowTasks((prev) => !prev);
    }
    const history = useHistory();
    function handleCardClick(e) {
        e.stopPropagation();

        // console.log('clicked card');

        history.push(`/Notes/${folderId}/${groupId}/${cardId}`);
    }

    return (
        <DashboardCardWrapper>
            <DashboardCardHeader onClick={handleCardClick}>
                <TextContainer>
                    <TextWrapper>{title}</TextWrapper>
                </TextContainer>
                <IconButton
                    width='30px'
                    height='30px'
                    margin='3px 0 3px 3px'
                    onClick={handleArrowClick}
                >
                    <RightArrowIcon rotate={showTasks} />
                </IconButton>
            </DashboardCardHeader>
            <DashboardTaskContainer showTasks={showTasks}>
                {showTasks && (
                    <>
                        {taskOrder.map((task) => (
                            <DashboardTask
                                key={task}
                                title={hasTasks[task].title}
                                desc={hasTasks[task].desc}
                                folderId={folderId}
                                groupId={groupId}
                                cardId={cardId}
                                taskId={task}
                            />
                        ))}
                    </>
                )}
            </DashboardTaskContainer>
        </DashboardCardWrapper>
    );
};

export default DashboardCard;
