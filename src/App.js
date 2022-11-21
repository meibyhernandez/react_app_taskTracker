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

  return (
    <div className="container">
    <Header/>
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
