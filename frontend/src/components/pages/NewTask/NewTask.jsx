import { useNavigate } from 'react-router-dom'

import TaskForm from '../../task/TaskForm/TaskForm'
import styles from './NewTask.module.css'

function NewTask() {
  const navigate = useNavigate()

  function createPost(task) {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then((resp) => resp.json())
    .then(() => {
      const state = {message: "Tarefa criada com sucesso!"}
      navigate('/', {state})
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Adicionar Tarefa</h1>
      <p>Tudo pronto para começar? Adicione sua tarefa abaixo.</p>
      <TaskForm handleSubmit={createPost} btnText='Adicionar Tarefa' />
    </div>
  )
}

export default NewTask