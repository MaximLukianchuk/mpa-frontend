export const PREPARATION_PUT = 'preparation/put';
export const PREPARATION_CLEAR = 'preparation/clear';

export const put = preparation => ({
    type: PREPARATION_PUT,
    payload: preparation
});

export const clear = () => ({
    type: PREPARATION_CLEAR
});

export default (state = {}, action) => {
    switch (action.type) {
    case PREPARATION_PUT:
        return action.payload;
    case PREPARATION_CLEAR:
        return {};
    default:
        return state;
    }
};
