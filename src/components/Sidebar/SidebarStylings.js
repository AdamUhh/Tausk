import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
    width: var(--sidebarWidth);
    height: var(--navDifference);
    background-color: ${({ theme }) => theme.sidebar.sidebar};

    @media (max-width: 600px) {
        width: calc(100vw - var(--collectionsbarWidth));
    }
    user-select: none;
`;

export const SidebarAddGroupContainer = styled.div`
    padding: 10px;
`;

export const SidebarAddGroupBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    font-size: 0.9em;

    border-radius: var(--mediumSmallRadius);
    background: ${({ theme }) => theme.sidebar.addBtn};

    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        filter: brightness(1.05);
    }
`;

export const SidebarItemsContainer = styled.div`
    max-height: calc(100vh - var(--navHeight) - 100px);
    overflow: hidden auto;
    padding: 0 20px 0 10px;

    ::-webkit-scrollbar {
        //*chrome
        display: none;
    }
    -ms-overflow-style: none; //*IE 11
    scrollbar-width: none; //*Firefox 64

    /* &:hover {
        ::-webkit-scrollbar {
            display: block;
        }
        -ms-overflow-style: block; //*IE 11
        scrollbar-width: block; //*Firefox 64
    } */
`;

export const OptionsContainer = styled.div`
    display: none;
    order: 2;
`;

export const UtilsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${({ alert, days }) =>
        (alert === 'high' || alert === 'medium' || alert === 'low') &&
        css`
            min-width: 16px;
            &::after {
                content: '${days}';
                width: 15px;
                height: 15px;
                font-weight: 600;
                border-radius: 50%;
                background-color: ${alert === 'high' //ff5656
                    ? '#f02849'
                    : alert === 'medium'
                    ? '#FFA500'
                    : 'white'};

                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.7em;
                color: black;
            }
        `}
`;

export const SidebarFolderContainer = styled.div`
    max-height: 300px;
    margin-bottom: 20px;
    overflow: hidden auto;
`;
export const SidebarFolderWrapper = styled.div`
    display: flex;
    align-items: center;

    &:hover ${OptionsContainer} {
        display: block;
    }
`;

export const SidebarGroupContainer = styled.div`
    margin-bottom: 10px;
`;

export const SidebarGroupWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, selected }) =>
        selected ? theme.sidebar.selectedGroup : theme.sidebar.group};
    border-radius: var(--mediumSmallRadius);
    padding: 0 5px;

    &:hover {
        background-color: ${({ theme }) => theme.sidebar.groupHover};
    }

    &:hover ${OptionsContainer} {
        display: block;
    }

    &:hover ${UtilsContainer}::after {
        position: absolute;
        top: -10px;
    }
`;

export const SidebarCardContainer = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`;
export const SidebarCardWrapper = styled(SidebarGroupWrapper)`
    background-color: ${({ theme, selected }) =>
        selected ? theme.sidebar.selectedGroup : theme.sidebar.card};

    &:hover {
        background-color: ${({ theme }) => theme.sidebar.cardHover};
    }
`;

export const SidebarTaskContainer = styled.div`
    margin-left: 10px;
    margin-top: 1px;
`;
export const SidebarTaskWrapper = styled(SidebarGroupWrapper)`
    background-color: ${({ theme, selected }) =>
        selected ? theme.sidebar.selectedGroup : theme.sidebar.task};

    &:hover {
        background-color: ${({ theme }) => theme.sidebar.taskHover};
    }
`;

export const ChildrenWrapper = styled.div`
    max-height: 250px;
    overflow: hidden auto;
    padding-top: 1px;

    ::-webkit-scrollbar {
        //*chrome
        display: none;
    }
    -ms-overflow-style: none; //*IE 11
    scrollbar-width: none; //*Firefox 64

    &:hover {
        ::-webkit-scrollbar {
            display: block;
        }
        -ms-overflow-style: block; //*IE 11
        scrollbar-width: block; //*Firefox 64
    }
`;

export const DroppableWrapper = styled.div`
    min-height: 10px;
    background-color: ${({ isDraggingOver, theme }) =>
        isDraggingOver && theme.sidebar.droppableArea};
    border-radius: var(--smallRadius);
`;
