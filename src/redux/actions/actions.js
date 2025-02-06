import { types } from "../types/types";

export function changeTitleAction () {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function addUserAction(input) {
    return {
        type: types.FROM_INPUT,
        payload: input
    }
}

export function addTaskAction(title, description, completed) {
    return {
        type: types.ADD_TASK,
        payload: {title, description, completed }
    }
}