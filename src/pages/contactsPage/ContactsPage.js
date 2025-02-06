import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, withParamsAction } from "../../redux/actions/actions";


const ContactsPage = () => {
    const title = useSelector(state => state.contactReducer.contactsTitle)
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const withParams = () => {
        dispatch(withParamsAction('hello geeks'))
    }

    const addInput = () => {
        dispatch(addUserAction(input))
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>----------------------------------</p>
            <input type="text" onChange={(event) => setInput(event.target.value)} />
            <button onClick={addInput}>add</button>
        </div>
    )
}

export default ContactsPage;