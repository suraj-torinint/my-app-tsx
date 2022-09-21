import { Dispatch } from "redux";
import { actionType } from "../reducers/amountReducer";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: "deposit",
            payload: amount,
        });
    };
};

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: "withdraw",
            payload: amount,
        });
    };
};
