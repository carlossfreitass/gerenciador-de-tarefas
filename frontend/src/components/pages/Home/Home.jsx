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
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message)
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
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }

  function removeProject(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Tarefa removida com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <section className={styles.home_container}>
      <LinkButton to='/newtask' icon={<IoMdAdd />} text='Adicionar Tarefa' />
      <hr />
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <div>
        {projects.length > 0 && 
          projects.map((project) => (
            <TaskCard 
              id={project.id}
              title={project.title}
              key={project.id}
              handleRemove={removeProject}
              handleTaskStatusChange={loadTasks}
              completed={project.completed}
            />
          ))
        }

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há tarefas cadastradas!</p>
        )}
      </div>
    </section>
  )
}

export default Home