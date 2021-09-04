const MenuIcon = ({ width, height }) => {
    return (
        <svg
            style={{ cursor: 'pointer' }}
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
            <line x1='4' y1='6' x2='20' y2='6' />
            <line x1='4' y1='12' x2='20' y2='12' />
            <line x1='4' y1='18' x2='20' y2='18' />
        </svg>
    );
};

export default MenuIcon;
MenuIcon.defaultProps = {
    width: '44px',
    height: '44px',
};
