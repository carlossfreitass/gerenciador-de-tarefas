import { IoMdAdd } from "react-icons/io";
import LinkButton from '../../layout/LinkButton/LinkButton'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.home_container}>
      <LinkButton to='/newtask' icon={<IoMdAdd />} text='Adicionar Tarefa' />
      <hr />
    </section>
  )
}

export default Home