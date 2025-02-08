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
export function editTaskAction(title, description, index) {
    return {
        type: types.EDIT_TASK,
        payload: {title, description, index }
    }
}

export function deleteTaskAction(index) {
    return {
        type: types.DELETE_TASK,
        payload: {index}
    }
}

export function completedTaskAction(index) {
    return {
        type: types.COMPLETED_TASK,
        payload: {index}
    }
}

