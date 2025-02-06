import { types } from "../types/types"

const initialState = {
    contactsTitle: ''
}


export default function contactReducer(state = initialState, action) {

    if (action.type === types.WITH_PARAMS) {
        return {...state, contactsTitle: action.payload}
    } else if (action.type === types.FROM_INPUT) {
        return {...state, contactsTitle: action.payload}
    }

    return state
}