import { noteworthy } from '../../themes/themes';

const initialState = {
    theme: noteworthy,
};

const SET_THEME = 'SET_THEME';

// ? actions
export const setTheme = (theme) => ({
    type: SET_THEME,
    theme,
});

// ? Reducer
const themeDuck = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            const { theme } = action;
            return { theme };
        default:
            return state;
    }
};
export default themeDuck;
