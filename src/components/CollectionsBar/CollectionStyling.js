import styled from 'styled-components';

export const CollectionContainer = styled.div`
    height: var(--navDifference);
    width: var(--collectionsbarWidth);
    background-color: ${({ theme }) => theme.collectionbar.collectionbar};
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const CollectionWrapper = styled.div``;
