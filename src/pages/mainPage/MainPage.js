import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from '../../redux/actions/actions'
import styles from './mainPage.module.css'

const MainPage = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        if(taskTitle === '' || taskDesc === '') {
            return alert('Заполните все поля')
        }else{
            dispatch(addTaskAction(taskTitle, taskDesc, false))
            
        }
        setTaskTitle('')
        setTaskDesc('')
        
    }

    return (
        <div className={styles.container}>
            <input type="text" 
            placeholder="Введите задачу"
            onChange={(e) => setTaskTitle(e.target.value)} 
            value={taskTitle}
            />
            <input type="text" 
            placeholder="Введите описание"
            onChange={(e) => setTaskDesc(e.target.value)}
            value={taskDesc}
             />
            <button onClick={addTask}>Добавить</button>
        </div>
    )

}

export default MainPage;