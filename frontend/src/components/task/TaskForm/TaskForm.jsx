/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

import Input from '../../form/Input/Input'
import TextArea from '../../form/TextArea/TextArea'
import SubmitButton from '../../form/SubmitButton/SubmitButton'

import styles from './TaskForm.module.css'

function TaskForm({ handleSubmit, btnText, projectData }) {
  const [task, setTask] = useState(projectData || {})

  useEffect(() => {
    if (projectData) {
      setTask(projectData)
    }
  }, [projectData])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(task)
  }

  function handleChange(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={submit} className={styles.form} >
      <Input 
        type='text'
        text='Título da tarefa'
        name='title'
        placeholder='Insira o título da tarefa'
        handleOnChange={handleChange}
        value={task.title ? task.title : ''}
      />
      <TextArea 
        textLabel='Descrição da tarefa'
        name='description'
        placeholder='Insira a descrição da tarefa'
        handleOnChange={handleChange}
        rows='5'
        value={task.description ? task.description : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default TaskForm