import { Link } from 'react-router-dom';

const ArrowLeft = ({ link, width, height, children }) => {
    const SVGComponent = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-arrow-left'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='5' y1='12' x2='19' y2='12' />
            <line x1='5' y1='12' x2='11' y2='18' />
            <line x1='5' y1='12' x2='11' y2='6' />
            {children}
        </svg>
    );

    if (link) {
        return (
            <div style={{ position: 'absolute', display: 'flex', width: 'min-content' }}>
                <Link to={link}>{SVGComponent}</Link>
            </div>
        );
    }

    return (
        <div style={{ position: 'absolute', display: 'flex', width: 'min-content' }}>
            {SVGComponent}
        </div>
    );
};

export default ArrowLeft;

ArrowLeft.defaultProps = {
    link: false,
    width: 30,
    height: 30,
};
