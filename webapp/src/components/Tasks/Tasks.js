import Task from '../Task/Task';

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
    
    return (
        <>
          {
              tasks.length>0?
              tasks.map((task)=>(
                  <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete.bind(this, task.id)}
                    onDoubleClick={()=>onDoubleClick(task.id)}
                  />
                
              )) :
              <h3>No Tasks to show</h3>
          }  
        </>
    );
}  
        

export default Tasks;