//* Styles
import { DashboardTaskWrapper } from '../DashboardStylings';
import { TextContainer, TextWrapper } from '../../global/ExportedStylings';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useHistory } from 'react-router';
import { getFormattedTaskName } from '../../../utils/GetFormattedTaskName';

const DashboardTask = ({ title, desc, folderId, groupId, cardId, taskId }) => {
    const countref = useRef(0); // remove this
    console.log('DashboardTask.js: ' + countref.current++); // remove this

    const history = useHistory();
    function handleTaskClick(e) {
        e.stopPropagation();
        console.log('clicked task');

        history.push(`/Notes/${folderId}/${groupId}/${cardId}/${taskId}`);
    }

    return (
        <DashboardTaskWrapper onClick={handleTaskClick}>
            <TextContainer>
                <TextWrapper> {title.length > 0
                                    ? title
                                    : getFormattedTaskName(desc)}</TextWrapper>
            </TextContainer>
        </DashboardTaskWrapper>
    );
};

export default DashboardTask;
