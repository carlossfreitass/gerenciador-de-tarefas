import Container from '../Container/Container'
import styles from './Header.module.css'

function Header() {
  return (
      <header className={styles.header_container}>
        <Container>
          <h1>GERENCIADOR DE TAREFAS</h1>
        </Container>
      </header>
  )
}

export default Header