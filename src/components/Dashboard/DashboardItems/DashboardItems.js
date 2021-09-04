//* Styles
import { DashboardItemsContainer } from '../DashboardStylings';

//* Components
import DashboardGroup from './DashboardGroup';

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useSelector } from 'react-redux';

//* SVG

const DashboardItems = () => {
    const countref = useRef(0); // remove this
    console.log('DashboardItems.js: ' + countref.current++); // remove this

    const folderState = useSelector((state) => state.notesDuck.folders);

    return (
        <DashboardItemsContainer>
            {Object.keys(folderState)?.map((folder) =>
                folderState[folder].groupOrder.map((group) => (
                    <DashboardGroup
                        key={group}
                        title={folderState[folder].hasGroups[group].title}
                        cardOrder={
                            folderState[folder].hasGroups[group].cardOrder
                        }
                        hasCards={folderState[folder].hasGroups[group].hasCards}
                        folderId={folder}
                        groupId={group}
                    />
                ))
            )}
        </DashboardItemsContainer>
    );
};

export default DashboardItems;
