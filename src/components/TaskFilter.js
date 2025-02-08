import React from 'react'

function TaskFilter({isComplited}) {
    const filter = () => {
        if(isComplited){
            console.log('complited')
        }
    }
  return (
    <div>
        <button>Все</button>
        <button onClick={filter}>Сделано</button>
        <button>Не сделано</button>
    </div>
  )
}

export default TaskFilter