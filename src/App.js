import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks]=useState([
    {
      id:1,
      text: 'Doctors appointment',
      day: 'Feb 5, 8:00',
      reminder: true,
    },
    {
      id:2,
      text: 'Buy eggs',
      day: 'Feb 5, 8:00',
      reminder: true,
    }

  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000 + 1)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  //Toggle reminder
  const toogleReminder = (id) =>  {
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
    <Header/>
    <AddTask onAdd={addTask}/>
    {tasks.length>0 ? <Tasks tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toogleReminder}/>: 'No tasks to show '}
    </div>
  );
}

export default App;
