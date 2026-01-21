import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text, icon }) {
  return (
    <Link to={to} className={styles.btn}>{icon} {text}</Link>
  )
}

export default LinkButton