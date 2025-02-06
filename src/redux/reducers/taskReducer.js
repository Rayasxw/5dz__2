import { types } from "../types/types"

const initialState = {
    input: '',
    completed: '',
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    if (action.type === types.ADD_TASK) {
        return {
            ...state,
            tasks: [...state.tasks, {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            }]
        }
    }

    return state
}