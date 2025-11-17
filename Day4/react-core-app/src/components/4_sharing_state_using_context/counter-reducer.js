export const initialState = { count: 0, flag: false };

export function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload };
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload };
        case 'RESET':
            return { ...initialState };
        case 'SETFLAG':
            return { ...state, flag: action.payload };
        default:
            return state;
    }
}