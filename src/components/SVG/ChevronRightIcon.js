const ChevronRightIcon = ({ width, height, rotate }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            transform={rotate ? 'rotate(90)' : 'rotate(0)'}
            style={{transition: 'transform 0.3s'}}
            viewBox='0 0 24 24'
            strokeWidth={rotate ? '2.5' : '1.5'}
            stroke='#ffffff'
            // fill={rotate ? 'white' : 'none'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <polyline points='9 6 15 12 9 18' />
        </svg>
    );
};

export default ChevronRightIcon;

ChevronRightIcon.defaultProps = {
    width: 30,
    height: 30,
    rotate: false,
};
