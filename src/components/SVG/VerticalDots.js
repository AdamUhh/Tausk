import styled from 'styled-components';

const SVG = styled.svg`
    &:hover {
        filter: brightness(1.2);
    }
`;

const VerticalDots = ({ width, height }) => {

    return (
        <SVG
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='#dddddd'
            fill='#dddddd'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='12' cy='12' r='1' />
            <circle cx='12' cy='19' r='1' />
            <circle cx='12' cy='5' r='1' />
        </SVG>
    );
};

export default VerticalDots;
VerticalDots.defaultProps = {
    width: '44px',
    height: '44px',
};
