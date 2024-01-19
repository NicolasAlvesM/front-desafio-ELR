import { ItemsProps } from '../ToDoList';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

import './index.css';
import EditTaskDialog from '../EditTaskDialog';
import { taskService } from '../../services/taskService';

interface ToDoItemProps {
  task: ItemsProps;
  remove: (id: string) => void
}

const aaa = ['pending', 'in_progress', 'completed']

function ToDoItem({ task, remove }: ToDoItemProps) {
  const [teste, setTeste] = useState(0);
  return (
    <div onClick={()=>{
      if(window.matchMedia("(max-width: 600px)").matches){
        console.log("mobile")
      }
    }} className={`todo-item item-${task.status}`}>
         <EditTaskDialog />
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <span onClick={(e) => {
        e.stopPropagation();
        if(teste<2)
          setTeste(a=>a+1)
        else{
          setTeste(0)
        }
      }} className={`status ${aaa[teste]}`}>{aaa[teste]}</span>
      <button onClick={() => {}} className="edit-btn"><EditIcon fontSize='small' /></button>
      <button onClick={(e) => {e.stopPropagation(); taskService.delete(task.id).then(()=>{
        remove(task.id);
      })}} className="remove-btn"><ClearIcon fontSize='small' /></button>
    </div>
  );
}

export default ToDoItem;
