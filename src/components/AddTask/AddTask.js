import { useState } from 'react'



const AddTask = ({addTask}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();

        addTask({ text, date, reminder });

        // reset form
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={(e)=>onSubmit(e)} >
            <div className="form-control">
                <label>Task</label>
                <input 
                    key="task" 
                    type="text" 
                    placeholder="Enter new task"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Date</label>
                <input 
                    key="date" 
                    type="text" 
                    placeholder="Enter date" 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
            </div>

            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input 
                    key="reminder" 
                    type="checkbox" 
                    checked={reminder}
                    value={reminder}
                    onChange={(e)=>setReminder(e.currentTarget.checked)}
                />
            </div>

            <input className="btn btn-block" type="submit" value="Add" />
        </form>
    )
}

export default AddTask
