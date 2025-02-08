import { useDispatch } from 'react-redux'
import styles from './TaskCard.module.css'
import { useState } from 'react'
import { editTaskAction, deleteTaskAction} from '../redux/actions/actions'

const TaskCard = ({ title, description, completed, index, isDeleting }) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(description)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()

    const editBtn = () => {
        if (newTitle === '' || newDesc === '') {
            return alert('Заполните все поля')
        } else {
            dispatch(editTaskAction(newTitle, newDesc, index))
            setIsEditing(false)
        }
    }

    const deleteBtn = () => {
        dispatch(deleteTaskAction(index))
    }

    return (
        isDeleting ? <></> :
        <div className={`${styles.card} ${completed ? styles.completed : ''}`}>
            {isEditing ? (
                <div className={styles.edit}>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                    <button onClick={editBtn}>Save</button>
                </div>
            ) : (
                <>
                    <h2>{title}</h2>
                    <hr />
                    <p>{description}</p>
                </>
            )}
            <div className={styles.buttons}>
                <input type="checkbox"  checked={completed} />
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={deleteBtn}>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard;