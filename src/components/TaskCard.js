import styles from './TaskCard.module.css'
import { useState } from 'react'

const TaskCard = ({title, description, completed, index}) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(description)
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const editBtn = () => {
        setIsEditing(!isEditing)
    }
    const saveBtn = () => {
        if (newTitle === '' || newDesc === '') {
            return alert('Заполните все поля')
        }else {
            setIsEditing(false)
        }
        
    }
    const deleteBtn = () => {
        setIsDeleted(!isDeleted)
    }

    return (
        isDeleted ? <></> :
        <div className={styles.card}>
            {isEditing ? 
                <div className={styles.edit}>
                    <input type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} /> 
                    <input 
                        type="text" 
                        value={newDesc} 
                        onChange={(e) => setNewDesc(e.target.value)} />
                    <button onClick={saveBtn}>Save</button>
                </div>
            :   
                <>
                    <h2>{newTitle}</h2>
                    <hr />
                    <input className={styles.Aman} />
                    <p>{newDesc}</p>
                </>
            }
            
            
            
            <div className={styles.buttons}>
                <input type="checkbox" />
                <button onClick={editBtn}>Edit</button>
                <button onClick={deleteBtn}>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard;