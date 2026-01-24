import { Link } from 'react-router-dom'

import Container from '../Container/Container'

import styles from './Header.module.css'

function Header() {
  return (
      <header className={styles.header_container}>
        <Container>
          <Link className={styles.link} to='/' >
            <h1>GERENCIADOR DE TAREFAS</h1>
          </Link>
        </Container>
      </header>
  )
}

export default Header