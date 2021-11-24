import { SUCCESS, ERROR, CLEAR_MESSAGE } from "./types";

const success = (message) => ({
    type: SUCCESS,
    payload: message,
});

const error = (message) => ({
    type: ERROR,
    payload: message,
});

const clear = () => ({
    type: CLEAR_MESSAGE,
});

export const alertActions = {
    success,
    error,
    clear
}