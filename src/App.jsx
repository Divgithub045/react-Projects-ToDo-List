import './styles.css'
import { useState } from 'react';
function App()
{
  const [tasks,setTasks]=useState([]);
  const[taskdescription,setTaskDescription] = useState("Empty Task Description");
  const[tasktime,setTaskTime] = useState(new Date());
  function handleAddTask()
  {
    const newTask = { desc: taskdescription,
                      tym: tasktime
                    }
    setTasks(t=>[...t,newTask]);
    setTaskDescription("");
    setTaskTime(new Date());

  }
  function descchangehandler(event)
  {
    setTaskDescription(event.target.value);
  }
  function timechangehandler(event)
  {
    setTaskTime(event.target.value);
  }
  function handleRemoveTask(index)
  {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));

  }
  return(
   
    <>
     <div class="todo-container">
        <h1>To-Do List</h1>
        <div class="input-section">
            <input type="text" placeholder="Add a new task..." id="new-task" onChange={descchangehandler} value={taskdescription}></input>
            <br />
            <input type="datetime-local" name="" id="" onChange={timechangehandler} value={tasktime}/>
            <br />
            <button id="add-task-btn" onClick={handleAddTask}>Add</button>
        </div>
        <ul class="todo-list">
          {tasks.map((task,index)=>  <li key={index}>
                <span>{task.desc}</span>
                <br />
                <span>{new Date(task.tym).toLocaleString()}</span>
                <button class="delete-btn" onClick={()=>handleRemoveTask(index)}>✖</button>
            </li>)}
          
        </ul>
    </div>
    </>
  )
}
export default App;