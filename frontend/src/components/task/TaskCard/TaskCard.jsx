import styles from './TaskCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { MdOutlineDescription } from 'react-icons/md'

function TaskCard({id, title, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.task_card}>
      <span>&nbsp;</span>
      <input type="checkbox" name="statustask" id="statustask" />
      <p>{title}</p>
      <div className={styles.task_card_actions}>
        <button className={styles.task_card_description}>
          <MdOutlineDescription />
        </button>
        <button className={styles.task_card_edit}>
          <BsPencil />
        </button>
        <button className={styles.task_card_remove} onClick={remove} >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default TaskCard