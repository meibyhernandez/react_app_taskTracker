import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  return (
    <div className="container">
    <Header/>
    {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: 'No tasks to show '}
    </div>
  );
}

export default App;
