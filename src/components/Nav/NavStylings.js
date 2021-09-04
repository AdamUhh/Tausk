import styled from 'styled-components';

export const NavContainer = styled.div`
    width: 100vw;
    height: var(--navHeight);
    background-color: ${({ theme }) => theme.nav.nav};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    @media (max-width: 600px) {
        padding: 0 5px;
    }
`;

export const NavOptionsContainer = styled.div`
    display: flex;
`;

export const Input = styled.input.attrs({
    type: 'text',
    isClearable: true,
})`
    color: ${({ theme }) => theme.global.color};
    width: 100%;
    background-color: ${({ theme }) => theme.global.input};
    text-align: center;
    padding-right: 10px;
    height: 22px;
    border: none;
    border-radius: var(--mediumRadius);
`;

export const FilterContainer = styled.div`
    position: absolute;
    top: 0;
    right: 2px;
`;

export const MenuIconContainer = styled.div`
    display: block;
    @media (min-width: 600px) {
        display: none;
    }
`;

export const MenuIconContainerInverse = styled.div`
    display: block;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 80%;
    position: relative;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        width: 70%;
    }
`;
export const SearchResultContainer = styled.div`
    position: absolute;
    top: 25px;
    background-color: ${({ theme }) => theme.nav.result};
    width: 95%;
    max-height: 300px;
    overflow: hidden auto;
    border-radius: var(--smallRadius);
    padding: 5px;
    box-shadow: ${({ theme }) => theme.nav.boxShadow};
    z-index: 20;

    @media (max-width: 600px) {
        width: 120%;
    }
`;

export const ResultItem = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.nav.resultItem};
    width: 100%;
    height: 40px;
    padding: 5px;
    border-radius: var(--mediumRadius);

    &:hover {
        background-color: ${({ theme }) => theme.nav.resultItemHover};
    }
`;
