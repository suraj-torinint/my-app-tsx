export interface actionType {
    type: string;
    payload: number;
}

const amountReducer = (state = 43999, action: actionType) => {
    if (action.type === "deposit") {
        return state + action.payload;
    } else if (action.type === "withdraw") {
        return state - action.payload
    } else {
        return state;
    }
};

export default amountReducer;
