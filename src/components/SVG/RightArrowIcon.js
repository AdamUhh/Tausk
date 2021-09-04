const RightArrowIcon = ({ width, height, rotate }) => {
    return (
        <svg
            style={{ transition: 'transform 0.5s' }}
            transform={rotate ? 'rotate(90)' : 'rotate(0)'}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#ffffff'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='5' y1='12' x2='19' y2='12' />
            <line x1='13' y1='18' x2='19' y2='12' />
            <line x1='13' y1='6' x2='19' y2='12' />
        </svg>
    );
};

export default RightArrowIcon;

RightArrowIcon.defaultProps = {
    width: '44px',
    height: '44px',
    rotateDown: false,
};
