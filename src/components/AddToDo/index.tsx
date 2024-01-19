import { FormEvent, useRef } from 'react';
import './index.css';
import { taskService } from '../../services/taskService';

function AddToDo({ addNewTask }: any) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titleRef.current)
    if(titleRef.current){
      console.log("teste1")
      const title = titleRef.current?.value
      const description = descriptionRef.current?.value

      const task = await taskService.create(1, title, description)
      addNewTask(task)
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Título"
        required
        />
      <textarea
        ref={descriptionRef}
        placeholder="Descrição"
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddToDo;
