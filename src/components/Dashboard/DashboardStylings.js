import styled from 'styled-components';

export const DashboardHomeContainer = styled.div`
    padding: 10px 30px;
`;

export const DashboardHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;
export const WelcomeMsg = styled.h2``;
export const WelcomeMsgUser = styled.span`
    color: #f05454;
`;
export const DateContainer = styled.p``;

export const DashboardItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    overflow-y: scroll;
    margin: 20px auto;
    max-height: calc(100% - 165px);
`;

export const DashboardGroupContainer = styled.div`
    max-height: 250px;
    margin: 0 20px 20px 20px;
    border-radius: var(--mediumRadius);
    padding: 10px 10px 0px 10px;
    cursor: pointer;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.dashboard.group};
    box-shadow: ${({ theme }) => theme.dashboard.groupBoxShadow};

    &:hover {
        background-color: ${({ theme }) => theme.dashboard.groupHover};
    }

    & div {
        cursor: pointer;
    }
`;

export const DashboardCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 0;
    border-radius: var(--mediumRadius);
`;

export const DashboardCardWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.dashboard.card};
    margin: 2px 0;
    border-radius: var(--mediumRadius);
`;

export const DashboardCardHeader = styled.div`
    display: flex;
    align-items: center;
    border-radius: var(--mediumRadius);

    padding: 5px 10px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.dashboard.cardBoxShadow};

    &:hover {
        background-color: ${({ theme }) => theme.dashboard.cardHover};
    }
`;

export const DashboardTaskContainer = styled.div`
    max-height: ${({ showTasks }) => (showTasks ? '100px' : 0)};
    overflow: hidden auto;
    padding: ${({ showTasks }) => showTasks && '12px'};
    transition: all 0.5s;
`;

export const DashboardTaskWrapper = styled.div`
    width: 100%;
    margin: 2px 0;
    padding: 5px;
    border-radius: var(--mediumRadius);
    box-shadow: ${({ theme }) => theme.dashboard.taskBoxShadow};
    background-color: ${({ theme }) => theme.dashboard.task};

    &:hover {
        background-color: ${({ theme }) => theme.dashboard.taskHover};
    }
`;
