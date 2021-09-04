//* Styles
import { IconButton } from '../../global/ExportedStylings';
import {
    ContextDropdownContainer,
    ContextItemWrapper,
} from '../ContextStylings';
//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
import SuccessIcon from '../../SVG/SuccessIcon';
import ExitIcon from '../../SVG/ExitIcon';

const ContextSearchFilter = ({ filter, setFilter }) => {
    const countref = useRef(0); // remove this
    console.log('ContextSearchFilter.js: ' + countref.current++); // remove this

    const handleFilterGroup = () => {
        setFilter((prev) => ({ ...prev, group: !prev.group }));
    };
    const handleFilterCard = () => {
        setFilter((prev) => ({ ...prev, card: !prev.card }));
    };
    const handleFilterTask = () => {
        setFilter((prev) => ({ ...prev, task: !prev.task }));
    };

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper
                selected={filter.group}
                onClick={handleFilterGroup}
            >
                <IconButton width='25px' height='25px' margin='0 20px 0 0'>
                    {filter.group ? <SuccessIcon /> : <ExitIcon />}
                </IconButton>
                Group
            </ContextItemWrapper>
            <ContextItemWrapper
                selected={filter.card}
                onClick={handleFilterCard}
            >
                <IconButton width='25px' height='25px' margin='0 20px 0 0'>
                    {filter.card ? <SuccessIcon /> : <ExitIcon />}
                </IconButton>
                Card
            </ContextItemWrapper>
            <ContextItemWrapper
                selected={filter.task}
                onClick={handleFilterTask}
            >
                <IconButton width='25px' height='25px' margin='0 20px 0 0'>
                    {filter.task ? <SuccessIcon /> : <ExitIcon />}
                </IconButton>
                Task
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextSearchFilter;
