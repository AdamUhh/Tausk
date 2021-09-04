const HorizontalDots = ({ width, height }) => {
    return (
        <svg
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
            <circle cx='5' cy='12' r='1' />
            <circle cx='12' cy='12' r='1' />
            <circle cx='19' cy='12' r='1' />
        </svg>
    );
};

export default HorizontalDots;
HorizontalDots.defaultProps = {
    width: '44px',
    height: '44px',
};
