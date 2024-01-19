import { useEffect, useState } from 'react';
import AddToDo from '../../components/AddToDo'
import ToDoList from '../../components/ToDoList'
import './index.css';
import { taskService } from '../../services/taskService';
import { useAuth } from '../../providers/auth';

export interface TaskProps{
    id: string,
    title: string,
    description: string,
    status: 'peding' | 'in_progress' | 'completed'
  }

function Home() {
  const { logOut } = useAuth()
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(()=>{
    taskService.get().then(data => {
      console.log(data)
      setTasks(data);
    })
  },[]);

  const handleAddTask = (task: TaskProps) =>{
    setTasks( prev => [...prev, task])
  }

  const handleRemoveTask = (id: string)=>{
    setTasks(tasks.filter(({id: taskId}) => taskId != id))
  }

  return (
    <div className="app">
      <button onClick={logOut}>Logout</button>
      <h1>My To-Do List</h1>
      <AddToDo addNewTask={handleAddTask}/>
      <ToDoList removeTask={handleRemoveTask} tasks={tasks} />
    </div>
  );
}

export default Home;
