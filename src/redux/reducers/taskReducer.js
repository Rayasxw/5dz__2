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
    }else if (action.type === types.EDIT_TASK){
        const { title, description, index } = action.payload
        const newTasks = state.tasks.map((task, idx) => {
            if (idx === index) {
                return {
                    ...task,
                    title,
                    description
                }
            }
            return task
        })
        return {
            ...state,
            tasks: newTasks
        }
    } else if (action.type === types.DELETE_TASK) {
        const newTasks = state.tasks.map((task, idx) => {
            if (idx === action.payload.index) {
                return {
                    ...task,
                    isDeleting: !task.isDeleting
                }
            }
            return task
        })
        return {
            ...state,
            tasks: newTasks
        }
    } else if (action.type === types.COMPLETED_TASK) {
        const newTasks = state.tasks.map((task, idx) => {
            if(idx === action.payload.index) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        return {
            ...state,
            tasks: newTasks
        }
    }

    return state
}