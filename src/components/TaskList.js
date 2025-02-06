import { useSelector } from "react-redux";
import TaskCard from './TaskCard'


const TaskList = () => {

    const { tasks } = useSelector(state => state.taskReducer)
    
    console.log(tasks);
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-between',padding: '40px',gap:'20px', flexWrap: 'wrap', margin:'0 auto'}}>
            {tasks.map((element, idx) => 
                <TaskCard
                    title={element.title}
                    description={element.description}
                    completed={element.completed}
                />
            )}
        </div>
    )
}

export default TaskList;