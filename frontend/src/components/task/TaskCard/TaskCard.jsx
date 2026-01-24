import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './TaskCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { MdOutlineDescription } from 'react-icons/md'

function TaskCard({id, title, handleRemove, handleTaskStatusChange, completed }) {
  const [isCheck, setIsCheck] = useState(completed || false)
  const type = completed ? 'complete' : 'incomplete'

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  const handleCheckboxChange = (e) => {
    setIsCheck(e.target.checked)
    alterateStatus(id)
  }

  function alterateStatus(id) {
    const route = isCheck ? 'incomplete' : 'complete'

    fetch(`http://localhost:3000/tasks/${id}/${route}`, {
      method: 'PATCH'
    })
    .then(() => handleTaskStatusChange())
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.task_card}>
      <span className={`${styles.span} ${styles[type]}`}>&nbsp;</span>
      <input type="checkbox" name="statustask" id="statustask" checked={isCheck} onChange={handleCheckboxChange} />
      {completed ? (
        <p><s>{title}</s></p>
      ) : (
        <p>{title}</p>
      )}
      <div className={styles.task_card_actions}>
        <Link className={styles.task_card_description} to='/description'>
          <MdOutlineDescription />
        </Link>
        <Link className={styles.task_card_edit} to={`/task/${id}`}>
          <BsPencil />
        </Link>
        <button className={styles.task_card_remove} onClick={remove} >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default TaskCard