/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import TextArea from '../../form/TextArea/TextArea'
import Loading from '../../layout/Loading/Loading'

import styles from '../NewTask/NewTask.module.css'

function Description() {
  const [task, setTask] = useState({})
  const [removeLoading, setRemoveLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((data) => {
      for (let task of data) {
        if (task.id == id) {
          setTask(task)
          break
        }
      }
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.container}>
      <h1>{task.title}</h1>
      {!removeLoading && <Loading />}
      <TextArea 
        textLabel='Descrição'
        name='description'
        rows='5'
        value={task.description ? task.description : ''}
        readOnly={true}
      />
    </div>
  )
}

export default Description