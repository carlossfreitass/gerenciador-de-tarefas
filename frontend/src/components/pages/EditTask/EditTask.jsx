import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import TaskForm from '../../task/TaskForm/TaskForm'
import Loading from '../../layout/Loading/Loading'

import styles from '../NewTask/NewTask.module.css'

function EditTask() {
  const [projects, setProjects] = useState({})
  const [removeLoading, setRemoveLoading] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((data) => {
      for (let task of data) {
        if (task.id == id) {
          setProjects(task)
          break
        }
      }
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  function editTask(task) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then((resp) => resp.json())
    .then(() => {
      const state = {message: "Tarefa editada com sucesso!"}
      navigate('/', {state})
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Editar Tarefa</h1>
      <p>Gostaria de corrigir algo? Edite sua tarefa abaixo.</p>
      {!removeLoading && <Loading />}
      <TaskForm handleSubmit={editTask} btnText='Editar Tarefa' projectData={projects} />
    </div>
  )
}

export default EditTask