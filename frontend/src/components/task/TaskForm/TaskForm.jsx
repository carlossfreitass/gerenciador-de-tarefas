/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

import Input from '../../form/Input/Input'
import TextArea from '../../form/TextArea/TextArea'
import SubmitButton from '../../form/SubmitButton/SubmitButton'

import Loading from '../../layout/Loading/Loading'
import Message from '../../layout/Message/Message'

import styles from './TaskForm.module.css'
import btnStyle from '../../form/SubmitButton/SubmitButton.module.css'

function TaskForm({ handleSubmit, btnText, taskData }) {
  const [task, setTask] = useState(taskData || {})
  const [removeLoading, setRemoveLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [messageAlert, setMessageAlert] = useState(false)
  const [type, setType] = useState('')

  useEffect(() => {
    if (taskData) {
      setTask(taskData)
    }
  }, [taskData])

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

  function suggestTitle() {
    setMessage('')
    setType('')
    setMessageAlert(false)

    setTimeout(() => {
      if (!task.description) {
        setType('error')
        setMessage('A descrição não pode estar vazia!')
        setMessageAlert(true)
        return
      }

      setRemoveLoading(false)

      fetch(`http://localhost:3000/tasks/suggest-title?description=${encodeURIComponent(task.description)}`, {
        method: 'GET',
      })
      .then(resp => resp.json())
      .then(data => {
        setTask({
          ...task,
          title: data.title
        })
        setRemoveLoading(true)
        setType('success')
        setMessage('Título gerado com sucesso!')
        setMessageAlert(true)
      })
      .catch((err) => console.log(err))
    }, 50)
  }

  return (
    <div className={styles.container}>
      {messageAlert && <Message type={type} msg={message} />}
      <form onSubmit={submit} className={styles.form} >
        {!removeLoading && <Loading />}
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
        <button type='button' className={btnStyle.btn} onClick={suggestTitle} >Gerar título com IA</button>
        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}

export default TaskForm