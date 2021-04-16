import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onDoubleClick }) => {
    const taskClass = `task ` + (task.reminder?'reminder':'');
    return (
        <div className={taskClass}>
                <h3 onDoubleClick={onDoubleClick} >
                    {task.text} 
                    <FaTimes 
                        style={{ color:"red", cursor:"pointer" }} 
                        onClick={onDelete} 
                    />
                </h3>
                <p>{task.day}</p>
        </div>
    )
}

export default Task;