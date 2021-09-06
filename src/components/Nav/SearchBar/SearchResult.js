//* Styles

//* Components

//* Hooks, React

//* Styled
import { useRef } from 'react'; // remove this
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../global/ExportedStylings';
import { ResultItem, SearchResultContainer } from '../NavStylings';

const SearchResult = ({ inputValue, filter }) => {
    const countref = useRef(0); // remove this
    console.log('SearchResult.js: ' + countref.current++); // remove this

    const history = useHistory();
    const folderState = useSelector((state) => state.notesDuck.folders);

    const folderDataIdArr = Object.keys(folderState);

    const groupDataIdArr = folderDataIdArr.map((folderId) =>
        Object.keys(folderState[folderId].hasGroups).map((groupId) => ({
            folderId: folderId,
            groupId: groupId,
            title: folderState[folderId].hasGroups[groupId].title,
        }))
    );

    const cardDataIdArr = folderDataIdArr.map((folderId) =>
        Object.keys(folderState[folderId].hasGroups).map((groupId) =>
            Object.keys(folderState[folderId].hasGroups[groupId].hasCards).map(
                (cardId) => ({
                    folderId: folderId,
                    groupId: groupId,
                    cardId: cardId,
                    title: folderState[folderId].hasGroups[groupId].hasCards[
                        cardId
                    ].title,
                })
            )
        )
    );

    const taskDataIdArr = folderDataIdArr.map((folderId) =>
        Object.keys(folderState[folderId].hasGroups).map((groupId) =>
            Object.keys(folderState[folderId].hasGroups[groupId].hasCards).map(
                (cardId) =>
                    Object.keys(
                        folderState[folderId].hasGroups[groupId].hasCards[
                            cardId
                        ].hasTasks
                    ).map((taskId) => ({
                        folderId: folderId,
                        groupId: groupId,
                        cardId: cardId,
                        taskId: taskId,
                        title: folderState[folderId].hasGroups[groupId]
                            .hasCards[cardId].hasTasks[taskId].title,
                    }))
            )
        )
    );

    function handleGroupItem(folderId, groupId) {
        history.push(`/Notes/${folderId}/${groupId}`);
    }
    function handleCardItem(folderId, groupId, cardId) {
        history.push(`/Notes/${folderId}/${groupId}/${cardId}`);
    }
    function handleTaskItem(folderId, groupId, cardId, taskId) {
        history.push(`/Notes/${folderId}/${groupId}/${cardId}/${taskId}`);
    }

    return (
        <>
            {!folderState['SkeletonFolder'] && (
                <SearchResultContainer>
                    {filter.group &&
                        groupDataIdArr.map((groupDataArr) =>
                            groupDataArr.map(
                                (groupData) =>
                                    groupData.title
                                        .toLowerCase()
                                        .search(inputValue) !== -1 && (
                                        <ResultItem
                                            key={groupData.groupId}
                                            onClick={() =>
                                                handleGroupItem(
                                                    groupData.folderId,
                                                    groupData.groupId
                                                )
                                            }
                                        >
                                            <IconButton
                                                width='30px'
                                                height='30px'
                                                margin='0 10px 0 0'
                                            >
                                                G
                                            </IconButton>
                                            {groupData.title}
                                        </ResultItem>
                                    )
                            )
                        )}
                    {filter.card &&
                        cardDataIdArr.map((cardDataArray) =>
                            cardDataArray.map((cardDataArry) =>
                                cardDataArry.map(
                                    (cardData) =>
                                        cardData.title
                                            .toLowerCase()
                                            .search(inputValue) !== -1 && (
                                            <ResultItem
                                                key={cardData.cardId}
                                                onClick={() =>
                                                    handleCardItem(
                                                        cardData.folderId,
                                                        cardData.groupId,
                                                        cardData.cardId
                                                    )
                                                }
                                            >
                                                <IconButton
                                                    width='30px'
                                                    height='30px'
                                                    margin='0 10px 0 0'
                                                >
                                                    C
                                                </IconButton>
                                                {cardData.title}
                                            </ResultItem>
                                        )
                                )
                            )
                        )}
                    {filter.task &&
                        taskDataIdArr.map((taskDataArray) =>
                            taskDataArray.map((taskDataArry) =>
                                taskDataArry.map((taskDataArr) =>
                                    taskDataArr.map(
                                        (taskData) =>
                                            taskData.title
                                                .toLowerCase()
                                                .search(inputValue) !== -1 && (
                                                <ResultItem
                                                    key={taskData.taskId}
                                                    onClick={() =>
                                                        handleTaskItem(
                                                            taskData.folderId,
                                                            taskData.groupId,
                                                            taskData.cardId,
                                                            taskData.taskId
                                                        )
                                                    }
                                                >
                                                    <IconButton
                                                        width='30px'
                                                        height='30px'
                                                        margin='0 10px 0 0'
                                                    >
                                                        T
                                                    </IconButton>
                                                    {taskData.title}
                                                </ResultItem>
                                            )
                                    )
                                )
                            )
                        )}
                </SearchResultContainer>
            )}
        </>
    );
};

export default SearchResult;
