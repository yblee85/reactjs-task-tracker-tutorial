// import logo from './logo.svg';
// import './App.css';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Tasks from './components/Tasks/Tasks'
import AddTask from './components/AddTask/AddTask'

function App() {
  const [ nextId, setNextId ] = useState(5)
  const [ showAddTask, setShowAddTask ] = useState(false);
  const [ tasks, setTasks ] = useState([]);

  useEffect(()=>{
    fetchTasks()
    .then((data)=>setTasks(data))
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    return data;
  }

  const fetchTask = async ({id}) => {
    const res = await fetch(`/api/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const onClickAdd = () => {
    setShowAddTask(true);
  }

  const onDelete = async (key) => {
      const res = await fetch(`/api/tasks/${key}`, {
        method: "DELETE"
      });  

      // trigger ?
      let newTasks = tasks.filter((t)=>t.id!==key);
      setTasks(newTasks);
  }

  const addTask = async ({text, date:day, reminder})=>{
      let newTask = {
          id : nextId,
          text, day, reminder
      };

      const res = await fetch(`/api/tasks`, {
        method: "POST",
        headers : {
          'Content-type': 'application/json'
        },
        body : JSON.stringify(newTask)
      });  

      const data = await res.json();

      setTasks([...tasks, data]);
      setNextId(data.id+1)
      setShowAddTask(false)
  }

  const onDoubleClick = async (key) => {

    const foundTask = await fetchTask({id:key});

    console.log(foundTask);

    foundTask.reminder = !foundTask.reminder;
    const res = await fetch(`/api/tasks/${key}`, {
      method: "PUT",
      headers : {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(foundTask)
    });  

    // const data = await res.json();

    let newTasks = tasks.map((t)=>{
        // if(t.id === key) {
        //     t.reminder = !t.reminder;
        // }
        // return t;

        // or
        return t.id===key?{...t, reminder:!t.reminder}:t;
    });

    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Router>
        <Header title="Task Tracker" onClickAdd={onClickAdd} />
        
        
        <Route path="/" exact render={(props)=>(
          <>
          { showAddTask && <AddTask addTask={addTask} showAddTask={showAddTask} />}
          <Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={onDoubleClick} />
          </>
        )} />
        <Route path="/about" component={About} /> 
          
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
