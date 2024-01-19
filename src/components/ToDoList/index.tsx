import ToDoItem from '../ToDoItem';
import './index.css';

export interface ItemsProps{
  id: string,
  title: string,
  description: string,
  status: 'peding' | 'in_progress' | 'completed'
}

interface ToDoItemProps {
  tasks: ItemsProps[];
  removeTask: (id: string) => void
}


function ToDoList({ tasks, removeTask }: ToDoItemProps) {

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDoItem remove={removeTask} key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ToDoList;
