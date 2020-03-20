export const PREPARATIONS_PUT = 'preparations/put';
export const PREPARATIONS_CLEAR = 'preparations/clear';

export const put = preparations => ({
    type: PREPARATIONS_PUT,
    payload: preparations
});

export const clear = () => ({
    type: PREPARATIONS_CLEAR
});

export default (state = [], action) => {
    switch (action.type) {
    case PREPARATIONS_PUT:
        return action.payload;
    case PREPARATIONS_CLEAR:
        return [];
    default:
        return state;
    }
};
