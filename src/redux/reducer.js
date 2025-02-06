import { combineReducers } from "redux"
import contactReducer from "./reducers/contactReducer"
import mainReducer from "./reducers/mainReducer"
import taskReducer from "./reducers/taskReducer"

export const rootReducer = combineReducers({
    contactReducer,
    mainReducer,
    taskReducer
})
