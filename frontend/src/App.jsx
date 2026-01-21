// Importa os componentes do React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Importa os componentes de página
import Home from './components/pages/Home/Home'
import NewTask from './components/pages/NewTask/NewTask'

// Importa os componentes de layout
import Container from './components/layout/Container/Container'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/newtask' element={<NewTask />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
