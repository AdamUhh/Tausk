import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const BGContainer = styled.div`
    /* background-color: aliceblue; */
    background: rgb(34, 154, 255);
    background: radial-gradient(
        circle,
        rgba(34, 154, 255, 1) 0%,
        rgba(65, 147, 255, 1) 68%
    );
    color: ${({ theme }) => theme.global.invertedColor};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 0.75rem;
    margin: 0 auto;

    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 576px) {
        max-width: 540px;
    }
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 2rem;
    padding: 0.5rem;
    box-shadow: 0 1px 10px 0px #1A73E8;
`;

export const CardBody = styled.div`
    flex: 1 1 auto;
    padding: 1rem 1rem;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
margin: 15px 0 5px 0`;

export const FormLabel = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
`;

export const FormControl = styled.input`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-family: sen, sans-serif;

    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
`;

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
    background-color: #005bed;

    &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }

    ${({ variant }) =>
        variant === 'link'
            ? `
        font-weight: 400;
        color: #0b5ed7;
        text-decoration: underline;
        background-color: transparent;
        border: 1px solid transparent;
        text-decoration: none;

        &:hover {
            color: #0a58ca;
            background-color: transparent;
            border-color: transparent;
        }
        `
            : variant === 'primary' &&
              `
        
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
        &:hover {
            color: #fff;
            background-color: #0b5ed7;
            border-color: #0a58ca;
        }
    `}
`;

export const Alert = styled.div`
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    ${({ variant }) =>
        variant === 'danger'
            ? css`
                  color: #842029;
                  background-color: #f8d7da;
                  border-color: #f5c2c7;
              `
            : variant === 'success' &&
              css`
                  color: #0f5132;
                  background-color: #d1e7dd;
                  border-color: #badbcc;
              `}
`;

export const StyledLink = styled(Link)`
    color: #005bed;

    &:hover {
        color: #0b10b1;
    }
`;
