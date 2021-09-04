import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Portal from './Portal';

const StyledTooltip = styled.span.attrs((p) => ({
    bg: p.bg || 'dark',
    delay: p.delay || 0.4,
}))`
    position: fixed;
    top: ${(p) => p.posRef.current.y}px;
    left: ${(p) => p.posRef.current.x}px;
    /* font-size: var(--fsize-2); */
    /* font-weight: 700; */
    background-color: #2c2c2c;
    box-shadow: '0 0px 9px 0px #525252';
    /* background-color: #565656; */
    letter-spacing: 0.02em;
    color: white;
    pointer-events: none;
    padding: 7px 10px;
    border-radius: var(--smallRadius);
    font-size: 15px;
    z-index: 99999;
    display: inline-block;
    white-space: nowrap;
    opacity: ${(p) => p.show};
    transition-property: transform, opacity !important;
    transition-duration: 0.06s !important;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
    transition-delay: ${(p) => (p.show ? p.delay : 0.02)}s !important;
    transform-origin: ${(p) => position(p.placment).negate()};
    transform: scale(${(p) => (p.show ? 1 : 0.7)});
`;

export const position = (p) => ({
    current: p,
    negate() {
        if (this.current === 'left') return 'right';
        if (this.current === 'right') return 'left';
        if (this.current === 'top') return 'bottom';
        if (this.current === 'bottom') return 'top';
    },
    isHorizontal() {
        return this.current === 'left' || this.current === 'right';
    },
    isVertical() {
        return this.current === 'top' || this.current === 'bottom';
    },
});

export const point = () => ({
    x: null,
    y: null,
    reset(p) {
        this.x = p.x;
        this.y = p.y;
    },
    restrictRect(rect) {
        if (this.x < rect.l) this.x = rect.l;
        else if (this.x > rect.r) this.x = rect.r;
        if (this.y < rect.t) this.y = rect.t;
        else if (this.y > rect.b) this.y = rect.b;
    },
});

export const getPoint = (el, tt, placement, space, offsetY) => {
    let recurCount = 0;
    const pt = point();
    const bdys = {
        l: space,
        t: space,
        r: document.body.clientWidth - (tt.clientWidth + space),
        b: window.innerHeight - (tt.clientHeight + space),
    };
    
    const elRect = el.getBoundingClientRect();

    return (function recursive(placement) {
        recurCount++;
        const pos = position(placement);
        switch (pos.current) {
            case 'left':
                pt.x = elRect.left - (tt.offsetWidth + space);
                pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
                break;
            case 'right':
                pt.x = elRect.right + space;
                pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2  - (offsetY);
                break;
            case 'top':
                pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
                pt.y = elRect.top - (tt.offsetHeight + space);
                break;
            default:
                pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
                pt.y = elRect.bottom + space;
        }

        if (recurCount < 3)
            if (
                (pos.isHorizontal() && (pt.x < bdys.l || pt.x > bdys.r)) ||
                (pos.isVertical() && (pt.y < bdys.t || pt.y > bdys.b))
            ) {
                pt.reset(recursive(pos.negate()));
            }

        // restrict to rect boundary
        pt.restrictRect(bdys);

        return pt;
    })(placement);
};

function Tooltip({
    text = '',
    placement = 'bottom',
    space = 5,
    children,
    disabled = 0,
    delay,
    bg,
    offsetY = 0,
}) {
    const [show, setShow] = useState(0);
    const posRef = useRef({ x: 0, y: 0 });
    const tooltipRef = useRef();

    const handleMOver = (e) => {
        setShow(1);
        posRef.current = getPoint(
            e.currentTarget,
            tooltipRef.current,
            placement,
            space,
            offsetY
        );
    };
    const handleMOut = () => setShow(0);

    if (text === '' || text === null) return <>{children}</>;

    return (
        <>
            {disabled
                ? children
                : React.cloneElement(children, {
                      onMouseOver: handleMOver,
                      onMouseOut: handleMOut,
                  })}
            {disabled || (
                <Portal>
                    <StyledTooltip
                        delay={delay}
                        bg={bg}
                        ref={tooltipRef}
                        posRef={posRef}
                        show={show}
                    >
                        {text}
                    </StyledTooltip>
                </Portal>
            )}
        </>
    );
}

export default Tooltip;
