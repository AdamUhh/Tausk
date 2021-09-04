import { useEffect, useState } from 'react';

const useToaster = () => {
    const [toasterState, setToasterState] = useState({
        isToasterOpen: false,
        shake: false,
        msg: '',
    });

    useEffect(() => {
        if (toasterState.shake) {
            const timer = setTimeout(() => {
                setToasterState((prev) => ({ ...prev, shake: false }));
            }, 600);
            return () => clearTimeout(timer);
        }
        const timer = setTimeout(() => {
            setToasterState((prev) => ({ ...prev, isToasterOpen: false }));
        }, 3000);
        return () => clearTimeout(timer);
    }, [toasterState.shake]);

    return [toasterState, setToasterState];
};

export default useToaster;
