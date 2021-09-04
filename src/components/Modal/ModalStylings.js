import styled, { keyframes } from 'styled-components';
import { maxInputLength } from '../../contexts/Constants';

const TopDownAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, -150%);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -30%);
    }
    100% {
        transform: translate(-50%, -50%);
    }
`;

export const ContextModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const ModalContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    backdrop-filter: blur(1.2px);
    z-index: 100;
`;

export const ModalWrapper = styled.div`
    position: relative;
    width: ${({ width }) =>
        width ||
        '550px'}; // Todo: || 550px may not even be needed since defaultProps is there
    height: ${({ height }) => height || '550px'};
    background-color: ${({ theme }) => theme.modal.modal};
    border-radius: var(--largeRadius);
    box-shadow: ${({ theme }) => theme.modal.boxShadow};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${TopDownAnimation} 0.7s;

    @media (max-width: 600px) {
        width: 92%;
    }
`;

export const CustomModalHeader = styled.div`
    height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.modal.modalHeader};
    border-radius: var(--mediumRadius) var(--mediumRadius) 0 0;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 1.2em;
    box-shadow: ${({ theme }) => theme.modal.boxShadow};
`;

export const CustomModalWrapper = styled.div`
    padding: 15px 20px;
    height: ${({ height }) => height || '250px'};
`;

export const CustomModalBody = styled.div`
    padding: ${({ padding }) => padding || '5px 0'};
    height: ${({ height }) => height || 'calc(100% - 40px)'};
`;

export const ModalLabel = styled.div`
    margin: 0 0 5px 10px;
`;
export const ModalInput = styled.input.attrs({
    type: 'text',
    maxLength: maxInputLength,
    autoFocus: true,
})`
    color: ${({ theme }) => theme.global.color};
    padding: 0 10px;
    width: 100%;
    border: none;
    height: 30px;
    border-radius: var(--smallRadius);
    background-color: ${({ theme }) => theme.global.input};
    font-size: 0.85em;
`;

export const CustomModalTitle = styled.div`
    font-size: 1.2em;
    padding: 10px;
    text-align: center;
    max-height: 100px;
    overflow: hidden auto;
    text-overflow: ellipsis;
`;

export const CustomModalFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const CustomModalButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 40px;

    padding: 10px;
    font-size: 0.9em;

    border-radius: var(--mediumSmallRadius);
    background: ${({ mode, theme }) =>
        mode === 'delete' ? theme.modal.modalDeleteBtn : theme.modal.modalBtn};
    border: none;
    color: ${({ theme }) => theme.global.color};

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;

    cursor: pointer;

    &:hover {
        filter: brightness(1.05);
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0 10px 0;

    @media (max-width: 600px) {
        display: block;
    }
`;
export const Select = styled.select`
    width: 60%;
    height: 30px;
    background-color: ${({ theme }) => theme.global.input};
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.global.color};
    padding: 0 3px;
    @media (max-width: 600px) {
        display: block;
        width: 100%;
    }
`;
export const Option = styled.option`
    height: 50px;
    font-size: 16px;
`;

export const CustomEditorBody = styled.div`
    background-color: #444;
    color: black;
    height: 100%;
    max-height: calc(100% - 95px);
    overflow-y: auto;
    margin: 2px 0 5px 0;
    border-radius: var(--smallRadius);

    & > :first-child {
        height: 100%;
        & > :first-child {
            height: 100%;
            & > :first-child {
                height: 100%;
            }
        }
    }

    .ce-block__content,
    .ce-toolbar__content {
        max-width: calc(100% - 80px) !important;
    }
    .cdx-block {
        max-width: 100% !important;
    }
    .ce-paragraph,
    .ce-header,
    .tc-table,
    .cdx-input {
        color: white;
        sup {
            color: black;
        }
    }
    .codex-editor__redactor {
        padding-bottom: 100px !important;
    }
    .ce-code {
        textarea {
            background-color: #333;
            color: white;
        }
    }
    ol,
    ul {
        color: white;
    }
    .ce-delimiter {
        color: white;
    }

    .ce-block a {
        cursor: unset;
    }

    @media (max-width: 600px) {
        .ce-toolbar__content {
            max-width: 100% !important;
        }
        .ce-block__content,
        .ce-toolbar__content {
            max-width: 95% !important;
        }
    }
`;
