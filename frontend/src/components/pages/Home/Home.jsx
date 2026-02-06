/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../../layout/Message/Message'
import Loading from '../../layout/Loading/Loading'
import LinkButton from '../../layout/LinkButton/LinkButton'
import TaskCard from '../../task/TaskCard/TaskCard'

import { IoMdAdd } from "react-icons/io"

import styles from './Home.module.css'

function Home() {
  const [tasks, setTasks] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const [taskMessage, setTaskMessage] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message)
      setType('success')
      window.history.replaceState({}, document.title)
    }
  }, [])

  useEffect(() => {
    loadTasks()
  }, [])

  function loadTasks() {
    fetch(`http://localhost:3000/tasks`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
      setTasks(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }

  function loadMessage(id) {
    setMessage('')
    const index = tasks.findIndex((task) => task.id == id)

    setTimeout(() => {
      setMessage(`${tasks[index].description}`)
      setType('description')
    }, 50)
  }

  function removeProject(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      setTasks(tasks.filter((tasks) => tasks.id !== id))
      setTaskMessage('Tarefa removida com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <section className={styles.home_container}>
      <LinkButton to='/newtask' icon={<IoMdAdd />} text='Adicionar Tarefa' />
      <hr />
      {message && <Message type={type} msg={message} />}
      {taskMessage && <Message type="success" msg={taskMessage} />}
      <div>
        {tasks.length > 0 && 
          tasks.map((task) => (
            <TaskCard 
              id={task.id}
              title={task.title}
              key={task.id}
              handleRemove={removeProject}
              handleTaskStatusChange={loadTasks}
              handleMessage={loadMessage}
              completed={task.completed}
            />
          ))
        }

        {!removeLoading && <Loading />}
        {removeLoading && tasks.length === 0 && (
          <p>Não há tarefas cadastradas!</p>
        )}
      </div>
    </section>
  )
}

export default Home