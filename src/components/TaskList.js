import { useSelector } from "react-redux";
import TaskCard from './TaskCard'

const TaskList = () => {
    const tasks = useSelector(state => state.taskReducer.tasks)
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '40px', gap: '20px', flexWrap: 'wrap', margin: '0 auto'}}>
            {tasks.map((element, idx) => 
                <TaskCard
                    key={idx}
                    title={element.title}
                    description={element.description}
                    completed={element.completed}
                    index={idx}
                    isDeleting={element.isDeleting}
                />
            )}
        </div>
    )
}

export default TaskList;